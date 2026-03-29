"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center bg-white dark:bg-black overflow-hidden pt-32 pb-20 transition-colors duration-300">
      
      {/* Subtle top light - very diffused */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-black/[0.02] dark:bg-white/[0.02] blur-[120px] rounded-full pointer-events-none transition-colors" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        <h1 className="text-[3rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] tracking-[-0.04em] text-black dark:text-white leading-[0.95] font-medium max-w-6xl mx-auto transition-colors">
          Accept payments from AI agents.
          <br />
          <span className="text-black/40 dark:text-white/40 transition-colors">Only if they’re human.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-lg sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight transition-colors"
        >
          Middleware that verifies World ID and monetizes API access based on cryptographic proof of demand.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex flex-col items-center justify-center gap-8"
        >
          {/* Primary CTA: Copy-to-Clipboard Installation Command */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div 
              onClick={() => {
                navigator.clipboard.writeText("npm install @0xshae/glide-gateway");
                alert("Copied to clipboard!");
              }}
              className="group relative cursor-pointer font-mono text-lg sm:text-2xl px-10 py-6 bg-black text-white dark:bg-white dark:text-black rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-black/10 dark:shadow-white/10"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-md text-xs font-sans pointer-events-none transition-all transform translate-y-2 group-hover:translate-y-0">
                Click to copy
              </span>
              <span className="flex items-center gap-4">
                <span className="opacity-40 select-none">$</span>
                npm install @0xshae/glide-gateway
              </span>
            </div>
            
            <a href="/docs" className="text-sm font-medium text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 group">
              View full documentation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="mt-8 text-black/30 dark:text-white/30 text-xs sm:text-sm tracking-widest uppercase font-medium transition-colors">
            Powered by World ID on World Chain & Base
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
