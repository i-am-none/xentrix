"use client";

import { ArrowRight, Instagram, MessageCircle, Twitter, Youtube } from "lucide-react";

export default function CommunitySection() {
  return (
    <section className="w-full py-32 bg-zinc-950 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-purple/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
                JOIN THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-blue-500">
                    RESISTANCE
                </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                We are more than a team. We are a movement. Connect with 500,000+ fans on our official channels.
            </p>

            {/* Social Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
                {[ 
                   { icon: MessageCircle, label: "Discord", count: "250K+", color: "hover:text-indigo-400 hover:border-indigo-400" },
                   { icon: Twitter, label: "Twitter", count: "800K+", color: "hover:text-sky-400 hover:border-sky-400" },
                   { icon: Instagram, label: "Instagram", count: "1.2M", color: "hover:text-pink-400 hover:border-pink-400" },
                   { icon: Youtube, label: "YouTube", count: "3M+", color: "hover:text-red-400 hover:border-red-400" },
                ].map((social, i) => (
                    <div key={i} className={`p-6 border border-white/10 rounded-2xl bg-black hover:bg-zinc-900 transition-all cursor-pointer group ${social.color}`}>
                        <social.icon className="w-8 h-8 mx-auto mb-4 text-gray-500 group-hover:text-white transition-colors" />
                        <div className="font-bold text-white text-lg">{social.count}</div>
                        <div className="text-gray-500 text-sm uppercase tracking-widest">{social.label}</div>
                    </div>
                ))}
            </div>

            {/* Big CTA */}
            <div className="inline-block relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-electric-purple blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <button className="relative px-12 py-6 bg-white text-black font-black text-xl uppercase tracking-widest flex items-center gap-4 hover:scale-105 transition-transform">
                    Become a Member <ArrowRight className="w-6 h-6" />
                </button>
            </div>

        </div>
    </section>
  );
}
