"use client";

import PassCard from "./PassCard";

const PASSES = [
  {
    title: "OPERATOR",
    price: "FREE",
    color: "gray-400",
    features: [
        "Daily Mission Access",
        "5% Shop Discount",
        "Basic Profile Badge",
        "Community Access"
    ]
  },
  {
    title: "ELITE",
    price: "$9.99",
    color: "neon-cyan",
    isPopular: true,
    features: [
        "All Operator Benefits",
        "Exclusive Player Skins",
        "Priority Tournament Entry",
        "15% Shop Discount",
        "Animated Profile Frame"
    ]
  },
  {
    title: "LEGEND",
    price: "$24.99",
    color: "electric-purple",
    features: [
        "All Elite Benefits",
        "Direct Access to Pro scrims",
        "VIP Discord Role",
        "Physical Merch Pack",
        "25% Shop Discount"
    ]
  }
];

export default function PassesSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                Battle Pass
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-mono">
                Unlock exclusive rewards, gain competitive advantages, and support the ecosystem.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PASSES.map((pass, i) => (
                <PassCard key={i} {...pass} />
            ))}
        </div>
    </div>
  );
}
