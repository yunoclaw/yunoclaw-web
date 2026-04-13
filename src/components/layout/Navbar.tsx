"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/demo",         label: "Try Demo" },
  { href: "/merchants",    label: "For Merchants" },
  { href: "/about",        label: "About" },
];

function ClawLogo({ size = 26 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <path d="M16 22 C16 22 7 20 6 13 C5 7 9 4 12 5 C14 5.5 14.5 7 13.5 9 C12.5 11 12 13 13 15 C14 17 16 18 16 22 Z" fill="#0f766e"/>
      <path d="M16 22 C16 22 25 20 26 13 C27 7 23 4 20 5 C18 5.5 17.5 7 18.5 9 C19.5 11 20 13 19 15 C18 17 16 18 16 22 Z" fill="#0f766e"/>
      <path d="M11 24 C11 21.8 13.2 20 16 20 C18.8 20 21 21.8 21 24 C21 26.2 18.8 28 16 28 C13.2 28 11 26.2 11 24 Z" fill="#0f766e"/>
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full bg-white transition-shadow duration-200",
      scrolled ? "shadow-sm border-b border-gray-200" : "border-b border-gray-100"
    )}>
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display font-bold text-lg text-gray-900 hover:text-teal-700 transition-colors"
        >
          <ClawLogo />
          <span>YunoClaw</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3.5 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-600 hover:text-teal-700 hover:bg-teal-50"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/demo">Try Demo</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/waitlist">Get Early Access</Link>
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-teal-700 bg-teal-50"
                  : "text-gray-700 hover:text-teal-700 hover:bg-teal-50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Button variant="outline" size="md" className="w-full" asChild>
              <Link href="/demo">Try Demo</Link>
            </Button>
            <Button variant="primary" size="md" className="w-full" asChild>
              <Link href="/waitlist">Get Early Access</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
