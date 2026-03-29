"use client";

import { motion } from "framer-motion";

export default function SolutionSection() {
  return (
    <section className="relative py-48 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-40"
        >
          <h2 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-medium tracking-tight text-white leading-[1.05]">
            Make your API human-aware.
          </h2>
        </motion.div>

        {/* Abstract Minimalist Typographic Diagram */}
        <div className="max-w-5xl mx-auto border-l border-white/20 pl-8 md:pl-16 relative">
          
          <div className="absolute top-0 left-0 w-px h-1/3 bg-white" />

          <div className="flex flex-col gap-32">
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
            >
              <div className="text-white/40 text-sm tracking-widest uppercase mb-4 font-mono">Step 01</div>
              <div className="text-4xl sm:text-5xl font-medium tracking-tight text-white">Incoming Request</div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
            >
               <div className="text-white/40 text-sm tracking-widest uppercase mb-4 font-mono">Step 02 / Glide Middleware</div>
               <div className="text-4xl sm:text-5xl font-medium tracking-tight text-white">Cryptographic Verification</div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.4 }}
                 className="pt-8 border-t border-white/20"
              >
                  <div className="text-white text-3xl font-medium tracking-tight mb-4">World ID Verified</div>
                  <div className="text-white/50 text-xl font-light">Allowed free access to the API.</div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="pt-8 border-t border-white/10"
              >
                  <div className="text-white/40 text-3xl font-medium tracking-tight mb-4">No World ID</div>
                  <div className="text-white/30 text-xl font-light">Blocked or challenged for payment.</div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
