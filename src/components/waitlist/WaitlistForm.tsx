"use client";

import { useState, useCallback } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Turnstile } from "./Turnstile";

type Role = "consumer" | "merchant" | "developer" | "partner" | "";

interface FormState {
  name: string;
  email: string;
  role: Role;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
  message?: string;
  captcha?: string;
}

const ROLES = [
  { value: "consumer",  label: "Consumer — I want to shop smarter" },
  { value: "merchant",  label: "Merchant — I want to integrate YunoClaw" },
  { value: "developer", label: "Developer — I want API access" },
  { value: "partner",   label: "Partner — I want to collaborate" },
];

export function WaitlistForm() {
  const [form, setForm]           = useState<FormState>({ name: "", email: "", role: "", message: "" });
  const [errors, setErrors]       = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleVerify  = useCallback((token: string) => setCaptchaToken(token), []);
  const handleExpire  = useCallback(() => setCaptchaToken(null), []);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.role)         e.role  = "Please select a role";
    if (!captchaToken)      e.captcha = "Please complete the verification";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captchaToken }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal-700/10 text-teal-700">
            <CheckCircle size={32} />
          </div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-2">You're on the list</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Thanks, {form.name.split(" ")[0]}. We'll reach out to <strong>{form.email}</strong> when your spot is ready.
          </p>
          <p className="text-xs text-gray-400 mt-4">No spam. No credit card. Cancel anytime.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Request early access</h2>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="wl-name" className="block text-sm font-medium text-gray-700 mb-1.5">Full name</label>
            <input
              id="wl-name" type="text" value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your name"
              className="w-full px-3 py-2.5 rounded-md border border-sand-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="wl-email" className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
            <input
              id="wl-email" type="email" value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@example.com"
              className="w-full px-3 py-2.5 rounded-md border border-sand-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          {/* Role */}
          <div>
            <label htmlFor="wl-role" className="block text-sm font-medium text-gray-700 mb-1.5">I am a…</label>
            <select
              id="wl-role" value={form.role}
              onChange={(e) => setForm((f) => ({ ...f, role: e.target.value as Role }))}
              className="w-full px-3 py-2.5 rounded-md border border-sand-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-invalid={!!errors.role}
            >
              <option value="">Select your role</option>
              {ROLES.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
            {errors.role && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="wl-message" className="block text-sm font-medium text-gray-700 mb-1.5">
              Anything else? <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              id="wl-message" value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="What would you use YunoClaw for?"
              rows={3}
              className="w-full px-3 py-2.5 rounded-md border border-sand-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none"
            />
          </div>

          {/* Turnstile CAPTCHA */}
          <div>
            <Turnstile onVerify={handleVerify} onExpire={handleExpire} />
            {errors.captcha && <p className="mt-1 text-xs text-red-600">{errors.captcha}</p>}
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
            {loading ? "Submitting…" : "Request Early Access"}
          </Button>

          <p className="text-center text-xs text-gray-400">No spam. No credit card. Cancel anytime.</p>
        </form>
      </CardContent>
    </Card>
  );
}
