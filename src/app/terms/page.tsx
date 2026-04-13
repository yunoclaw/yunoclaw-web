import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for YunoClaw AI shopping assistant.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using YunoClaw, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.",
  },
  {
    title: "2. Description of Service",
    content: "YunoClaw is an AI-powered shopping assistant that helps users find, evaluate, and purchase products based on their constraints. The service provides product recommendations, price comparisons, and merchant redirection.",
  },
  {
    title: "3. User Responsibilities",
    content: "You are responsible for all activity under your account. You must not use the service for any illegal or unauthorized purpose. You must not attempt to reverse-engineer, scrape, or abuse the service.",
  },
  {
    title: "4. Product Recommendations",
    content: "YunoClaw provides product recommendations based on your stated preferences and constraints. We do not guarantee the accuracy, completeness, or reliability of product information, pricing, or availability. You should verify any information before making a purchase.",
  },
  {
    title: "5. Purchases and Transactions",
    content: "YunoClaw does not process payments or handle transactions. All purchases are made directly with merchants. We are not responsible for transactions, returns, or disputes with merchants.",
  },
  {
    title: "6. Intellectual Property",
    content: "All content, features, and functionality of YunoClaw are owned by YunoClaw and are protected by copyright, trademark, and other intellectual property laws.",
  },
  {
    title: "7. Limitation of Liability",
    content: "YunoClaw is provided 'as is' without warranties of any kind. We are not liable for any damages resulting from the use or inability to use the service.",
  },
  {
    title: "8. Changes to Terms",
    content: "We may update these terms at any time. Continued use of the service after changes constitutes acceptance.",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-sand-50 min-h-screen">
      <div className="gradient-hero text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-3 block">
            Legal
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Last updated: April 2026
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8 text-lg">
            These Terms of Service govern your use of YunoClaw. By accessing or using our service, you agree to these terms.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((section, idx) => (
              <section key={idx} className="mb-10">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12 p-6 bg-sand-100 border border-sand-300 rounded-xl">
            <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
              Contact for Questions
            </h3>
            <p className="text-gray-600">
              If you have questions about these terms, contact us at{' '}
              <a href="mailto:legal@yunoclaw.com" className="text-teal-700 hover:underline">
                legal@yunoclaw.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}