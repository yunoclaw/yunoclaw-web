import Link from "next/link";
import { Shield, Zap, Lock } from "lucide-react";

function ClawLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={22} height={22} aria-hidden="true">
      <path d="M16 22 C16 22 7 20 6 13 C5 7 9 4 12 5 C14 5.5 14.5 7 13.5 9 C12.5 11 12 13 13 15 C14 17 16 18 16 22 Z" fill="#0f766e"/>
      <path d="M16 22 C16 22 25 20 26 13 C27 7 23 4 20 5 C18 5.5 17.5 7 18.5 9 C19.5 11 20 13 19 15 C18 17 16 18 16 22 Z" fill="#0f766e"/>
      <path d="M11 24 C11 21.8 13.2 20 16 20 C18.8 20 21 21.8 21 24 C21 26.2 18.8 28 16 28 C13.2 28 11 26.2 11 24 Z" fill="#0f766e"/>
    </svg>
  );
}

const PRODUCT_LINKS = [
  { href: "/demo",         label: "Try Demo" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/waitlist",     label: "Early Access" },
];

const COMPANY_LINKS = [
  { href: "/about",     label: "About" },
  { href: "/merchants", label: "For Merchants" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms",   label: "Terms" },
];

const TRUST_ITEMS = [
  { icon: Shield, text: "Approval before purchase" },
  { icon: Lock,   text: "Budget rules enforced" },
  { icon: Zap,    text: "Transparent reasoning" },
];

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white" aria-label="Site footer">
      {/* Trust bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-center gap-6 md:gap-12">
          {TRUST_ITEMS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-white/60">
              <Icon size={14} className="text-teal-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <ClawLogo />
              <span>YunoClaw</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              AI-powered shopping assistant. Fewer tabs, better decisions, your rules.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Product</h3>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2026 YunoClaw. All rights reserved.</p>
          <p className="text-xs text-white/30 italic">Shop less. Get more.</p>
        </div>
      </div>
    </footer>
  );
}
