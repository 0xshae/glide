"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Cloud, Database } from "lucide-react";

const useCases = [
  {
    icon: Server,
    title: "APIs",
    description: "Protect public endpoints from scraping and spam.",
  },
  {
    icon: Cpu,
    title: "AI Tools",
    description: "Ensure only humans access costly inference models.",
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "Prevent automated abuse of free tier resources.",
  },
  {
    icon: Database,
    title: "Data Providers",
    description: "Charge agents for data scraping automatically.",
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Designed for modern infrastructure</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl border border-white/[0.04] bg-white/[0.01] flex flex-col items-start"
            >
              <useCase.icon className="h-6 w-6 text-white/60 mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{useCase.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
