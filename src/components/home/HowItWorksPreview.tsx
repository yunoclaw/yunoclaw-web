import Link from "next/link";
import { MessageSquare, Search, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STEPS = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Tell YunoClaw what you want",
    desc: "Describe what you need in plain language. Add constraints: budget, delivery deadline, preferred merchants, or brands to avoid.",
  },
  {
    icon: Search,
    num: "02",
    title: "It searches across sources",
    desc: "The agent scans product listings, applies your rules as hard filters, and pulls the candidates that actually qualify.",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "It ranks and explains options",
    desc: "Each option is scored by rating, trust, delivery speed, and price fit. You see a ranked shortlist with clear reasoning.",
  },
  {
    icon: CheckCircle,
    num: "04",
    title: "You approve before purchase",
    desc: "Review the top picks. When you're ready, click through to the merchant. Nothing is purchased without your explicit action.",
  },
];

export function HowItWorksPreview() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="hiw-preview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">How It Works</span>
          <h2 id="hiw-preview-heading" className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            From intent to decision in four steps
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STEPS.map(({ icon: Icon, num, title, desc }, i) => (
            <div key={num} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gray-200 z-0" aria-hidden="true" />
              )}
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <span className="font-display text-3xl font-bold text-gray-200 select-none">{num}</span>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/how-it-works">
              See the full flow
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
