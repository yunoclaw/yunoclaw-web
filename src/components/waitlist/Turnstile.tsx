"use client";

import { useEffect, useRef } from "react";

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export function Turnstile({ onVerify, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered     = useRef(false);

  useEffect(() => {
    if (rendered.current) return;
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      console.warn("Turnstile: NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set");
      return;
    }

    const scriptId = "cf-turnstile-script";

    function render() {
      if (!containerRef.current) return;
      // @ts-expect-error turnstile is injected globally
      if (typeof window.turnstile === "undefined") return;
      rendered.current = true;
      // @ts-expect-error turnstile is injected globally
      window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        "expired-callback": onExpire ?? (() => {}),
        theme: "light",
        size: "normal",
      });
    }

    if (!document.getElementById(scriptId)) {
      const script    = document.createElement("script");
      script.id       = scriptId;
      script.src      = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async    = true;
      script.onload   = render;
      document.head.appendChild(script);
    } else {
      // Script already present, poll for turnstile object
      const t = setInterval(() => {
        // @ts-expect-error turnstile is injected globally
        if (window.turnstile) { clearInterval(t); render(); }
      }, 50);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} className="mt-1" />;
}
