"use client";

import { cn } from "@/utils/cn";
import { Play } from "lucide-react";

const HIGHLIGHTS = [
  { id: 1, title: "Sniper Ace", time: "0:45", category: "VALORANT", color: "bg-red-500" },
  { id: 2, title: "Team Comm Voice Log", time: "3:12", category: "DOCUMENTARY", color: "bg-blue-500" },
  { id: 3, title: "Best of Genji", time: "1:20", category: "OVERWATCH 2", color: "bg-orange-500" },
  { id: 4, title: "Speedrun Record", time: "12:04", category: "SPEEDRUN", color: "bg-purple-500" },
  { id: 5, title: "Funny Moments #42", time: "8:30", category: "COMMUNITY", color: "bg-yellow-500" },
  { id: 6, title: "Setup Tour 2026", time: "5:00", category: "LIFESTYLE", color: "bg-emerald-500" },
];

export default function HighlightsGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">
                    War Archive
                </h2>
                <p className="text-gray-500 font-mono text-sm">
                    Curated moments from the frontlines.
                </p>
            </div>
            {/* Filter Placeholder */}
            <div className="flex gap-4 mt-6 md:mt-0">
                {["ALL", "CLIPS", "MATCHES", "REELS"].map((filter, i) => (
                    <button key={i} className={cn("text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-transparent hover:border-white/20 transition-all", i === 0 ? "bg-white text-black" : "text-gray-400 hover:text-white")}>
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((item, i) => (
                <div key={item.id} className="group relative aspect-[16/9] bg-zinc-900 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-neon-cyan/50 transition-all duration-300">
                    {/* Placeholder Background with subtle gradient */}
                    <div className={cn("absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity", item.color)} />
                    
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-neon-cyan flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                            <Play className="w-5 h-5 text-black fill-black" />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="flex justify-between items-center mb-1">
                             <span className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest border border-neon-cyan/30 px-2 py-0.5 rounded">
                                {item.category}
                             </span>
                             <span className="text-gray-400 text-xs font-mono">{item.time}</span>
                        </div>
                        <h4 className="text-white font-bold group-hover:text-neon-cyan transition-colors truncate">
                            {item.title}
                        </h4>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="flex justify-center mt-12">
            <button className="px-8 py-4 border border-white/10 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest transition-all">
                Load More Archives
            </button>
        </div>
    </div>
  );
}
