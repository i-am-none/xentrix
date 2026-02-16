"use client";

import { ShoppingBag } from "lucide-react";

interface ProductProps {
    name: string;
    price: string;
    image: string; // Using a placeholder div for now
    tag: string;
}

export default function ProductCard({ name, price, tag }: ProductProps) {
  return (
    <div className="group relative bg-zinc-900 border border-white/5 overflow-hidden cursor-pointer">
        {/* Image Placeholder */}
        <div className="w-full aspect-square bg-zinc-800 relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black text-6xl uppercase opacity-20 group-hover:scale-110 transition-transform duration-500">
                {name.substring(0, 3)}
            </div>
            
            {/* Tag */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                {tag}
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold text-lg group-hover:text-neon-cyan transition-colors">{name}</h3>
                <span className="text-white font-mono">{price}</span>
            </div>
            
            <button className="w-full mt-4 py-3 bg-white text-black font-bold uppercase flex items-center justify-center gap-2 hover:bg-neon-cyan transition-colors translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                <ShoppingBag className="w-4 h-4" /> Add to Cart
            </button>
        </div>
    </div>
  );
}
