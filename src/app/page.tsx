import HeroSection from "@/components/hero/HeroSection";
import TeamsSection from "@/components/teams/TeamsSection";
import PlayersSection from "@/components/teams/PlayersSection";
import TournamentsSection from "@/components/tournaments/TournamentsSection";
import MediaSection from "@/components/media/MediaSection";
import ShopSection from "@/components/shop/ShopSection";

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)] bg-black">
      
      {/* Phase 2: Hero Section */}
      <HeroSection />

      <div className="relative z-10">
        <TeamsSection />
        <PlayersSection />
        <TournamentsSection />
        <MediaSection />
        <ShopSection />
      </div>

    </div>
  );
}
