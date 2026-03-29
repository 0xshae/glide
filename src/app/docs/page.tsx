"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Zap, Fingerprint, Code, Server, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocsPage() {
  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h1 className="text-[3rem] sm:text-[4.5rem] font-medium tracking-tight leading-[1] mb-6">
              Documentation
            </h1>
            <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 font-light leading-relaxed">
              Monetizing API access based on cryptographic proof of demand. Learn how to verify World ID and unlock agentic payments natively.
            </p>
          </motion.div>

          {/* Section: The Vision & The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-24"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-black/40 dark:text-white/40" />
              Vision & The Bot Problem
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-black/80 dark:text-white/80 font-light leading-loose space-y-6">
              <p>
                The internet was built for human clicks, but it is rapidly being consumed by machine velocity. As Artificial Intelligence agents proliferate, traditional web monetization models are collapsing. Ads don't work on agents. Monthly subscriptions introduce too much friction for automated micro-tasks.
              </p>
              <p>
                However, existing APIs face a massive problem: <strong>they cannot distinguish between a human-backed agent performing a valuable task, and an automated scraper bot spamming their servers.</strong>
              </p>
              <p>
                <strong>Our Vision is simple:</strong> The internet belongs to humans. AI agents should be taxed for using digital infrastructure, <em>unless</em> they can cryptographically prove they are acting on behalf of a verified human being.
              </p>
            </div>
          </motion.section>

          {/* Section: The Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-6 flex items-center gap-3">
              <Fingerprint className="h-6 w-6 text-black/40 dark:text-white/40" />
              The Glide Solution: A 3-Tier Gradient
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-black/80 dark:text-white/80 font-light leading-loose mb-10">
              <p>
                Glide sits in front of any API as a robust Express middleware, serving as a <strong>Human-Aware API Gateway</strong>. We enforce a strict 3-tier access model powered by World ID, AgentKit, and x402 payments. 
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] transition-colors rounded-none">
                  <div className="mb-4 text-4xl">🤖</div>
                  <h3 className="text-xl font-medium mb-2">1. The Bot Tax</h3>
                  <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                    No World ID proof? Requests are heavily throttled and require a $1.00 USDC on-chain payment per request.
                  </p>
                </div>
                <div className="p-6 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] transition-colors rounded-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 bg-black text-white dark:bg-white dark:text-black text-[10px] font-mono tracking-widest uppercase">Popular</div>
                  <div className="mb-4 text-4xl">🧬</div>
                  <h3 className="text-xl font-medium mb-2">2. Verified Human</h3>
                  <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                    Agent presents a valid World ID proof. Secures instant, high-priority access completely free of charge.
                  </p>
                </div>
                <div className="p-6 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] transition-colors rounded-none">
                  <div className="mb-4 text-4xl">⚡</div>
                  <h3 className="text-xl font-medium mb-2">3. Premium Tier</h3>
                  <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                    World ID proof combined with a $0.50 USDC payment unlocks ultra-priority API access and premium data payloads.
                  </p>
                </div>
            </div>
          </motion.section>

          {/* Section: Integration */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-24"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-6 flex items-center gap-3">
              <Code className="h-6 w-6 text-black/40 dark:text-white/40" />
              Integration Guide
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-black/80 dark:text-white/80 font-light leading-loose mb-8">
              <p>
                Integrating Glide takes two lines of code. You do not need to rewrite your entire backend architecture. Simply install the package and wrap your sensitive endpoints with `glideMiddleware`.
              </p>
            </div>

            <div className="bg-[#f5f5f5] dark:bg-[#050505] border border-black/10 dark:border-white/10 p-6 overflow-x-auto transition-colors">
              <div className="flex items-center gap-2 mb-4 text-black/40 dark:text-white/40">
                <Terminal className="h-4 w-4" />
                <span className="text-xs font-mono uppercase tracking-widest">server.ts</span>
              </div>
              <pre className="text-sm sm:text-base font-mono leading-relaxed text-black/80 dark:text-white/80">
                <code>
<span className="text-black/40 dark:text-white/40">import</span> express <span className="text-black/40 dark:text-white/40">from</span> "express";<br/>
<span className="text-black/40 dark:text-white/40">import</span> {"{ glideMiddleware }"} <span className="text-black/40 dark:text-white/40">from</span> "@0xshae/glide-gateway";<br/>
<br/>
const app = express();<br/>
<br/>
<span className="text-black/40 dark:text-white/40">// Protect your API route with World ID-first logic</span><br/>
app.use(<span className="font-semibold">"/api/generate"</span>, <span className="font-semibold">glideMiddleware</span>({"{ requireWorldId: true, fallback: 'pay' }"}));<br/>
<br/>
app.get("/api/generate", (req, res) ={">"} {"{"}<br/>
&nbsp;&nbsp;<span className="text-black/40 dark:text-white/40">// This route is now protected. Bots pay. Humans glide.</span><br/>
&nbsp;&nbsp;res.json({"{"} data: "Premium payload" {"}"});<br/>
{"}"});<br/>
                </code>
              </pre>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <a href="https://github.com/0xshae/agentic-checkout" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase border-b border-black dark:border-white pb-1 w-fit hover:opacity-50 transition-opacity">
                 View GitHub Repository &rarr;
               </a>
            </div>
          </motion.section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
