"use client";

import { Play } from "lucide-react";

export default function FeaturedHighlight() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-24">
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
        {/* Placeholder Thumbnail / Video Background */}
        <div className="absolute inset-0 bg-zinc-900 bg-[url('/grid.svg')] bg-center">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>
        
        {/* Play Button Center */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-neon-cyan group-hover:border-neon-cyan transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <Play className="w-8 h-8 text-white fill-white group-hover:text-black group-hover:fill-black transition-colors" />
            </div>
            {/* Pulsing ring */}
            <div className="absolute w-24 h-24 rounded-full border border-white/30 animate-ping opacity-50 group-hover:border-neon-cyan" />
        </div>

        {/* Content Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    Top Play
                </span>
                <span className="text-gray-400 font-mono text-xs uppercase">
                    Grand Finals // Map 5
                </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight mb-2">
                "THE IMPOSSIBLE CLUTCH"
            </h3>
            <p className="text-gray-400 max-w-xl text-lg">
                Witness the moment that defined the 2025 season. 1v4 against Team Solstice.
            </p>
        </div>
      </div>
    </div>
  );
}
