"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/utils/cn";

export default function TournamentsSection() {
  const data = [
    {
      title: "LIVE NOW",
      content: (
        <div>
          <div className="p-6 bg-zinc-900 border border-neon-cyan/50 rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.1)] relative overflow-hidden group">
            {/* Live Pulse */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-red-500 font-bold text-xs tracking-widest">LIVE</span>
            </div>

            <p className="text-neutral-400 font-mono text-xs mb-2">
               GLOBAL FINALS // MAP 3
            </p>
            <h4 className="text-3xl font-black text-white mb-4">
              VALORANT CHAMPIONS 2026
            </h4>
             <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-white">X</div>
                    <span className="text-white font-bold">XENTRIX</span>
                </div>
                <div className="text-gray-500 font-bold">VS</div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-gray-400">?</div>
                    <span className="text-gray-400 font-bold">TBD</span>
                </div>
             </div>

             <div className="flex gap-3">
                <button className="px-6 py-2 bg-neon-cyan text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                    Watch Stream
                </button>
                <button className="px-6 py-2 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                    Stats
                </button>
             </div>
          </div>
        </div>
      ),
    },
    {
      title: "UPCOMING",
      content: (
        <div>
           <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-xl hover:border-electric-purple/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
                 <div className="text-electric-purple font-mono text-xs tracking-widest border border-electric-purple/30 px-2 py-1 rounded">
                    STARTS IN 2D 14H
                 </div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-electric-purple transition-colors">
              BGMI PRO LEAGUE: SEASON 5
            </h4>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              The roster returns to Miramar. High stakes qualification rounds begin this weekend.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Prize Pool: $500,000</span>
                <span>•</span>
                <span>16 Teams</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "COMPLETED",
      content: (
        <div>
           <div className="p-6 bg-black border border-white/5 rounded-xl opacity-60 hover:opacity-100 transition-opacity">
            <h4 className="text-xl font-bold text-gray-300 mb-2">
              CS2 WINTER OFFENSIVE
            </h4>
             <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500 font-bold">1ST PLACE</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400">Undefeated Run</span>
             </div>
            <p className="text-neutral-500 text-sm">
              Xentrix secured the trophy with a 3-0 sweep in the grand finals.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-black">
      <Timeline data={data} />
    </div>
  );
}
