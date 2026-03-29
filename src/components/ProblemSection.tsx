"use client";

import { motion } from "framer-motion";
import { Bot, User, AlertCircle } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            The internet can’t tell fake traffic from real demand
          </h2>
        </motion.div>

        {/* Abstract visual of APIs getting flooded */}
        <div className="relative mx-auto max-w-4xl h-[400px] flex items-center justify-center border border-white/[0.04] rounded-3xl bg-white/[0.01]">
          {/* Bots flooding */}
          <div className="absolute left-8 sm:left-16 flex flex-col gap-8 opacity-40">
            <Bot className="h-8 w-8 text-red-400/50" />
            <Bot className="h-8 w-8 text-red-400/50 translate-x-4" />
            <Bot className="h-8 w-8 text-red-400/50 -translate-x-2" />
          </div>

          {/* Real user */}
          <div className="absolute left-8 sm:left-16 top-1/2 -translate-y-1/2">
            <User className="h-10 w-10 text-white" />
          </div>

          {/* Connecting lines */}
          <div className="absolute w-1/2 h-px bg-gradient-to-r from-red-500/20 via-white/10 to-transparent left-1/4 top-1/3" />
          <div className="absolute w-1/2 h-px bg-white/20 left-1/4 top-1/2" />
          <div className="absolute w-1/2 h-px bg-gradient-to-r from-red-500/20 via-white/10 to-transparent left-1/4 top-2/3" />

          {/* Central API visual */}
          <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-2xl">
            <div className="h-12 w-12 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center mb-4">
              <AlertCircle className="h-5 w-5 text-red-400" />
            </div>
            <div className="text-sm font-mono text-white/70">api.company.com</div>
            <div className="mt-2 text-xs font-mono text-red-400/60 uppercase tracking-widest">
              Rate Limit Exceeded
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
