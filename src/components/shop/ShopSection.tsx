"use client";

import PassesSection from "./PassesSection";
import MerchSection from "./MerchSection";

export default function ShopSection() {
  return (
    <section className="w-full bg-zinc-950 pt-32 pb-40 relative border-t border-white/5">
       <PassesSection />
       <MerchSection />
       
       {/* Final Footer CTA */}
       <div className="w-full text-center mt-32 px-6">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            FUEL THE FUTURE
          </h2>
          <button className="px-12 py-4 bg-neon-cyan text-black font-black uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_30px_rgba(0,243,255,0.4)]">
            Support the Team
          </button>
       </div>
    </section>
  );
}
