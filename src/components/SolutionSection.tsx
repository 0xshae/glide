"use client";

import { motion } from "framer-motion";

export default function SolutionSection() {
  return (
    <section className="relative py-48 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-40"
        >
          <h2 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-medium tracking-tight text-black dark:text-white leading-[1.05] transition-colors">
            Make your API human-aware.
          </h2>
        </motion.div>

        {/* Abstract Minimalist Typographic Diagram */}
        <div className="max-w-5xl mx-auto border-l border-black/20 dark:border-white/20 pl-8 md:pl-16 relative transition-colors">
          
          <div className="absolute top-0 left-0 w-px h-1/3 bg-black dark:bg-white transition-colors" />

          <div className="flex flex-col gap-32">
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
            >
              <div className="text-black/40 dark:text-white/40 text-sm tracking-widest uppercase mb-4 font-mono transition-colors">Step 01</div>
              <div className="text-4xl sm:text-5xl font-medium tracking-tight text-black dark:text-white transition-colors">Incoming Request</div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
            >
               <div className="text-black/40 dark:text-white/40 text-sm tracking-widest uppercase mb-4 font-mono transition-colors">Step 02 / Glide Middleware</div>
               <div className="text-4xl sm:text-5xl font-medium tracking-tight text-black dark:text-white transition-colors">Cryptographic Verification</div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.4 }}
                 className="pt-8 border-t border-black/20 dark:border-white/20 transition-colors"
              >
                  <div className="text-black dark:text-white text-3xl font-medium tracking-tight mb-4 transition-colors">World ID Verified</div>
                  <div className="text-black/50 dark:text-white/50 text-xl font-light transition-colors">Allowed free access to the API.</div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="pt-8 border-t border-black/10 dark:border-white/10 transition-colors"
              >
                  <div className="text-black/40 dark:text-white/40 text-3xl font-medium tracking-tight mb-4 transition-colors">No World ID</div>
                  <div className="text-black/30 dark:text-white/30 text-xl font-light transition-colors">Blocked or challenged for payment.</div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
