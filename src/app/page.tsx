import type { Metadata } from "next";
import { Hero }              from "@/components/home/Hero";
import { WhatItDoes }        from "@/components/home/WhatItDoes";
import { DemoPreview }       from "@/components/home/DemoPreview";
import { Comparison }        from "@/components/home/Comparison";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { Principles }        from "@/components/home/Principles";
import { UseCases }          from "@/components/home/UseCases";
import { Memory }            from "@/components/home/Memory";
import { TrustSection }      from "@/components/home/TrustSection";
import { FinalCTA }          from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "YunoClaw — AI Shopping Assistant That Works Under Your Rules",
  description:
    "YunoClaw finds, evaluates, and ranks products under your exact constraints. Budget enforced. Approval required. Fewer tabs, better decisions.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatItDoes />
      <DemoPreview />
      <Comparison />
      <HowItWorksPreview />
      <Principles />
      <UseCases />
      <Memory />
      <TrustSection />
      <FinalCTA />
    </main>
  );
}
