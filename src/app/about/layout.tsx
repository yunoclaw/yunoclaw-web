import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description: "What YunoClaw is, why it exists, and the philosophy behind building a trustworthy agentic commerce assistant.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageJsonLd
        title="About YunoClaw"
        description="What YunoClaw is, why it exists, and the philosophy behind building a trustworthy agentic commerce assistant."
        url="https://yunoclaw.tech/about"
        breadcrumbs={[
          { name: "Home", url: "https://yunoclaw.tech" },
          { name: "About", url: "https://yunoclaw.tech/about" },
        ]}
      />
      {children}
    </>
  );
}
