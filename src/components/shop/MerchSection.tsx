"use client";

import ProductCard from "./ProductCard";

const PRODUCTS = [
    { id: 1, name: "Pro Jersey 2026", price: "$59.99", tag: "Apparel", image: "" },
    { id: 2, name: "Tactical Hoodie", price: "$84.99", tag: "Outerwear", image: "" },
    { id: 3, name: "Stealth Cap", price: "$29.99", tag: "Headwear", image: "" },
    { id: 4, name: "Deskmat XL", price: "$34.99", tag: "Gear", image: "" },
];

export default function MerchSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-32">
         <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                    The Armory
                </h2>
                <div className="h-1 w-20 bg-neon-cyan mt-4" />
            </div>
            <button className="hidden md:block text-white hover:text-neon-cyan uppercase font-bold text-sm tracking-widest transition-colors">
                View Full Catalog &rarr;
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((prod) => (
                <ProductCard key={prod.id} {...prod} />
            ))}
        </div>
    </div>
  );
}
