"use client";

import { Check } from "lucide-react";
import { cn } from "@/utils/cn";

interface PassProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  color: string;
}

export default function PassCard({ title, price, features, isPopular, color }: PassProps) {
  return (
    <div className={cn("relative p-8 rounded-2xl border bg-black transition-all duration-300 group hover:-translate-y-2", isPopular ? `border-${color} shadow-[0_0_30px_rgba(var(--color-${color}),0.3)]` : "border-white/10 hover:border-white/30")}>
      
      {/* Popular Badge */}
      {isPopular && (
        <div className={cn("absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black", `bg-${color}`)}>
            Most Popular
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className={cn("text-xl font-black uppercase tracking-widest mb-2 group-hover:text-white transition-colors", `text-${color}`)}>
            {title}
        </h3>
        <div className="flex justify-center items-end gap-1">
             <span className="text-4xl font-bold text-white">{price}</span>
             <span className="text-gray-500 mb-1 text-sm">/ season</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                <Check className={cn("w-4 h-4", `text-${color}`)} />
                <span>{feature}</span>
            </li>
        ))}
      </ul>

      {/* CTA */}
      <button className={cn("w-full py-4 font-bold uppercase tracking-widest text-xs transition-all", isPopular ? `bg-${color} text-black hover:bg-white` : "bg-white/5 text-white hover:bg-white hover:text-black")}>
        Purchase Pass
      </button>

      {/* Connector lines (decorative) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
    </div>
  );
}
