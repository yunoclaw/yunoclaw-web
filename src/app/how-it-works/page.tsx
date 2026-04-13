import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, SlidersHorizontal, Database, Filter, BarChart3, FileText, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See exactly how YunoClaw processes your shopping intent — from input to ranked results to merchant redirect. Transparent, step-by-step.",
};

const FLOW_STEPS = [
  {
    icon: MessageSquare,
    title: "Intent Input",
    desc: "You describe what you need in plain language. Include any constraints: budget ceiling, delivery deadline, preferred or blocked merchants, brand preferences.",
    example: '"Find wireless earbuds under $150, delivered within 3 days, not from eBay."',
  },
  {
    icon: SlidersHorizontal,
    title: "Constraint Parsing",
    desc: "YunoClaw extracts your rules as structured filters: max price, category, merchant allowlist/blocklist, delivery window, and quality floor.",
    example: "budget ≤ $150 · delivery ≤ 3 days · exclude: eBay · category: earbuds",
  },
  {
    icon: Database,
    title: "Source Aggregation",
    desc: "The agent queries product sources — merchant APIs, product databases, and trusted catalogues — pulling all candidates that could potentially match.",
    example: "Queried 6 sources · 47 candidates found",
  },
  {
    icon: Filter,
    title: "Hard Filtering",
    desc: "Candidates that violate any hard constraint are eliminated. Budget, delivery, and merchant rules are enforced strictly — not as preferences.",
    example: "47 candidates → 12 passed all hard filters",
  },
  {
    icon: BarChart3,
    title: "Scoring & Ranking",
    desc: "Remaining candidates are scored: rating × 2 + trust score + delivery bonus − price penalty. Top 3 are selected for presentation.",
    example: "Score = (4.7 × 2) + 9.2 + 2 − 1.4 = 19.2",
  },
  {
    icon: FileText,
    title: "Explanation Generation",
    desc: "Each result gets a plain-language explanation: why it was chosen, how it scored, and what trade-offs exist versus other options.",
    example: '"Within budget at $139. Fast 2-day delivery. High trust score from Best Buy (8.7/10)."',
  },
  {
    icon: CheckCircle,
    title: "Approval Layer",
    desc: "You review the ranked shortlist. Nothing is purchased. No payment is initiated. You decide which option to pursue.",
    example: "3 results shown · awaiting your selection",
  },
  {
    icon: ExternalLink,
    title: "Merchant Redirect",
    desc: "When you select a result, you're redirected to the merchant's product page. Checkout happens on the merchant's site — YunoClaw never handles payment.",
    example: "→ Redirecting to bestbuy.com/product/jabra-evolve2-55",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      {/* Header */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4 block">How It Works</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              From intent to decision — transparently.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              YunoClaw doesn't hide its reasoning. Every step from your input to the final recommendation is visible, explainable, and under your control.
            </p>
          </div>
        </div>
      </section>

      {/* Flow steps */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="flow-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="flow-heading" className="sr-only">The full workflow</h2>
          <div className="space-y-6">
            {FLOW_STEPS.map(({ icon: Icon, title, desc, example }, i) => (
              <div key={title} className="flex gap-6">
                {/* Step indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm">
                    <Icon size={20} />
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-sand-300 min-h-[32px]" aria-hidden="true" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-gray-400">Step {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-lg font-semibold text-gray-900">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{desc}</p>
                  <div className="rounded-lg bg-sand-50 border border-sand-200 px-4 py-2.5">
                    <p className="text-xs text-gray-500 font-mono italic">{example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand-100 py-16 border-t border-sand-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">See it in action</h2>
          <p className="text-gray-500 mb-8">Try the interactive demo — no account required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/demo">Try the Demo <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/waitlist">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
