import type { Metadata } from "next";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export const metadata: Metadata = {
  title: "Get Early Access",
  description: "Join the YunoClaw waitlist. Be among the first to try the AI shopping assistant that works under your rules.",
};

export default function WaitlistPage() {
  return (
    <main>
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4 block">Early Access</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Get early access to YunoClaw
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              We're onboarding a small group of early users. Drop your details and we'll reach out when your spot is ready.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16 md:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
