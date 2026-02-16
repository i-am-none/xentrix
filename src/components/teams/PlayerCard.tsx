"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/utils/cn";

interface PlayerProps {
  name: string;
  role: string;
  imageSrc: string; // URL for the player image
  teamColor: string;
}

export default function PlayerCard({ name, role, imageSrc, teamColor }: PlayerProps) {
  return (
    <CardContainer className="inter-var py-10 w-full">
      <CardBody className="bg-zinc-900/50 relative group/card  border-white/10 w-full sm:w-[20rem] h-auto rounded-xl p-6 border hover:bg-zinc-900/80 transition-colors">
        
        {/* Header */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-200"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 font-mono tracking-widest uppercase"
        >
          {role}
        </CardItem>
        
        {/* Image Container */}
        <CardItem translateZ="100" className="w-full mt-8">
            <div className={cn("relative w-full aspect-[4/5] rounded-xl overflow-hidden group-hover/card:shadow-2xl transition-all duration-300 border-2 border-transparent", `group-hover/card:border-${teamColor}-500`)}>
                 {/* Placeholder for real image or next/image if src provided */}
                 <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                    <span className="text-zinc-700 font-black text-6xl opacity-30 select-none">X</span>
                 </div>
                 {/* If we had a real image: 
                 <Image
                    src={imageSrc}
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  /> */}
            </div>
        </CardItem>
        
        {/* Actions / Stats */}
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            Check Stats →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            Profile
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
