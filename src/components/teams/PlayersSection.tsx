"use client";

import PlayerCard from "./PlayerCard";

const PLAYERS = [
  { id: 1, name: "NEXUS", role: "IGL / Sniper", teamColor: "cyan", img: "/p1.jpg" },
  { id: 2, name: "PHANTOM", role: "Duelist", teamColor: "purple", img: "/p2.jpg" },
  { id: 3, name: "STRIKER", role: "Support", teamColor: "emerald", img: "/p3.jpg" },
  { id: 4, name: "GLITCH", role: "Lurker", teamColor: "pink", img: "/p4.jpg" },
];

export default function PlayersSection() {
  return (
    <section className="relative w-full py-24 bg-black">
       <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 border-l-4 border-neon-cyan pl-6">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Elite Operators
          </h2>
          <p className="text-gray-500 mt-2 font-mono">Top performers of the season</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {PLAYERS.map((player) => (
                <PlayerCard 
                    key={player.id}
                    name={player.name}
                    role={player.role}
                    imageSrc={player.img}
                    teamColor={player.teamColor}
                />
            ))}
        </div>
       </div>
    </section>
  );
}
