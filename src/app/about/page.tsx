"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const PHILOSOPHY = [
  {
    number: "01",
    title: "Trust over reckless automation",
    desc: "Autonomous buying bots that act without approval are a liability, not a feature. YunoClaw is designed to be a trusted advisor — it proposes, you decide.",
  },
  {
    number: "02",
    title: "Better decisions, not more noise",
    desc: "The problem with online shopping isn't a lack of options. It's too many options with no structured way to evaluate them. We reduce noise, not add to it.",
  },
  {
    number: "03",
    title: "Constraints are features",
    desc: "Budget limits, merchant preferences, delivery deadlines — these aren't restrictions to work around. They're the rules that make a recommendation meaningful.",
  },
  {
    number: "04",
    title: "Explainability is non-negotiable",
    desc: "If you can't see why a product was recommended, you can't trust the recommendation. Every result comes with a plain-language explanation.",
  },
];

const STATS = [
  { value: "< 1s",   label: "Research time" },
  { value: "100%",   label: "Approval-gated" },
  { value: "0",      label: "Surprise purchases" },
  { value: "Oct 26", label: "Public launch" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero text-white py-24 md:py-32 overflow-hidden relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_-10%,rgba(255,255,255,0.06),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl"
            initial="hidden" animate="show" variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4 block">
              About YunoClaw
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              We built the assistant<br/>
              <span className="text-amber-400">we wanted to use.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed max-w-xl">
              YunoClaw started from a simple frustration: buying something online takes too long, involves too many tabs, and still ends in uncertainty. We wanted a tool that could do the research — under our rules — and present a clear, trustworthy shortlist.
            </motion.p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
            initial="hidden" animate="show" variants={stagger}
          >
            {STATS.map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp} className="rounded-2xl border border-white/15 bg-white/8 px-5 py-4 backdrop-blur-sm">
                <p className="font-display text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-xs text-teal-300 font-medium uppercase tracking-wide">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-4 block">What it is</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                An agent that shops.<br/>A human that decides.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                YunoClaw is an agentic commerce assistant. It takes a shopping intent — described in plain language — and evaluates available products against a structured set of user-defined rules. It returns a ranked shortlist with transparent explanations, and redirects you to the merchant when you're ready to buy.
              </p>
              <p className="text-gray-500 leading-relaxed">
                It is not a fully autonomous buying bot. It does not initiate purchases. It does not exceed your budget. It does not act without your approval. These are not limitations — they are the design.
              </p>
            </motion.div>

            {/* Visual card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-gray-950 p-6 font-mono text-sm shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="h-3 w-3 rounded-full bg-red-500/70"/>
                <span className="h-3 w-3 rounded-full bg-amber-400/70"/>
                <span className="h-3 w-3 rounded-full bg-teal-500/70"/>
                <span className="ml-2 text-xs text-white/30">yunoclaw — agent</span>
              </div>
              <p className="text-white/40 mb-1">// User intent</p>
              <p className="text-amber-400 mb-4">"Wireless earbuds under $120, delivered by Friday, not from eBay"</p>
              <p className="text-white/40 mb-1">// Constraints parsed</p>
              <p className="text-teal-400 mb-1">budget: $120 <span className="text-white/30">// hard limit</span></p>
              <p className="text-teal-400 mb-1">delivery: Friday <span className="text-white/30">// deadline</span></p>
              <p className="text-teal-400 mb-4">blocked: ["eBay"] <span className="text-white/30">// excluded</span></p>
              <p className="text-white/40 mb-1">// Top result</p>
              <p className="text-green-400">✓ Sony WF-1000XM5 — $118 — Amazon — 2 days</p>
              <p className="text-white/30 mt-3 text-xs">Awaiting your approval before redirect...</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-gray-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 block">Why it matters</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Online shopping hasn't changed in 20 years.
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
              You open a search engine, open 10 tabs, compare manually, read reviews of uncertain quality, and make a decision under time pressure with incomplete information. AI changes this — not by removing humans from the loop, but by doing the structured evaluation work that humans are bad at and computers are good at.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {[
              { label: "Old way", items: ["10+ browser tabs", "Manual price comparison", "Uncertain review quality", "Decision fatigue", "No budget enforcement"] },
              { label: "The gap", items: ["Too much data", "No structure", "No constraints", "No explanation", "No trust layer"], dark: true },
              { label: "YunoClaw", items: ["One intent, one search", "Constraint-driven ranking", "Transparent scoring", "Approval-gated action", "You stay in control"] },
            ].map(({ label, items, dark }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className={`rounded-2xl p-6 border ${dark ? "bg-teal-700/20 border-teal-700/40" : "bg-white/5 border-white/10"}`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${dark ? "text-teal-300" : "text-white/40"}`}>{label}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className={`text-sm flex items-center gap-2 ${dark ? "text-white" : "text-white/50"}`}>
                      <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${dark ? "bg-teal-400" : "bg-white/20"}`}/>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3 block">Product philosophy</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Four principles we don't compromise on.
            </h2>
          </div>
          <motion.div
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {PHILOSOPHY.map(({ number, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group rounded-2xl border border-sand-300 bg-sand-50 p-7 hover:border-teal-700/30 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="font-display text-4xl font-bold text-teal-700/15 group-hover:text-teal-700/25 transition-colors block mb-4">{number}</span>
                <h3 className="font-display text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to shop smarter?
            </h2>
            <p className="text-white/60 mb-10 text-lg">Try the demo — no account required. Mock data, real experience.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="commerce" size="xl" asChild>
                <Link href="/demo">Try the Demo <ArrowRight size={16} /></Link>
              </Button>
              <Button variant="dark" size="xl" asChild>
                <Link href="/waitlist">Join the Waitlist</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
