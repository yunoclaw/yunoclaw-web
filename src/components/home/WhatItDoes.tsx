"use client";

import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ShieldCheck,
  Brain,
  Zap,
  Store,
} from "lucide-react";

const FEATURES = [
  {
    icon: Search,
    title: "Searches Across Sources",
    desc: "Queries multiple merchants and product catalogues simultaneously. No more opening 12 tabs — one intent, one search.",
  },
  {
    icon: SlidersHorizontal,
    title: "Enforces Your Rules",
    desc: "Budget ceiling, delivery deadline, preferred merchants, blocked brands. Hard constraints, not soft preferences.",
  },
  {
    icon: Brain,
    title: "Ranks & Explains",
    desc: "Scores every candidate by rating, trust, delivery speed, and price fit. Shows you exactly why each result was chosen.",
  },
  {
    icon: ShieldCheck,
    title: "Approval Before Purchase",
    desc: "Nothing is bought without your explicit go-ahead. The agent proposes. You decide. Always.",
  },
  {
    icon: Zap,
    title: "Results in Seconds",
    desc: "What takes an hour of manual research takes YunoClaw under a second. Structured evaluation at machine speed.",
  },
  {
    icon: Store,
    title: "Redirects to Merchants",
    desc: "When you approve, you're sent straight to the product page. Checkout stays on the merchant's site — we never touch payment.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function WhatItDoes() {
  return (
    <section
      className="relative overflow-hidden bg-dark-950 py-20 md:py-28"
      aria-labelledby="what-it-does-heading"
    >
      {/* Subtle star-field dots */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[
          [8,12],[18,72],[32,38],[55,8],[70,55],[85,22],[92,80],
          [12,90],[40,65],[60,30],[78,88],[25,48],[48,18],[65,70],
        ].map(([x, y], i) => (
          <span
            key={i}
            className="absolute h-px w-px rounded-full bg-white/20"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-center gap-3">
          <span className="text-amber-500" aria-hidden="true">
            <svg viewBox="0 0 12 20" width="10" height="18" fill="currentColor">
              <path d="M0 0 L6 10 L0 20 L4 20 L10 10 L4 0 Z" />
            </svg>
          </span>
          <h2
            id="what-it-does-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            What It Does
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={card}
              className="group relative rounded-2xl border border-white/8 bg-white/4 p-6 transition-colors duration-200 hover:border-teal-700/40 hover:bg-white/6"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal-700/30 bg-teal-700/15 text-teal-400 transition-colors duration-200 group-hover:border-teal-500/50 group-hover:bg-teal-700/25 group-hover:text-teal-300">
                <Icon size={20} strokeWidth={1.75} />
              </div>

              <h3 className="font-display text-base font-bold text-white mb-2 tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {desc}
              </p>

              {/* Subtle corner glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_60%_40%_at_10%_0%,rgba(15,118,110,0.08),transparent)]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
