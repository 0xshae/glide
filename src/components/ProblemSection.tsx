"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="relative py-48 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-medium tracking-tight text-white leading-[1.05]">
            The internet can’t tell fake traffic from real demand.
          </h2>
        </motion.div>

        {/* Stark typographic visual instead of a complex UI box */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.5, delay: 0.3 }}
           className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-white/10 pt-16"
        >
          <div>
            <div className="text-white/30 text-xs font-mono tracking-widest uppercase mb-8">The Status Quo</div>
            <p className="text-2xl sm:text-3xl text-white/50 leading-relaxed font-light tracking-tight">
              APIs are flooded by automated agents. Rate limits block legitimate users while sophisticated bots drain resources.
            </p>
          </div>
          <div>
             <div className="text-white/30 text-xs font-mono tracking-widest uppercase mb-8">The Result</div>
            <p className="text-2xl sm:text-3xl text-white/50 leading-relaxed font-light tracking-tight">
              You pay for inference, compute, and bandwidth for traffic that will never convert.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
