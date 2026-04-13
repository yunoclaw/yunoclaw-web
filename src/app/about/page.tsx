import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "What YunoClaw is, why it exists, and the philosophy behind building a trustworthy agentic commerce assistant.",
};

const PHILOSOPHY = [
  {
    title: "Trust over reckless automation",
    desc: "Autonomous buying bots that act without approval are a liability, not a feature. YunoClaw is designed to be a trusted advisor — it proposes, you decide.",
  },
  {
    title: "Better decisions, not more noise",
    desc: "The problem with online shopping isn't a lack of options. It's too many options with no structured way to evaluate them. We reduce noise, not add to it.",
  },
  {
    title: "Constraints are features",
    desc: "Budget limits, merchant preferences, delivery deadlines — these aren't restrictions to work around. They're the rules that make a recommendation meaningful.",
  },
  {
    title: "Explainability is non-negotiable",
    desc: "If you can't see why a product was recommended, you can't trust the recommendation. Every result in YunoClaw comes with a plain-language explanation.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4 block">About</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              We built the assistant we wanted to use.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              YunoClaw started from a simple frustration: buying something online takes too long, involves too many tabs, and still ends in uncertainty. We wanted a tool that could do the research — under our rules — and present a clear, trustworthy shortlist.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What YunoClaw is</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              YunoClaw is an agentic commerce assistant. It takes a shopping intent — described in plain language — and evaluates available products against a structured set of user-defined rules. It returns a ranked shortlist with transparent explanations, and redirects you to the merchant when you're ready to buy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              It is not a fully autonomous buying bot. It does not initiate purchases. It does not exceed your budget. It does not act without your approval. These are not limitations — they are the design.
            </p>

            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4 mt-10">Why agentic commerce matters</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The way people buy things online hasn't fundamentally changed in 20 years. You open a search engine, open 10 tabs, compare manually, read reviews of uncertain quality, and make a decision under time pressure with incomplete information.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              AI changes this. Not by removing humans from the loop — but by doing the structured evaluation work that humans are bad at and computers are good at. Filtering by hard constraints. Scoring by multiple dimensions simultaneously. Explaining trade-offs clearly.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The human stays in control of the final decision. The agent handles the research. That's the right division of labour.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-sand-100 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 tracking-tight">Product philosophy</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PHILOSOPHY.map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-sand-300 bg-white p-6">
                <h3 className="font-display text-base font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-sand-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Try it yourself</h2>
          <p className="text-gray-500 mb-8">The demo uses mock data — no account required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/demo">Try the Demo <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/waitlist">Join the Waitlist</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
