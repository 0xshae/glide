"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center bg-black overflow-hidden pt-32 pb-20">
      
      {/* Subtle top light - very diffused */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        <h1 className="text-[3rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] tracking-[-0.04em] text-white leading-[0.95] font-medium max-w-6xl mx-auto">
          Accept payments from AI agents.
          <br />
          <span className="text-white/40">Only if they’re human.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-lg sm:text-2xl text-white/50 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight"
        >
          Middleware that verifies World ID and monetizes API access based on cryptographic proof of demand.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex flex-col items-center justify-center gap-8"
        >
          <a
            href="#"
            className="group flex items-center justify-between gap-6 rounded-full bg-white px-8 py-5 text-base font-medium text-black transition-transform hover:scale-[1.02] duration-300 w-full sm:w-auto min-w-[300px]"
          >
            <span>Add Glide to your API</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <div className="text-white/30 text-sm tracking-widest uppercase font-medium">
            Powered by World ID on World Chain
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
