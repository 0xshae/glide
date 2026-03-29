"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
                {/* Minimal stark icon/orb representation */}
                <div className="h-2 w-2 bg-black rounded-full" />
            </div>
            <span className="text-lg font-medium tracking-tight text-white">
              Glide
            </span>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
              Developers
            </a>
            <a href="#" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
              Network
            </a>
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] duration-300"
            >
              Start Building
            </a>
            <button className="md:hidden text-white/70 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
