"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-10-13T00:00:00Z");

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"/>
        <span className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-teal-300">{label}</span>
    </div>
  );
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-6">
        Launching in
      </p>
      <div className="flex items-start justify-center gap-3 sm:gap-5">
        <Unit value={time.days}    label="Days"    />
        <span className="text-3xl font-bold text-white/40 mt-5">:</span>
        <Unit value={time.hours}   label="Hours"   />
        <span className="text-3xl font-bold text-white/40 mt-5">:</span>
        <Unit value={time.minutes} label="Minutes" />
        <span className="text-3xl font-bold text-white/40 mt-5">:</span>
        <Unit value={time.seconds} label="Seconds" />
      </div>
      <p className="text-white/50 text-sm mt-6">October 2026 — Public launch</p>
    </div>
  );
}
