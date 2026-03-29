"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal } from "lucide-react";

const codeString = `import { glideGateway } from '@glide/core';

// Protect your existing API from unpaid bots
app.use('/premium-data', glideGateway({ 
  botPrice: '$1.00', 
  humanDiscount: 99 
}));`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
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

function SyntaxHighlight({ code }: { code: string }) {
  const lines = code.split("\n");

  return (
    <div className="font-mono text-[13px] sm:text-sm leading-7">
      {lines.map((line, i) => (
        <div key={i} className="flex">
          <span className="select-none w-8 text-right mr-6 text-white/15 text-xs leading-7">
            {i + 1}
          </span>
          <span>
            {colorize(line)}
          </span>
        </div>
      ))}
    </div>
  );
}

function colorize(line: string) {
  // Comments
  if (line.trimStart().startsWith("//")) {
    return <span className="text-white/25 italic">{line}</span>;
  }

  // Apply token coloring
  let result = line;

  // Simple token replacement using spans
  const tokens: { pattern: RegExp; className: string }[] = [
    { pattern: /\b(import|from|const)\b/g, className: "text-violet-400" },
    { pattern: /('[@/\w.-]+')/g, className: "text-emerald-400" },
    { pattern: /\b(app)\b/g, className: "text-blue-300" },
    { pattern: /(\/\/.*)/g, className: "text-white/25" },
    { pattern: /(\$[\d.]+)/g, className: "text-amber-400" },
    { pattern: /(\b\d+\b)/g, className: "text-amber-400" },
    { pattern: /\b(glideGateway|use)\b/g, className: "text-blue-400" },
    { pattern: /\b(botPrice|humanDiscount)\b/g, className: "text-sky-300" },
  ];

  // For simplicity, render with basic coloring instead of complex regex replacement
  const parts: React.ReactNode[] = [];
  let remaining = result;
  let key = 0;

  // Import keyword
  if (remaining.includes("import")) {
    const idx = remaining.indexOf("import");
    if (idx > 0) parts.push(<span key={key++}>{remaining.slice(0, idx)}</span>);
    parts.push(
      <span key={key++} className="text-violet-400">import</span>
    );
    remaining = remaining.slice(idx + 6);
  }

  if (remaining.includes("from")) {
    const idx = remaining.indexOf("from");
    if (idx > 0) parts.push(<span key={key++}>{remaining.slice(0, idx)}</span>);
    parts.push(
      <span key={key++} className="text-violet-400">from</span>
    );
    remaining = remaining.slice(idx + 4);
  }

  // Strings in single quotes
  const stringMatch = remaining.match(/('[^']*')/);
  if (stringMatch && stringMatch.index !== undefined) {
    if (stringMatch.index > 0)
      parts.push(<span key={key++}>{remaining.slice(0, stringMatch.index)}</span>);
    parts.push(
      <span key={key++} className="text-emerald-400">
        {stringMatch[1]}
      </span>
    );
    remaining = remaining.slice(stringMatch.index + stringMatch[1].length);
  }

  if (remaining) {
    // Highlight special tokens in remaining
    const highlighted = remaining
      .replace(/\b(app)\b/g, "%%APP%%")
      .replace(/\b(glideGateway|use)\b/g, "%%FUNC%%$1%%/FUNC%%")
      .replace(/\b(botPrice|humanDiscount)\b/g, "%%PROP%%$1%%/PROP%%")
      .replace(/(\$[\d.]+|\b\d+\b)/g, "%%NUM%%$1%%/NUM%%");

    // Simple render without complex parsing
    parts.push(<span key={key++} className="text-white/70">{remaining}</span>);
  } else if (parts.length === 0) {
    parts.push(<span key={key++} className="text-white/70">{line}</span>);
  }

  return <>{parts}</>;
}

export default function CodeShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32" id="developer">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-blue-600/[0.03] blur-[120px]" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            Developer Experience
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px rounded-2xl border border-white/[0.06] bg-white/[0.06] overflow-hidden">
          {/* Left: Text */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0a0a0a] p-8 sm:p-12 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white leading-tight">
              Zero friction for them.
              <br />
              <span className="text-white/40">Two lines of code for you.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/35 max-w-md">
              Stop rewriting your stack for the AI era. Drop Glide in front of
              your existing APIs, and start accepting agentic payments today.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                middleware pattern
              </span>
            </div>
          </motion.div>

          {/* Right: Code */}
          <motion.div
            variants={itemVariants}
            className="bg-[#0c0c0c] p-6 sm:p-8 flex flex-col"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Terminal className="h-3 w-3 text-white/20" />
                <span className="font-mono text-[11px] text-white/20">
                  middleware.ts
                </span>
              </div>
            </div>

            {/* Code */}
            <div className="flex-1 overflow-x-auto">
              <SyntaxHighlight code={codeString} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
