"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 mt-12">
      {/* Primary CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 py-4 bg-transparent border border-neon-cyan/50 text-white font-bold tracking-widest uppercase overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          Enter Arena <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-neon-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_10px_#00f3ff]" />
      </motion.button>

      {/* Secondary CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-3 px-8 py-4 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold"
      >
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-electric-purple group-hover:bg-electric-purple/10 transition-colors">
          <Play className="w-3 h-3 fill-current" />
        </div>
        Watch Showreel
      </motion.button>
    </div>
  );
}
