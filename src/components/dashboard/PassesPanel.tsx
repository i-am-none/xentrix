"use client";

import { Crown } from "lucide-react";

export default function PassesPanel() {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
        {/* Glow BG */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-purple/10 blur-[50px] rounded-full pointer-events-none" />

        <div className="flex justify-between items-start mb-6">
            <h3 className="text-white font-bold uppercase tracking-wider">Active Pass</h3>
            <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase rounded border border-green-500/20">
                Active
            </span>
        </div>

        <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-electric-purple/20 rounded-xl flex items-center justify-center border border-electric-purple/50">
                <Crown className="w-8 h-8 text-electric-purple" />
            </div>
            <div>
                <h4 className="text-2xl font-black text-white italic">ELITE SEASON 5</h4>
                <p className="text-zinc-500 text-xs font-mono">Expires in 14 days</p>
            </div>
        </div>

        <div className="w-full bg-zinc-800 h-1.5 rounded-full mb-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-electric-purple to-pink-500 w-[65%]" />
        </div>
        <div className="flex justify-between text-[10px] text-zinc-500 font-mono uppercase">
            <span>Tier 45</span>
            <span>Target: Tier 100</span>
        </div>

        <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase text-xs tracking-widest transition-all">
            View Rewards
        </button>
    </div>
  );
}
