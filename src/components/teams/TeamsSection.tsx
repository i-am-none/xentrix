"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils/cn";

const TEAMS = [
  { id: 1, name: "VALORANT", color: "from-red-500 to-red-900", icon: "V" },
  { id: 2, name: "BGMI", color: "from-amber-400 to-yellow-700", icon: "B" },
  { id: 3, name: "CS2", color: "from-blue-500 to-blue-900", icon: "C" },
  { id: 4, name: "FIFA", color: "from-emerald-400 to-emerald-800", icon: "F" },
];

export default function TeamsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Staggered Reveal Animation
      gsap.fromTo(cardsRef.current, 
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 px-6 bg-zinc-950 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16 text-center tracking-tighter uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Active Roster
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAMS.map((team, index) => (
            <div
              key={team.id}
              ref={(el) => { cardsRef.current[index] = el }}
              className="group relative h-96 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Team Bg Gradient */}
              <div className={cn("absolute inset-0 bg-gradient-to-b opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity", team.color)} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-4xl font-black text-white mb-6 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {team.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-widest">{team.name}</h3>
                <p className="text-gray-500 text-sm uppercase tracking-[0.2em] group-hover:text-gray-300 transition-colors">
                  Champion Series
                </p>
                
                {/* Hover Reveal Button */}
                 <div className="mt-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest border-b border-neon-cyan pb-1">View Squad</span>
                 </div>
              </div>

               {/* Grid Pattern overlay */}
               <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
