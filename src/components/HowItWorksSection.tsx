"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Add Glide middleware",
    description: "Install the package and add one line of code to your existing API routes. Designed for Next.js, Express, and standard Node environments.",
  },
  {
    number: "02",
    title: "Verify with World ID",
    description: "Glide silently intercepts requests and demands cryptographic proof of humanity. It integrates directly with the World Chain settlement layer.",
  },
  {
    number: "03",
    title: "Monetize or allow access",
    description: "Verified humans pass free. Bots and agents hit a paywall and pay per request seamlessly through their agentic wallets.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-48 bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col gap-0 border-t border-black/20 dark:border-white/20 transition-colors">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-16 md:py-24 border-b border-black/10 dark:border-white/10 flex flex-col md:flex-row md:items-start gap-8 md:gap-32 transition-colors"
            >
              <div className="text-black/40 dark:text-white/40 font-mono tracking-widest text-sm shrink-0 md:w-24 pt-2 transition-colors">
                {step.number}
              </div>
              <div>
                 <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white tracking-tight mb-8 transition-colors">
                   {step.title}
                 </h3>
                 <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 leading-relaxed font-light max-w-2xl transition-colors">
                   {step.description}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
