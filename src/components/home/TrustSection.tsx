import { ShieldCheck, DollarSign, Eye, Store, UserCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: DollarSign,
    title: "Budget rules are hard limits",
    desc: "Your maximum budget is enforced as a strict filter — not a suggestion. No result will exceed it.",
  },
  {
    icon: ShieldCheck,
    title: "Approval required before purchase",
    desc: "YunoClaw never initiates a transaction. You review the shortlist and choose when to proceed.",
  },
  {
    icon: Eye,
    title: "Transparent explanations",
    desc: "Every recommendation includes a plain-language explanation of why it was chosen and how it scored.",
  },
  {
    icon: Store,
    title: "Merchant trust checks",
    desc: "Each merchant is assigned a trust score based on reliability, return policy, and seller history.",
  },
  {
    icon: UserCheck,
    title: "You remain in control",
    desc: "The agent is a tool, not an autonomous actor. It surfaces options. You make the final call.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">Trust & Safety</span>
          <h2 id="trust-heading" className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Controlled by design
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            YunoClaw is not a reckless automation tool. Every safeguard is built in from the start.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-9 w-9 rounded-lg bg-teal-700/10 flex items-center justify-center text-teal-700">
                  <Icon size={17} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
