"use client";

import { Activity, ArrowUpRight, DollarSign, Users, Video } from "lucide-react";

export default function OverviewPanel() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
        <header className="mb-8">
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Command Center</h1>
            <p className="text-gray-500 text-sm">System Status: <span className="text-green-500 font-bold">OPERATIONAL</span></p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
                { label: "Total Users", value: "842,391", change: "+12%", icon: Users, color: "text-blue-500" },
                { label: "Revenue (MTD)", value: "$124,500", change: "+8%", icon: DollarSign, color: "text-green-500" },
                { label: "Active Players", value: "12,450", change: "+24%", icon: Activity, color: "text-electric-purple" },
                { label: "Media Assets", value: "3,892", change: "+5%", icon: Video, color: "text-orange-500" },
            ].map((stat, i) => (
                <div key={i} className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                            {stat.change} <ArrowUpRight className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
            ))}
        </div>

        {/* Main Charts Area (Mock) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Activity Chart */}
            <div className="lg:col-span-2 bg-zinc-900/50 border border-white/5 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white">Platform Activity</h3>
                    <select className="bg-black border border-white/10 text-xs text-white rounded px-3 py-1 outline-none">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                    </select>
                </div>
                {/* CSS Bar Chart Mock */}
                <div className="h-64 flex items-end justify-between gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                        <div key={i} className="w-full bg-zinc-800 hover:bg-neon-cyan/50 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                                {h}%
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-4 uppercase font-mono">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
            </div>

            {/* Recent Actions List */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6">
                 <h3 className="text-lg font-bold text-white mb-6">Recent Actions</h3>
                 <div className="space-y-4">
                    {[
                        { user: "Admin", action: "Suspended User #8821", time: "2m ago", color: "text-red-400" },
                        { user: "ContentBot", action: "Uploaded Highlights", time: "15m ago", color: "text-blue-400" },
                        { user: "Mod_Sarah", action: "Appropriated Report", time: "1h ago", color: "text-yellow-400" },
                        { user: "System", action: "Backup Completed", time: "3h ago", color: "text-green-400" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                            <div className="w-2 h-2 mt-1.5 rounded-full bg-zinc-700" />
                            <div>
                                <p className="text-sm text-gray-300">
                                    <span className="font-bold text-white">{item.user}</span> {item.action}
                                </p>
                                <p className="text-xs text-zinc-600 font-mono mt-1">{item.time}</p>
                            </div>
                        </div>
                    ))}
                 </div>
                 <button className="w-full mt-6 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors rounded">
                    View Audit Log
                 </button>
            </div>

        </div>
    </div>
  );
}
