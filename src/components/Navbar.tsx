"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 bg-black dark:bg-white rounded-full flex items-center justify-center transition-colors">
                <div className="h-2 w-2 bg-white dark:bg-black rounded-full transition-colors" />
            </div>
            <span className="text-lg font-medium tracking-tight text-black dark:text-white transition-colors">
              Glide
            </span>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/docs" className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors">
              Documentation
            </a>
            <a href="https://github.com/0xshae/agentic-checkout" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors">
              Developers
            </a>
            <a href="https://worldcoin.org/world-chain" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors">
              Network
            </a>
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/docs"
              className="hidden md:flex items-center justify-center rounded-full bg-black text-white dark:bg-white px-5 py-2.5 text-sm font-medium dark:text-black transition-transform hover:scale-[1.02] duration-300"
            >
              Start Building
            </a>
            <button className="md:hidden text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
