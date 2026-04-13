import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="gradient-hero text-white py-20 md:py-28" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="final-cta-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
          Ready to shop smarter?
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
          Join the waitlist for early access, or try the demo now — no account required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="commerce" size="xl" asChild>
            <Link href="/waitlist">
              Get Early Access
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button variant="dark" size="xl" asChild>
            <Link href="/demo">Try the Demo</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/40">No credit card. No commitment. Cancel anytime.</p>
      </div>
    </section>
  );
}
