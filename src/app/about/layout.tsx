import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "What YunoClaw is, why it exists, and the philosophy behind building a trustworthy agentic commerce assistant.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
