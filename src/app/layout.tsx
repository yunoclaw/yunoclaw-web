import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yunoclaw.tech"),
  title: {
    default: "YunoClaw — AI Shopping Assistant That Works Under Your Rules",
    template: "%s | YunoClaw",
  },
  description:
    "YunoClaw is an agentic commerce assistant that finds, evaluates, and recommends products under your exact rules — budget, merchant, delivery, and trust. You approve before anything is purchased.",
  keywords: [
    "AI shopping assistant",
    "agentic commerce",
    "product comparison AI",
    "AI buying assistant",
    "ecommerce decision engine",
    "constrained shopping AI",
    "smart product search",
  ],
  authors: [{ name: "YunoClaw" }],
  creator: "YunoClaw",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yunoclaw.tech",
    siteName: "YunoClaw",
    title: "YunoClaw — AI Shopping Assistant That Works Under Your Rules",
    description:
      "Find and choose the right product without the tab overload. YunoClaw evaluates options under your constraints and waits for your approval.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "YunoClaw" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YunoClaw — AI Shopping Assistant",
    description: "Fewer tabs. Better decisions. Your rules.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
