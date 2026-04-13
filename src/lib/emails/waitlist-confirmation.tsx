export function waitlistConfirmationEmail(firstName: string, role: string): string {
  const roleLabels: Record<string, string> = {
    consumer: "Consumer",
    merchant: "Merchant",
    developer: "Developer",
    partner: "Partner",
  };

  const roleLabel = roleLabels[role] ?? "Early Adopter";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>You're on the YunoClaw waitlist</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f0;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:#0F766E;padding:28px 40px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="vertical-align:middle;padding-right:10px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36" style="display:block;">
                      <path d="M16 22 C16 22 7 20 6 13 C5 7 9 4 12 5 C14 5.5 14.5 7 13.5 9 C12.5 11 12 13 13 15 C14 17 16 18 16 22 Z" fill="#ffffff"/>
                      <path d="M16 22 C16 22 25 20 26 13 C27 7 23 4 20 5 C18 5.5 17.5 7 18.5 9 C19.5 11 20 13 19 15 C18 17 16 18 16 22 Z" fill="#ffffff"/>
                      <path d="M11 24 C11 21.8 13.2 20 16 20 C18.8 20 21 21.8 21 24 C21 26.2 18.8 28 16 28 C13.2 28 11 26.2 11 24 Z" fill="#ffffff"/>
                    </svg>
                  </td>
                  <td style="vertical-align:middle;">
                    <span style="color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">YunoClaw</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#1F2430;letter-spacing:-0.3px;">
                You're on the list, ${firstName}.
              </h1>
              <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.6;">
                Thanks for joining the YunoClaw early access waitlist as a <strong style="color:#1F2430;">${roleLabel}</strong>. We're launching in <strong style="color:#0F766E;">October 2026</strong> — we'll reach out as soon as your spot is ready.
              </p>

              <!-- What to expect box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf9;border-left:3px solid #0F766E;border-radius:0 8px 8px 0;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#0F766E;text-transform:uppercase;letter-spacing:0.5px;">What to expect</p>
                    <p style="margin:0 0 8px;font-size:14px;color:#374151;line-height:1.6;">✦ &nbsp;Early access invite when we open beta spots</p>
                    <p style="margin:0 0 8px;font-size:14px;color:#374151;line-height:1.6;">✦ &nbsp;Product updates and launch news</p>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">✦ &nbsp;No spam. Unsubscribe anytime.</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#0F766E;border-radius:8px;">
                    <a href="https://yunoclaw.tech" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:0.1px;">
                      Visit yunoclaw.tech →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #f0f0ec;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                You received this because you signed up at yunoclaw.tech.<br/>
                © ${new Date().getFullYear()} YunoClaw · <a href="https://yunoclaw.tech/privacy" style="color:#9ca3af;">Privacy Policy</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
