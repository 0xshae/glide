"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal } from "lucide-react";

const codeString = `import { glideMiddleware } from '@glide/core';

// Protect your API routes from fake traffic
app.use(glideMiddleware({
  requireWorldId: true
}));`;

function SyntaxHighlight({ code }: { code: string }) {
  const lines = code.split("\n");

  return (
    <div className="font-mono text-[13px] sm:text-sm leading-8">
      {lines.map((line, i) => (
        <div key={i} className="flex">
          <span className="select-none w-8 text-right mr-6 text-white/10 text-xs leading-8">
            {i + 1}
          </span>
          <span className="whitespace-pre">
            {colorize(line)}
          </span>
        </div>
      ))}
    </div>
  );
}

function colorize(line: string) {
  if (line.trimStart().startsWith("//")) {
    return <span className="text-white/30 italic">{line}</span>;
  }

  let resultString = line;
  
  // Highlight important terms
  if (resultString.includes("import")) {
    resultString = resultString.replace("import", "<span class='text-white/40'>import</span>");
  }
  if (resultString.includes("from")) {
    resultString = resultString.replace("from", "<span class='text-white/40'>from</span>");
  }
  if (resultString.includes("'@glide/core'")) {
    resultString = resultString.replace("'@glide/core'", "<span class='text-white'>'@glide/core'</span>");
  }
  if (resultString.includes("app.use(")) {
    resultString = resultString.replace("app.use(", "<span class='text-white/60'>app.use(</span>");
  }
  if (resultString.includes("glideMiddleware")) {
    resultString = resultString.replace("glideMiddleware", "<span class='text-white font-semibold'>glideMiddleware</span>");
  }
  if (resultString.includes("requireWorldId")) {
    resultString = resultString.replace("requireWorldId", "<span class='text-indigo-300'>requireWorldId</span>");
  }
  if (resultString.includes("true")) {
    resultString = resultString.replace("true", "<span class='text-white'>true</span>");
  }

  return <span dangerouslySetInnerHTML={{ __html: resultString || line }} className="text-white/70" />;
}

export default function CodeShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-white/[0.08] bg-[#0c0c0c] overflow-hidden shadow-2xl">
          {/* Terminal header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.04]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="h-4 w-4 text-white/20" />
              <span className="font-mono text-xs text-white/30">
                middleware.ts
              </span>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-8 sm:p-12 overflow-x-auto bg-[#0a0a0a]/50">
            <SyntaxHighlight code={codeString} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
