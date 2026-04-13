"use client";

import { motion } from "framer-motion";
import { Star, Truck, ShieldCheck, CheckCircle, XCircle, AlertCircle } from "lucide-react";

/* ─── Traditional side ─────────────────────────────────────────────────── */
const TRAD_STEPS = [
  { label: 'Search "gift under $80"',       note: "2,400 results. Sponsored first." },
  { label: "Open tab 1 — Amazon",           note: "Sorted by relevance. Unclear." },
  { label: "Open tab 2 — Best Buy",         note: "Different prices. Different stock." },
  { label: "Open tab 3 — Google Shopping",  note: "Ads mixed with results." },
  { label: "Read 40 reviews manually",      note: "Some fake. Hard to tell." },
  { label: "Still not sure. Close tabs.",   note: "Decision fatigue. No purchase." },
];

/* ─── YunoClaw result cards ────────────────────────────────────────────── */
const YC_RESULTS = [
  {
    rank: 1,
    name: "Anker Soundcore Liberty 4",
    price: "$79",
    merchant: "Amazon",
    delivery: "2 days",
    rating: 4.6,
    trust: 9.1,
    reason: "Within budget. Fast delivery. Highly rated gift pick.",
    top: true,
  },
  {
    rank: 2,
    name: "JBL Clip 4 Speaker",
    price: "$69",
    merchant: "Best Buy",
    delivery: "1 day",
    rating: 4.4,
    trust: 8.8,
    reason: "Cheapest option. Arrives tomorrow. Strong trust score.",
    top: false,
  },
  {
    rank: 3,
    name: "Tile Mate Tracker (4-pack)",
    price: "$74",
    merchant: "Apple Store",
    delivery: "2 days",
    rating: 4.3,
    trust: 9.5,
    reason: "Practical gift. Highest merchant trust. Under budget.",
    top: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

export function Comparison() {
  return (
    <section
      className="bg-slate-50 py-20 md:py-28"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">
            Why It's Different
          </span>
          <h2
            id="comparison-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4"
          >
            Feel the difference in workflow
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Same intent. Same budget. Completely different experience.
          </p>
        </div>

        {/* Intent pill — shared */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Intent</span>
            <span className="h-3.5 w-px bg-slate-200" />
            <span className="font-display text-sm font-semibold text-slate-900">
              "Gift under $80 with fast delivery"
            </span>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-5 items-start">

          {/* ── LEFT: Traditional ─────────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="rounded-2xl border border-sand-300 bg-white overflow-hidden"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Traditional</p>
                <h3 className="font-display text-base font-bold text-slate-700">Manual Shopping</h3>
              </div>
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-300" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-green-300" />
              </div>
            </div>

            {/* Steps */}
            <div className="p-6 space-y-3">
              {TRAD_STEPS.map((step, i) => (
                <motion.div
                  key={step.label}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  {/* Step number / icon */}
                  <div className="flex-shrink-0 mt-0.5">
                    {i < TRAD_STEPS.length - 1 ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                        {i + 1}
                      </span>
                    ) : (
                      <XCircle size={20} className="text-red-400" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-medium leading-snug ${i === TRAD_STEPS.length - 1 ? "text-red-500" : "text-slate-700"}`}>
                      {step.label}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{step.note}</p>
                  </div>
                </motion.div>
              ))}

              {/* Outcome */}
              <motion.div
                variants={fadeUp}
                className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 flex items-center gap-3"
              >
                <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                <p className="text-xs text-red-600 font-medium leading-snug">
                  45 minutes later. 6 tabs open. Still no decision.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: YunoClaw ───────────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="rounded-2xl border border-teal-700/25 bg-white overflow-hidden shadow-teal"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-teal-700/15 bg-teal-700">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-teal-200 mb-0.5">YunoClaw</p>
                <h3 className="font-display text-base font-bold text-white">Agent Decision</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300 animate-pulse" />
                0.9s
              </span>
            </div>

            <div className="p-6">
              {/* Applied rules */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-1.5 mb-5">
                {["Budget ≤ $80", "Delivery ≤ 3 days", "Trust ≥ 8"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-teal-700/20 bg-teal-700/8 px-2.5 py-0.5 text-[10px] font-semibold text-teal-700"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </motion.div>

              {/* Result cards */}
              <div className="space-y-3">
                {YC_RESULTS.map((r) => (
                  <motion.div
                    key={r.rank}
                    variants={fadeUp}
                    className={`relative rounded-xl border p-4 ${
                      r.top
                        ? "border-teal-700/25 bg-teal-50"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    {r.top && (
                      <span className="absolute -top-2.5 left-4 rounded-full bg-teal-700 px-2.5 py-0.5 text-[10px] font-bold text-white">
                        Top Pick
                      </span>
                    )}

                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 leading-snug">{r.name}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{r.merchant}</p>
                      </div>
                      <span className="text-lg font-bold text-slate-900 flex-shrink-0">{r.price}</span>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-3 mb-2.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Star size={10} className="fill-amber-400 text-amber-400" />
                        {r.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Truck size={10} className="text-teal-600" />
                        {r.delivery}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck size={10} className="text-teal-600" />
                        {r.trust}/10
                      </span>
                    </div>

                    {/* Reason */}
                    <p className="text-[11px] text-slate-500 leading-relaxed">{r.reason}</p>
                  </motion.div>
                ))}
              </div>

              {/* Outcome */}
              <motion.div
                variants={fadeUp}
                className="mt-5 rounded-xl border border-teal-700/20 bg-teal-700/8 px-4 py-3 flex items-center gap-3"
              >
                <CheckCircle size={16} className="text-teal-700 flex-shrink-0" />
                <p className="text-xs text-teal-800 font-medium leading-snug">
                  3 ranked options. Full explanation. Ready to approve.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Bottom label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-xs text-slate-400 mt-8"
        >
          Same intent. One experience takes 45 minutes. The other takes under a second.
        </motion.p>

      </div>
    </section>
  );
}
