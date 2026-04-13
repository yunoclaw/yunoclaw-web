import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MascotAgent } from "@/components/home/MascotAgent";

const TRUST_SIGNALS = [
  { icon: ShieldCheck, text: "Approval before purchase" },
  { icon: Zap,         text: "Results in seconds" },
  { icon: Star,        text: "Ranked by your rules" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero text-white" aria-labelledby="hero-headline">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_60%_-10%,rgba(255,255,255,0.06),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Mascot — desktop right side, pointer-events enabled for click */}
        <div
          className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 items-center justify-center"
        >
          <MascotAgent />
        </div>

        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Now in private beta
          </div>

          {/* Headline */}
          <h1
            id="hero-headline"
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-balance mb-6"
          >
            Find the right product.
            <br />
            <span className="text-amber-400">Under your rules.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl mb-10">
            YunoClaw is an AI shopping assistant that searches, evaluates, and ranks products against your exact constraints — budget, merchant, delivery, and trust. You approve before anything is purchased.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button variant="commerce" size="xl" asChild>
              <Link href="/waitlist">
                Get Early Access
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="dark" size="xl" asChild>
              <Link href="/demo">Try the Demo →</Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_SIGNALS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-sm text-white/55">
                <Icon size={14} className="text-teal-300" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
