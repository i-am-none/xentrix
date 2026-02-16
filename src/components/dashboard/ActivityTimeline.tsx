"use client";

import { CheckCircle, PlayCircle, ShoppingBag, Trophy } from "lucide-react";

const ACTIVITIES = [
  { id: 1, type: "watch", text: "Watched VCT Grand Finals", time: "2 hours ago", icon: PlayCircle, color: "text-neon-cyan" },
  { id: 2, type: "achievement", text: "Unlocked 'Sharpshooter' Badge", time: "1 day ago", icon: Trophy, color: "text-yellow-500" },
  { id: 3, type: "purchase", text: "Purchased Elite Battle Pass", time: "3 days ago", icon: ShoppingBag, color: "text-electric-purple" },
  { id: 4, type: "mission", text: "Completed Daily: 5 Headshots", time: "4 days ago", icon: CheckCircle, color: "text-green-500" },
];

export default function ActivityTimeline() {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 h-full">
      <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
         Recent Activity 
         <div className="h-1 w-1 bg-neon-cyan rounded-full animate-ping" />
      </h3>
      
      <div className="space-y-6">
        {ACTIVITIES.map((item, i) => (
            <div key={item.id} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors`}>
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    {i !== ACTIVITIES.length - 1 && (
                        <div className="w-[1px] h-full bg-zinc-800 my-2" />
                    )}
                </div>
                <div className="pb-4">
                    <p className="text-gray-200 text-sm font-medium group-hover:text-neon-cyan transition-colors cursor-pointer">
                        {item.text}
                    </p>
                    <p className="text-zinc-500 text-xs font-mono mt-1">
                        {item.time}
                    </p>
                </div>
            </div>
        ))}
      </div>
      
      <button className="w-full py-3 mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white border-t border-white/5 transition-colors">
        View Full History
      </button>
    </div>
  );
}
