"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background gradients - world.org inspired (soft blue/purple on dark) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-blue-900/[0.05] via-transparent to-indigo-900/[0.05] rounded-full blur-3xl opacity-50 absolute" />
        <div className="w-[600px] h-[600px] bg-sky-600/[0.03] rounded-full blur-[100px] absolute translate-x-1/4 -translate-y-1/4" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
          Accept payments from AI agents—but only if they’re backed by{" "}
          <span className="text-white/60">real humans.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight">
          Middleware that verifies World ID and monetizes API access based on
          human-backed demand.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90"
          >
            Add Glide to your API
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          
          <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
            <Globe className="h-4 w-4 text-white/30" />
            Powered by World ID on WorldChain
          </div>
        </div>
      </motion.div>
    </section>
  );
}
