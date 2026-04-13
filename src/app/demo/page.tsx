import type { Metadata } from "next";
import { DemoApp } from "@/components/demo/DemoApp";

export const metadata: Metadata = {
  title: "Try the Demo",
  description: "Interactive demo of YunoClaw — enter a shopping intent, set your rules, and see ranked product recommendations with full explanations.",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-sand-50">
      <div className="gradient-hero text-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-3 block">Interactive Demo</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Try YunoClaw
          </h1>
          <p className="text-white/70 max-w-xl">
            Enter what you need, set your constraints, and see how YunoClaw ranks and explains options. Uses mock product data.
          </p>
        </div>
      </div>
      <DemoApp />
    </main>
  );
}
