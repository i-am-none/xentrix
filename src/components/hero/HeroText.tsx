"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="text-center relative z-10 max-w-4xl mx-auto px-4 mix-blend-difference pointer-events-none">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-subtitle text-neon-cyan font-mono text-sm md:text-base tracking-[0.5em] mb-6"
      >
        SEASON 2026 // INITIALIZED
      </motion.h2>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="hero-title text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8"
      >
        WHERE <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
          CHAMPIONS
        </span>
        <br />
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">
          EVOLVE
          <span className="absolute -inset-1 blur-2xl bg-neon-cyan/20 -z-10" />
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hero-desc text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
      >
        The next generation esports ecosystem. 
        Analyze. Compete. Ascend.
        <br />
        Your legacy begins in the core.
      </motion.p>
    </div>
  );
}
