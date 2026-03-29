"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-xl bg-[#0a0a0a]/70"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              Glide
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hidden sm:block text-sm text-white/50 hover:text-white transition-colors duration-300 font-mono"
            >
              Documentation
            </Link>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
            >
              Get API Keys
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
