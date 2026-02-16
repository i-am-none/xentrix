import Link from "next/link";
import { Search, User } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NavActions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.8 }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="flex items-center gap-6">
      <button 
        aria-label="Search" 
        className="text-white/80 hover:text-neon-cyan transition-colors hover:scale-110 active:scale-95 duration-200"
      >
        <Search size={22} />
      </button>
      
      <Link href="/dashboard">
        <button 
            aria-label="Profile"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-electric-purple bg-white/5 hover:bg-electric-purple/20 transition-all duration-300 group"
        >
            <User size={20} className="text-white/80 group-hover:text-electric-purple" />
        </button>
      </Link>

      <Link href="/dashboard">
        <button className="hidden lg:block px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-neon-cyan transition-colors clip-path-slant">
            Join Now
        </button>
      </Link>
    </div>
  );
}
