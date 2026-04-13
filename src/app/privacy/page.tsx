import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How YunoClaw collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "Information we collect",
    content: [
      "Account information: name and email address when you sign up or join the waitlist.",
      "Usage data: how you interact with the product — intents submitted, filters applied, results reviewed.",
      "Commerce data: shopping intents, constraints, and approved redirects you initiate through the assistant.",
      "Device data: browser type, operating system, and IP address for security and analytics.",
    ],
  },
  {
    title: "How we use your information",
    content: [
      "To operate and improve the YunoClaw service.",
      "To send product updates and waitlist communications (opt out at any time).",
      "To detect and prevent fraud or abuse.",
      "To comply with legal obligations.",
    ],
  },
  {
    title: "Data sharing",
    content: [
      "We do not sell your personal data.",
      "We share data only with service providers necessary to operate the product (cloud infrastructure, email delivery) under strict data processing agreements.",
      "We do not share your shopping intents or preferences with merchants without your explicit consent.",
    ],
  },
  {
    title: "Data retention",
    content: [
      "We retain your data for as long as your account is active or as needed to provide the service.",
      "You may request deletion at any time by contacting privacy@yunoclaw.tech.",
    ],
  },
  {
    title: "Your rights",
    content: [
      "Depending on your location, you may have rights to access, correct, delete, or export your personal data.",
      "To exercise these rights, contact privacy@yunoclaw.tech.",
      "EU/UK residents have additional rights under GDPR/UK GDPR.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use essential cookies to operate the service.",
      "We use analytics cookies to understand usage patterns.",
      "You can disable non-essential cookies in your browser settings.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-sand-50 min-h-screen">
      <div className="gradient-hero text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-600 leading-relaxed mb-10 text-lg border-l-4 border-teal-700 pl-5">
          YunoClaw is committed to protecting your personal information. This policy explains what we collect, how we use it, and your rights.
        </p>

        <div className="space-y-10">
          {SECTIONS.map(({ title, content }) => (
            <section key={title}>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-4">{title}</h2>
              <ul className="space-y-2">
                {content.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-sm text-gray-600">
              Questions about this policy? Contact us at{" "}
              <a href="mailto:privacy@yunoclaw.tech" className="text-teal-700 underline hover:text-teal-600">
                privacy@yunoclaw.tech
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
