"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden pt-32 pb-16 bg-[#0a0a0a]"
    >
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10">
            No human, no checkout.
          </h2>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90"
          >
            Start building human-aware APIs
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <span className="text-sm font-bold tracking-tight text-white">
            Glide
          </span>
          <span className="text-sm text-white/30">
            © 2026 Glide API. All rights reserved.
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
