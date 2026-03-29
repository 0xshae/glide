"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const codeString = `import { glideMiddleware } from '@glide/core';

// Protect your API routes from fake traffic
app.use(glideMiddleware({
  requireWorldId: true
}));`;

function SyntaxHighlight({ code }: { code: string }) {
  const lines = code.split("\n");

  return (
    <div className="font-mono text-sm md:text-lg leading-loose selection:bg-white/20">
      {lines.map((line, i) => (
        <div key={i} className="flex">
            <span className="select-none w-12 text-left text-white/20">
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
    return <span className="text-white/30">{line}</span>;
  }

  let resultString = line;
  
  // Highlight important terms in stark monochrome/slight accent
  if (resultString.includes("import")) {
    resultString = resultString.replace("import", "<span class='text-white/50'>import</span>");
  }
  if (resultString.includes("from")) {
    resultString = resultString.replace("from", "<span class='text-white/50'>from</span>");
  }
  if (resultString.includes("'@glide/core'")) {
    resultString = resultString.replace("'@glide/core'", "<span class='text-white'>'@glide/core'</span>");
  }
  if (resultString.includes("app.use(")) {
    resultString = resultString.replace("app.use(", "<span class='text-white/50'>app.use(</span>");
  }
  if (resultString.includes("glideMiddleware")) {
    resultString = resultString.replace("glideMiddleware", "<span class='text-white font-semibold'>glideMiddleware</span>");
  }
  if (resultString.includes("requireWorldId")) {
    resultString = resultString.replace("requireWorldId", "<span class='text-white'>requireWorldId</span>");
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
    <section className="relative py-48 bg-black border-y border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div>
                 <h2 className="text-[2.5rem] sm:text-[4rem] font-medium tracking-tight text-white leading-[1.05] mb-8">
                   One line of code.
                 </h2>
                 <p className="text-xl sm:text-2xl text-white/40 leading-relaxed font-light">
                    Wrap your existing architecture with the Glide middleware. It handles strict World ID verification natively without disrupting your stack.
                 </p>
            </div>

            {/* Stark Editorial Code Block - No terminal styling */}
            <div className="bg-[#050505] border border-white/10 p-8 sm:p-12 h-full flex items-center">
                <SyntaxHighlight code={codeString} />
            </div>
        </div>
      </motion.div>
    </section>
  );
}
