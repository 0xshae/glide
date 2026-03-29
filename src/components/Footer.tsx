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
      transition={{ duration: 1.5 }}
      className="relative overflow-hidden pt-48 pb-16 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center md:text-left mb-48 flex flex-col md:flex-row md:items-end justify-between gap-16">
          <h2 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-medium tracking-tight text-black dark:text-white leading-[0.95] transition-colors">
            No human. <br />
            <span className="text-black/40 dark:text-white/40 transition-colors">No checkout.</span>
          </h2>
          
          <a
            href="#"
            className="group flex items-center justify-center gap-4 rounded-full bg-black text-white dark:bg-white px-8 py-5 text-base font-medium dark:text-black transition-transform hover:scale-[1.02] duration-300 w-full sm:w-auto"
          >
            <span>Start Building</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/20 dark:border-white/20 transition-colors">
          <span className="text-lg font-medium tracking-tight text-black dark:text-white transition-colors">
            Glide
          </span>
          <span className="text-sm font-mono tracking-widest text-black/40 dark:text-white/30 uppercase transition-colors">
            © 2026 Glide API
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
