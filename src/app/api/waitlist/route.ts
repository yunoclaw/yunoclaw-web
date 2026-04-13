import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { waitlistConfirmationEmail } from "@/lib/emails/waitlist-confirmation";

// Simple in-memory rate limiter (resets on cold start — good enough for edge/serverless)
const rateLimitMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 3;       // max submissions
const RATE_WINDOW = 60_000; // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW) {
    rateLimitMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// Escape HTML to prevent XSS in email content
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const VALID_ROLES = ["consumer", "merchant", "developer", "partner"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // Only accept JSON
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const { name, email, role, message, captchaToken } = body as Record<string, unknown>;

  // Verify Turnstile token
  if (!captchaToken || typeof captchaToken !== "string") {
    return NextResponse.json({ error: "Missing CAPTCHA token" }, { status: 400 });
  }
  const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret:   process.env.TURNSTILE_SECRET_KEY ?? "",
      response: captchaToken,
      remoteip: ip,
    }),
  });
  const turnstileData = await turnstileRes.json() as { success: boolean };
  if (!turnstileData.success) {
    return NextResponse.json({ error: "CAPTCHA verification failed" }, { status: 403 });
  }

  // Server-side validation with length limits
  if (typeof name !== "string" || !name.trim() || name.length > 100) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (typeof role !== "string" || !VALID_ROLES.includes(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }
  if (message !== undefined && (typeof message !== "string" || message.length > 1000)) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  // Sanitize all user input before using in HTML
  const safeName    = escapeHtml(name.trim());
  const safeEmail   = escapeHtml(email.trim().toLowerCase());
  const safeRole    = escapeHtml(role);
  const safeMessage = message ? escapeHtml((message as string).trim()) : "";
  const firstName   = safeName.split(" ")[0];

  try {
    await resend.emails.send({
      from: "YunoClaw <team@yunoclaw.tech>",
      to: safeEmail,
      subject: "You're on the YunoClaw waitlist 🎉",
      html: waitlistConfirmationEmail(firstName, safeRole),
    });

    await resend.emails.send({
      from: "YunoClaw <team@yunoclaw.tech>",
      to: "team@yunoclaw.tech",
      subject: `New waitlist signup: ${safeName} (${safeRole})`,
      html: `<p><strong>${safeName}</strong> (${safeEmail}) joined as <strong>${safeRole}</strong>.</p>${safeMessage ? `<p>Message: ${safeMessage}</p>` : ""}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
