"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    title: "APIs",
    description: "Protect public endpoints from aggressive scraping, ensuring stable availability.",
  },
  {
    title: "AI Tools",
    description: "Gate access to costly inference models behind cryptographic proof of humanity.",
  },
  {
    title: "SaaS Platforms",
    description: "Prevent creation of automated accounts and abuse of free tier compute resources.",
  },
  {
    title: "Data Providers",
    description: "Charge non-human agents automatically via native x402 settlement rails.",
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative py-48 bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-32 max-w-4xl">
           <h2 className="text-[2.5rem] sm:text-[4rem] font-medium tracking-tight text-black dark:text-white leading-[1.05] transition-colors">
             Designed for modern <br className="hidden sm:block"/> human infrastructure.
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 border-t border-black/20 dark:border-white/20 pt-16 transition-colors">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-3xl font-medium tracking-tight text-black dark:text-white mb-6 transition-colors">
                {useCase.title}
              </h3>
              <p className="text-xl text-black/60 dark:text-white/50 leading-relaxed font-light transition-colors">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
