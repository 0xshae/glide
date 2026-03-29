"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const codeString = `// 1. Install the gateway
// npm install @0xshae/glide-gateway

import { glideMiddleware } from '@0xshae/glide-gateway';

// 2. Protect your API routes
app.use(glideMiddleware({
  requireWorldId: true
}));`;

function SyntaxHighlight({ code }: { code: string }) {
  const lines = code.split("\n");

  return (
    <div className="font-mono text-sm md:text-lg leading-loose selection:bg-black/10 dark:selection:bg-white/20">
      {lines.map((line, i) => (
        <div key={i} className="flex">
            <span className="select-none w-12 text-left text-black/20 dark:text-white/20">
            {String(i + 1).padStart(2, '0')}
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
    return <span className="text-black/40 dark:text-white/30">{line}</span>;
  }

  let resultString = line;
  
  // Highlight important terms in stark monochrome/slight accent
  if (resultString.includes("import")) {
    resultString = resultString.replace("import", "<span class='text-black/50 dark:text-white/50'>import</span>");
  }
  if (resultString.includes("from")) {
    resultString = resultString.replace("from", "<span class='text-black/50 dark:text-white/50'>from</span>");
  }
  if (resultString.includes("'@0xshae/glide-gateway'")) {
    resultString = resultString.replace("'@0xshae/glide-gateway'", "<span class='text-black dark:text-white'>'@0xshae/glide-gateway'</span>");
  }
  if (resultString.includes("app.use(")) {
    resultString = resultString.replace("app.use(", "<span class='text-black/50 dark:text-white/50'>app.use(</span>");
  }
  if (resultString.includes("glideMiddleware")) {
    resultString = resultString.replace("glideMiddleware", "<span class='text-black dark:text-white font-semibold'>glideMiddleware</span>");
  }
  if (resultString.includes("requireWorldId")) {
    resultString = resultString.replace("requireWorldId", "<span class='text-black dark:text-white'>requireWorldId</span>");
  }
  if (resultString.includes("true")) {
    resultString = resultString.replace("true", "<span class='text-black dark:text-white'>true</span>");
  }

  return <span dangerouslySetInnerHTML={{ __html: resultString || line }} className="text-black/80 dark:text-white/70" />;
}

export default function CodeShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-48 bg-white dark:bg-black border-y border-black/10 dark:border-white/10 transition-colors duration-300">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div>
                 <h2 className="text-[2.5rem] sm:text-[4rem] font-medium tracking-tight text-black dark:text-white leading-[1.05] mb-8 transition-colors">
                   One line of code.
                 </h2>
                 <p className="text-xl sm:text-2xl text-black/50 dark:text-white/40 leading-relaxed font-light transition-colors">
                    Wrap your existing architecture with the Glide middleware. It handles strict World ID verification natively without disrupting your stack.
                 </p>
            </div>

            {/* Stark Editorial Code Block */}
            <div className="bg-[#f5f5f5] dark:bg-[#050505] border border-black/5 dark:border-white/10 p-8 sm:p-12 h-full w-full flex items-center transition-colors overflow-hidden">
                <div className="w-full overflow-x-auto pb-4 sm:pb-0">
                    <SyntaxHighlight code={codeString} />
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
