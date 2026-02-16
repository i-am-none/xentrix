"use client";

import { Bell, Settings } from "lucide-react";

export default function UserHeader() {
  return (
    <div className="w-full bg-zinc-900/50 border-b border-white/5 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
      
      {/* Profile Info */}
      <div className="flex items-center gap-6 w-full md:w-auto">
        <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-zinc-800 overflow-hidden border-2 border-neon-cyan p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
                    NX
                </div>
            </div>
            {/* Online Status */}
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black" />
        </div>

        <div>
            <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">NEXUS_PRIME</h1>
                <span className="px-2 py-0.5 bg-electric-purple/20 text-electric-purple border border-electric-purple/50 text-[10px] uppercase font-bold tracking-widest rounded-md">
                    Pro Member
                </span>
            </div>
            <p className="text-gray-400 text-sm font-mono mt-1">
                Joined 2024 • ID: #882190
            </p>
            
            {/* XP Bar (Mobile only here, desktop in ProgressPanel usually) */}
            <div className="w-full md:w-64 h-2 bg-zinc-800 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-neon-cyan w-[70%]" />
            </div>
             <p className="text-xs text-neon-cyan mt-1 font-mono">Lvl 42 [70%]</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="p-3 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-colors relative">
            <Bell className="w-5 h-5" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </button>
        <button className="p-3 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-colors">
            <Settings className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
