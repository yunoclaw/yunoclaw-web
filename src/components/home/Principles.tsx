import { Target, Shield, Lock, Zap, Brain, ShoppingCart } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Target,
    title: "Precision",
    desc: "Matches your exact constraints — budget, brand, delivery window — without guessing or over-recommending.",
  },
  {
    icon: Shield,
    title: "Trust",
    desc: "Every recommendation is transparent. You see what was found, why it was chosen, and what will happen next.",
  },
  {
    icon: Lock,
    title: "Control",
    desc: "Nothing executes without your explicit approval. The agent proposes. You decide. Always.",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "What takes an hour of manual research takes YunoClaw seconds across dozens of sources.",
  },
  {
    icon: Brain,
    title: "Intelligence",
    desc: "Learns your preferences over time, refining evaluations to match your standards and past decisions.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Readiness",
    desc: "Connects to real merchants and redirects to checkout — it can act, not just advise.",
  },
];

export function Principles() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="principles-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">Core Principles</span>
          <h2 id="principles-heading" className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Built on six principles
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every design decision in YunoClaw traces back to one of these.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-xl border border-sand-300 bg-sand-50 p-6 transition-all duration-200 hover:border-teal-700/30 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-700/10 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
