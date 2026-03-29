"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative border-t border-white/[0.06] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white">
            Ready to monetize
            <br />
            <span className="text-white/30">the agentic web?</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
            >
              Get API Keys →
            </motion.a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <span className="text-sm font-bold tracking-tight text-white/60">
            Glide
          </span>
          <span className="font-mono text-[11px] text-white/20">
            © 2025 Glide. Built for machines.
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
