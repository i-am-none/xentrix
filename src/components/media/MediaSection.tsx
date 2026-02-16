"use client";

import FeaturedHighlight from "./FeaturedHighlight";
import HighlightsGrid from "./HighlightsGrid";
import CommunitySection from "./CommunitySection";

export default function MediaSection() {
  return (
    <section className="w-full bg-black pt-32 pb-0 relative">
       {/* Section Divider - Glitch Line */}
       <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-32" />

       <FeaturedHighlight />
       <HighlightsGrid />
       <CommunitySection />
    </section>
  );
}
