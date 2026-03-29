"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Fingerprint, Shield } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Absolute Velocity.",
    description:
      "Sub-second settlement via HTTP headers (x402). No redirects across the web. No browser tabs. Just pure, machine-to-machine commerce.",
    gradient: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-400",
    span: "lg:col-span-2",
  },
  {
    icon: Fingerprint,
    title: "Identity Fluidity.",
    description:
      "Seamlessly separate bots from humans via World ID. Charge a premium for algorithmic access, or let verified humans glide through at a 99% discount.",
    gradient: "from-violet-500/10 to-transparent",
    iconColor: "text-violet-400",
    span: "lg:col-span-1",
  },
  {
    icon: Shield,
    title: "Immutable Trust.",
    description:
      "Total visibility without the friction. Every transaction generates a real-time XMTP cryptographic receipt, giving humans a one-click kill-switch over their agents.",
    gradient: "from-emerald-500/10 to-transparent",
    iconColor: "text-emerald-400",
    span: "lg:col-span-3",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
} as const;

export default function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32" id="features">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            The Glide Pillars
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white">
            Infrastructure that moves
            <br />
            at machine speed.
          </h2>
        </div>

        {/* Bento grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className={`relative group bg-[#0a0a0a] p-8 sm:p-10 ${card.span} overflow-hidden`}
            >
              {/* Card glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                <div
                  className={`mb-6 inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 ${card.iconColor}`}
                >
                  <card.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-white/40 max-w-lg">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
