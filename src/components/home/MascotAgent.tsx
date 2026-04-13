"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Mascot SVG — logo shape = rabbit face, properly connected ── */
function MascotSVG({ size = 260 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 230"
      width={size}
      height={size * (230 / 200)}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="earG" cx="55%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#2dd4bf"/>
          <stop offset="100%" stopColor="#0d9488"/>
        </radialGradient>
        <radialGradient id="headG" cx="60%" cy="38%" r="68%">
          <stop offset="0%"   stopColor="#14b8a6"/>
          <stop offset="100%" stopColor="#0f766e"/>
        </radialGradient>
        {/* Left-side depth like the reference image */}
        <radialGradient id="depthG" cx="12%" cy="58%" r="48%">
          <stop offset="0%"   stopColor="#064e47" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#064e47" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* ── LEFT EAR — logo left arm path, tall and thick ── */}
      <path
        d="M 88 148
           C 84 128  68 110  52  90
           C 36  70  22  50  24  30
           C 26  12  40   4  54   8
           C 68  12  72  28  74  48
           C 76  66  80  84  90 106
           C 96 120  92 136  88 148 Z"
        fill="url(#earG)"
      />
      {/* Left ear depth shadow */}
      <path
        d="M 88 148
           C 84 128  68 110  52  90
           C 36  70  22  50  24  30
           C 26  12  40   4  54   8
           C 68  12  72  28  74  48
           C 76  66  80  84  90 106
           C 96 120  92 136  88 148 Z"
        fill="url(#depthG)"
      />
      {/* Left inner ear — pink, inset */}
      <path
        d="M 88 144
           C 85 126  72 110  58  92
           C 44  74  34  56  36  38
           C 38  22  48  16  56  18
           C 64  20  68  34  70  52
           C 72  68  76  84  86 106
           C 91 118  89 132  88 144 Z"
        fill="#f9a8b8"
        opacity="0.9"
      />

      {/* ── RIGHT EAR — mirror ── */}
      <path
        d="M 112 148
           C 116 128 132 110 148  90
           C 164  70 178  50 176  30
           C 174  12 160   4 146   8
           C 132  12 128  28 126  48
           C 124  66 120  84 110 106
           C 104 120 108 136 112 148 Z"
        fill="url(#earG)"
      />
      {/* Right inner ear — pink */}
      <path
        d="M 112 144
           C 115 126 128 110 142  92
           C 156  74 166  56 164  38
           C 162  22 152  16 144  18
           C 136  20 132  34 130  52
           C 128  68 124  84 114 106
           C 109 118 111 132 112 144 Z"
        fill="#f9a8b8"
        opacity="0.9"
      />

      {/* ── HEAD — big circle, overlaps ear bases so they look connected ── */}
      <circle cx="100" cy="168" r="62" fill="url(#headG)"/>
      {/* Depth shadow on head */}
      <circle cx="100" cy="168" r="62" fill="url(#depthG)"/>

      {/* ── FACE FEATURES ── */}

      {/* Eyes — round, expressive, happy */}
      <circle cx="82"  cy="158" r="12"  fill="#0a1f1c"/>
      <circle cx="118" cy="158" r="12"  fill="#0a1f1c"/>
      <circle cx="82"  cy="158" r="7.5" fill="#050f0e"/>
      <circle cx="118" cy="158" r="7.5" fill="#050f0e"/>
      {/* Big shine — makes eyes look alive */}
      <circle cx="87"  cy="151" r="4.5" fill="white"/>
      <circle cx="123" cy="151" r="4.5" fill="white"/>
      <circle cx="80"  cy="163" r="2"   fill="white" opacity="0.4"/>
      <circle cx="116" cy="163" r="2"   fill="white" opacity="0.4"/>

      {/* Cheeks — pink blush */}
      <ellipse cx="64"  cy="172" rx="13" ry="9" fill="#fda4af" opacity="0.55"/>
      <ellipse cx="136" cy="172" rx="13" ry="9" fill="#fda4af" opacity="0.55"/>

      {/* Muzzle patch — white oval */}
      <ellipse cx="100" cy="192" rx="28" ry="20" fill="#e8faf8"/>

      {/* Nose */}
      <ellipse cx="100" cy="184" rx="7" ry="5" fill="#f9a8b8"/>

      {/* Happy smile — wide upward arc */}
      <path
        d="M 87 191 Q 100 204 113 191"
        stroke="#0a1f1c" strokeWidth="3" fill="none" strokeLinecap="round"
      />

      {/* ── AMBER COIN ── */}
      <circle cx="168" cy="56" r="20" fill="#fbbf24"/>
      <circle cx="168" cy="56" r="15" fill="#f59e0b"/>
      <circle cx="168" cy="56" r="11" fill="#fbbf24"/>
      <text x="168" y="61" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="13" fill="#92400e">$</text>
    </svg>
  );
}

/* ─── Click quips ──────────────────────────────────────────────────────── */
const QUIPS = [
  { emoji: "🦀", text: "I found 47 products. Eliminated 44. You're welcome." },
  { emoji: "💸", text: "Your budget said $150. I said 'challenge accepted'." },
  { emoji: "🔍", text: "I checked 12 merchants so you don't have to open 12 tabs." },
  { emoji: "⚡", text: "Ranked by trust, speed & price. In 0.9 seconds. Claw speed." },
  { emoji: "🛡️", text: "Nothing gets purchased without your nod. I'm an assistant, not a bot." },
  { emoji: "🎯", text: "Budget enforced. Delivery checked. Merchant trusted. Done." },
  { emoji: "🦀", text: "I'm a crab who shops smarter than most humans. Don't @ me." },
];

/* ─── Filter chips ─────────────────────────────────────────────────────── */
const CHIPS = [
  { label: "Budget ≤ $150" },
  { label: "Delivery ≤ 3d" },
  { label: "Trust ≥ 8"     },
];

/* ─── Mock products ────────────────────────────────────────────────────── */
const PRODUCTS = [
  { name: "Sony WH-1000XM5",       price: "$279", pass: false },
  { name: "Jabra Evolve2 55",       price: "$149", pass: true  },
  { name: "Apple AirPods Pro",      price: "$189", pass: true  },
  { name: "Anker Soundcore Liberty",price: "$99",  pass: true  },
  { name: "Bose QC45",              price: "$229", pass: false },
];

type Phase = 0 | 1 | 2 | 3 | 4;
const DELAYS: Record<number, number> = { 0: 1000, 1: 800, 2: 1200, 3: 1400 };

export function MascotAgent() {
  const [phase, setPhase]     = useState<Phase>(0);
  const [quip, setQuip]       = useState<typeof QUIPS[0] | null>(null);
  const [bounce, setBounce]   = useState(false);
  const [quipIdx, setQuipIdx] = useState(0);

  /* auto-advance phases */
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    function advance(p: Phase) {
      t = setTimeout(() => {
        const next = (p + 1) as Phase;
        setPhase(next);
        if (next < 4) advance(next);
      }, DELAYS[p]);
    }
    advance(0);
    return () => clearTimeout(t);
  }, []);

  /* click handler */
  const handleClick = useCallback(() => {
    const next = quipIdx % QUIPS.length;
    setQuip(QUIPS[next]);
    setQuipIdx((i) => i + 1);
    setBounce(true);
    setTimeout(() => setBounce(false), 600);
    setTimeout(() => setQuip(null), 3200);
  }, [quipIdx]);

  const showChips    = phase >= 1;
  const showProducts = phase >= 2;
  const filterDone   = phase >= 3;

  return (
    <div className="flex flex-col items-center gap-3 select-none relative" aria-hidden="true">

      {/* Speech bubble */}
      <AnimatePresence>
        {quip && (
          <motion.div
            key={quip.text}
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[230px] z-10"
          >
            <div className="relative rounded-xl border border-amber-400/50 bg-dark-900 px-4 py-3 shadow-xl">
              <p className="text-[12px] text-white/90 leading-snug text-center font-medium">
                {quip.emoji} {quip.text}
              </p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b border-amber-400/50 bg-dark-900" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot — clickable */}
      <motion.button
        onClick={handleClick}
        animate={bounce
          ? { rotate: [0, -8, 8, -5, 5, 0], scale: [1, 1.12, 0.96, 1.06, 1] }
          : { y: [0, -7, 0] }
        }
        transition={bounce
          ? { duration: 0.55, ease: "easeInOut" }
          : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
        }
        className="drop-shadow-xl cursor-pointer focus:outline-none"
        title="Click me!"
        aria-label="YunoClaw mascot"
      >
        <MascotSVG size={260} />
      </motion.button>

      {/* Hint text */}
      <AnimatePresence>
        {!quip && phase >= 4 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] text-white/30 tracking-wide"
          >
            tap me
          </motion.p>
        )}
      </AnimatePresence>

      {/* Decision panel — dark card, clearly visible on teal hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-[248px] rounded-xl border border-white/20 bg-dark-900/90 backdrop-blur-md p-4 shadow-2xl"
      >
        {/* Chips */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {CHIPS.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={showChips ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.1, duration: 0.22 }}
              className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/15 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300"
            >
              {chip.label}
            </motion.span>
          ))}
        </div>

        {/* Products */}
        <div className="space-y-1.5">
          {PRODUCTS.map((p, i) => {
            const rejected = filterDone && !p.pass;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -8 }}
                animate={
                  !showProducts ? { opacity: 0, x: -8 }
                  : rejected    ? { opacity: 0.18, x: 0 }
                  :               { opacity: 1, x: 0 }
                }
                transition={{ delay: showProducts ? i * 0.09 : 0, duration: rejected ? 0.45 : 0.28 }}
                className="flex items-center justify-between rounded-md px-2.5 py-1.5"
                style={{
                  background: !rejected && p.pass && filterDone
                    ? "rgba(15,118,110,0.25)"
                    : "transparent",
                }}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <motion.span
                    animate={filterDone
                      ? p.pass ? { backgroundColor: "#34d399" } : { backgroundColor: "#374151" }
                      : { backgroundColor: "#6b7280" }
                    }
                    transition={{ duration: 0.35 }}
                    className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                  />
                  <span className="text-[11px] truncate" style={{ color: rejected ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.88)" }}>
                    {p.name}
                  </span>
                </div>
                <span className="text-[11px] font-semibold ml-2 flex-shrink-0" style={{ color: rejected ? "rgba(255,255,255,0.2)" : "#fbbf24" }}>
                  {p.price}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Footer caption */}
        <AnimatePresence>
          {filterDone && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-3 text-center text-[10px] text-emerald-400 font-medium tracking-wide"
            >
              ✓ Matches your budget and ships faster
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
