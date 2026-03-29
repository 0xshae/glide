"use client";

import { motion } from "framer-motion";
import { Globe, ArrowRight, ShieldCheck, UserX } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Make your API human-aware
          </h2>
        </motion.div>

        {/* Minimalist Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            
            {/* 1. Request */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-48 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center px-6">
                <span className="font-mono text-sm text-white/50">Incoming Request</span>
              </div>
            </div>

            <ArrowRight className="hidden md:block h-5 w-5 text-white/20" />
            <div className="md:hidden h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />

            {/* 2. Glide Middleware */}
            <div className="flex flex-col items-center relative z-10">
              <div className="absolute -inset-4 bg-white/[0.03] blur-xl rounded-full" />
              <div className="relative h-20 w-48 rounded-2xl border border-white/20 bg-[#0c0c0c] flex items-center justify-center px-6 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                <span className="text-lg font-bold text-white tracking-tight">Glide</span>
              </div>
            </div>

            <ArrowRight className="hidden md:block h-5 w-5 text-white/20" />
            <div className="md:hidden h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />

            {/* 3. Branching Logic */}
            <div className="flex flex-col gap-6 w-full md:w-auto">
              {/* Branch A: Human */}
              <div className="h-16 w-full md:w-64 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center px-4 relative overflow-hidden group">
                <div className="absolute inset-y-0 left-0 w-1 bg-white" />
                <Globe className="h-5 w-5 text-white mr-3 ml-2" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">World ID Verified</span>
                  <span className="text-xs text-white/40">Allowed to API</span>
                </div>
              </div>

              {/* Branch B: Bot */}
              <div className="h-16 w-full md:w-64 rounded-2xl border border-white/[0.04] bg-transparent flex items-center px-4 relative">
                <div className="absolute inset-y-0 left-0 w-px bg-white/20" />
                <UserX className="h-5 w-5 text-white/30 mr-3 ml-2" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white/50">No World ID</span>
                  <span className="text-xs text-white/30">Blocked or Paid</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
