import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Code2, LayoutDashboard, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "For Merchants",
  description: "Integrate YunoClaw into your ecommerce platform. Embedded assistant widget, white-label API, merchant dashboard, and partner program.",
};

const BENEFITS = [
  "Reach buyers who already have intent and budget defined",
  "Reduce pre-checkout friction with structured product matching",
  "Improve conversion by surfacing the right product at the right moment",
  "Get visibility into what customers are searching for but not finding",
  "Integrate at any depth — from referral traffic to deep platform embedding",
];

const FEATURES = [
  {
    icon: TrendingUp,
    title: "Embedded assistant widget",
    desc: "Drop a YunoClaw search widget into your product pages. Customers state their intent and get ranked results from your catalogue — without leaving your site.",
  },
  {
    icon: Code2,
    title: "White-label API",
    desc: "Access the full YunoClaw evaluation engine via API. Build your own UI, apply your own branding, and power your product discovery with our ranking logic.",
  },
  {
    icon: LayoutDashboard,
    title: "Merchant dashboard",
    desc: "Real-time visibility into agent-driven traffic: what customers are searching for, which products are being recommended, approval rates, and conversion data.",
  },
  {
    icon: Users,
    title: "Partner program",
    desc: "Revenue sharing, co-marketing opportunities, and dedicated integration support for qualified partners. Apply to join the early partner cohort.",
  },
];

const INTEGRATION_STAGES = [
  {
    stage: "Stage 1",
    title: "External traffic & referrals",
    desc: "YunoClaw users searching for products in your category are referred to your merchant page. No integration required — just list your products.",
    items: ["Zero integration effort", "Referral traffic from intent-matched searches", "Trust score based on merchant profile"],
  },
  {
    stage: "Stage 2",
    title: "Embedded assistant widget",
    desc: "Add the YunoClaw widget to your site. Customers search within your catalogue using natural language and get ranked results instantly.",
    items: ["One-line JavaScript embed", "Searches your product catalogue", "Branded to match your site"],
  },
  {
    stage: "Stage 3",
    title: "Deep platform integration",
    desc: "Full API integration with your inventory, pricing, and checkout systems. Real-time product data, dynamic trust scoring, and conversion analytics.",
    items: ["REST API + webhooks", "Real-time inventory sync", "Checkout handoff with session context"],
  },
];

export default function MerchantsPage() {
  return (
    <main>
      {/* Header */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4 block">For Merchants</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Reach buyers who already know what they want.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              YunoClaw sends pre-qualified, intent-matched traffic to your products. Integrate at any depth — from simple referrals to a fully embedded commerce assistant.
            </p>
            <Button variant="commerce" size="lg" asChild>
              <Link href="/waitlist?role=merchant">
                Apply for merchant access
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">Why YunoClaw</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 tracking-tight mb-6">
                Better product discovery.<br />Higher-intent traffic.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Traditional search sends browsers. YunoClaw sends buyers — people who have already defined their budget, constraints, and intent before they arrive at your product page.
              </p>
              <ul className="space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-teal-700 mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <Card key={title} hover>
                  <CardContent className="p-5">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700/10 text-teal-700">
                      <Icon size={17} />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-gray-900 mb-1.5">{title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration stages */}
      <section className="bg-sand-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">Integration</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Three stages of integration
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Start with zero effort. Go deeper when you're ready.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {INTEGRATION_STAGES.map(({ stage, title, desc, items }, i) => (
              <div key={stage} className="relative rounded-xl border border-sand-300 bg-white p-7">
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-teal-700 px-3 py-1 text-xs font-bold text-white">{stage}</span>
                </div>
                <div className="mt-3 mb-4">
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Ready to integrate?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">We're onboarding a small cohort of merchant partners. Apply now to get early access and dedicated support.</p>
          <Button variant="commerce" size="lg" asChild>
            <Link href="/waitlist?role=merchant">Talk to our team <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
