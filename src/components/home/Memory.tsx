import { BookMarked, ThumbsDown, DollarSign, Ban } from "lucide-react";

const MEMORY_FEATURES = [
  {
    icon: BookMarked,
    title: "Remembers your preferences",
    desc: "Preferred merchants, delivery expectations, and quality thresholds are saved across sessions.",
  },
  {
    icon: ThumbsDown,
    title: "Learns from rejections",
    desc: "When you skip a recommendation, YunoClaw notes why and avoids similar options in future searches.",
  },
  {
    icon: DollarSign,
    title: "Saves your budget rules",
    desc: "Set a default budget per category. The agent applies it automatically without you repeating it.",
  },
  {
    icon: Ban,
    title: "Avoids disliked merchants",
    desc: "Block merchants or brands you don't trust. They're permanently excluded from your results.",
  },
];

export function Memory() {
  return (
    <section className="bg-dark-900 text-white py-20 md:py-28" aria-labelledby="memory-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 block">Personalization</span>
            <h2 id="memory-heading" className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Better than filters.<br />It remembers you.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Generic search filters reset every session. YunoClaw builds a persistent model of your preferences — so every search starts smarter than the last.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm text-teal-300">
              This is the product moat — decision memory, not generic search.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {MEMORY_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-teal-400/30 hover:bg-white/8 transition-all duration-200">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-400/15 text-teal-400">
                  <Icon size={17} />
                </div>
                <h3 className="font-display text-sm font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
