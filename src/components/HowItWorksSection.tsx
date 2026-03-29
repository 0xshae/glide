"use client";

import { motion } from "framer-motion";
import { Download, Fingerprint, Banknote } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "1. Add Glide middleware",
    description: "Install the package and add one line of code to your existing API routes.",
  },
  {
    icon: Fingerprint,
    title: "2. Verify with World ID",
    description: "Glide silently intercepts requests and demands cryptographic proof of humanity.",
  },
  {
    icon: Banknote,
    title: "3. Monetize or allow access",
    description: "Verified humans pass free. Bots and agents hit a paywall and pay per request.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6">
                <step.icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 text-base leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
