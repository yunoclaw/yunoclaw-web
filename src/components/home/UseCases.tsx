import { Gift, Cpu, Home, RefreshCw, Clock } from "lucide-react";

const USE_CASES = [
  {
    icon: Gift,
    title: "Gifts under budget",
    prompt: "Find a birthday gift for a tech-savvy person under $80, delivered by Friday.",
  },
  {
    icon: Cpu,
    title: "Tech accessories",
    prompt: "Best wireless mouse under $100 from a trusted merchant, 2-day delivery.",
  },
  {
    icon: Home,
    title: "Household replacements",
    prompt: "Replace my broken blender — under $60, 4+ stars, ships from Amazon.",
  },
  {
    icon: RefreshCw,
    title: "Repeated purchases",
    prompt: "Reorder my usual coffee pods — same brand, best current price.",
  },
  {
    icon: Clock,
    title: "Urgent buying",
    prompt: "I need a phone charger today — under $25, same-day or next-day delivery only.",
  },
];

export function UseCases() {
  return (
    <section className="bg-gray-50 py-20 md:py-28" aria-labelledby="usecases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">Use Cases</span>
          <h2 id="usecases-heading" className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            What people use it for
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From urgent purchases to thoughtful gifts — YunoClaw handles the research so you don't have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map(({ icon: Icon, title, prompt }) => (
            <article key={title} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-700/10 text-teal-700">
                <Icon size={18} />
              </div>
              <h3 className="font-display text-base font-semibold text-gray-900 mb-3">{title}</h3>
              <div className="rounded-lg bg-gray-50 border border-gray-200 px-4 py-3">
                <p className="text-xs text-gray-500 italic leading-relaxed">"{prompt}"</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
