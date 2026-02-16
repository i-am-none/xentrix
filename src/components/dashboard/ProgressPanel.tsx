"use client";

export default function ProgressPanel() {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 h-full">
         <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
            Achievements
         </h3>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center relative group cursor-help">
                    <div className="text-2xl opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                        🏆
                    </div>
                </div>
            ))}
            {/* Locked slots */}
            {[1, 2, 3, 4].map((i) => (
                <div key={`locked-${i}`} className="aspect-square rounded-xl bg-black/50 border border-white/5 flex items-center justify-center opacity-30">
                    🔒
                </div>
            ))}
         </div>
         
         <div className="p-4 bg-zinc-800/50 rounded-xl border border-white/5">
            <h4 className="text-white font-bold text-sm mb-1">Next Milestone</h4>
            <p className="text-zinc-400 text-xs mb-3">Watch 3 more hours of live content</p>
            <div className="w-full bg-black h-1 rounded-full">
                <div className="h-full bg-neon-cyan w-[40%]" />
            </div>
         </div>
    </div>
  );
}
