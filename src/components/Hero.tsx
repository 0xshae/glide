"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
} as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-indigo-500/[0.04] blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/[0.03] blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center pt-32 pb-20"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Production-Ready Agentic Commerce
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.05] tracking-[-0.035em] text-white max-w-4xl mx-auto"
        >
          The only checkout infrastructure built for the{" "}
          <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
            Agentic Web.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg sm:text-xl leading-relaxed text-white/40 max-w-2xl mx-auto"
        >
          The internet was built for human clicks. Glide is built for machine
          velocity. We are the only drop-in payment gateway that lets merchants
          monetize AI traffic natively in under 500 milliseconds. No UI. No
          friction. Just revenue.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
          >
            Start Gliding
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white hover:border-white/20 hover:bg-white/[0.06]"
          >
            <BookOpen className="h-4 w-4" />
            Read the Docs
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-px rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
        >
          {[
            { value: "<500ms", label: "settlement latency" },
            { value: "2 lines", label: "of code to integrate" },
            { value: "99%", label: "human discount rate" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-6 px-4"
            >
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-white/30 font-mono uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
