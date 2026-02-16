"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { animate } from "animejs";
import { cn } from "@/utils/cn";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "Teams", href: "/teams" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Media", href: "/media" },
  { name: "Community", href: "/community" },
  { name: "Shop", href: "/shop" },
];

export default function NavLinks() {
  const containerRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Entrance Animation with GSAP
    if (containerRef.current) {
      const links = containerRef.current.children;
      gsap.fromTo(
        links,
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power3.out", 
          delay: 0.4 
        }
      );
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    // Anime.js micro-interaction for hover
    animate(e.currentTarget, {
      scale: 1.05,
      duration: 300,
      ease: 'outElastic(1, .8)'
    });
    
    // Scale neighbors effect could be added here purely with reacting to mouse X/Y
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    animate(e.currentTarget, {
      scale: 1,
      duration: 300,
      ease: 'outQuad'
    });
  };

  return (
    <ul ref={containerRef} className="hidden md:flex items-center gap-8">
      {LINKS.map((link) => (
        <li 
          key={link.name}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            href={link.href}
            className={cn(
              "relative block py-2 text-sm font-bold tracking-wide uppercase transition-colors duration-300",
              pathname === link.href ? "text-neon-cyan" : "text-gray-300 hover:text-white"
            )}
          >
            {/* Text Glow Layer */}
            <span className="relative z-10 group-hover:text-glow transition-all duration-300">
              {link.name}
            </span>
            
            {/* Underline Animation */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-cyan transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ease-out" />
            
            {/* Active Indicator */}
            {pathname === link.href && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_10px_#00f3ff]" />
            )}
            
          </Link>
        </li>
      ))}
    </ul>
  );
}
