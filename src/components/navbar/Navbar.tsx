"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "lucide-react";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";
import WebGLBackground from "./WebGLBackground";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Load Animation
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // 2. Scroll Animation (Shrink & Opacity)
      ScrollTrigger.create({
        start: "top top",
        end: 100,
        onUpdate: (self: ScrollTrigger) => {
          // Shrink height logic
          // We can use a class toggle or GSAP animation. GSAP is smoother.
          if (self.scroll() > 50) {
            gsap.to(navRef.current, { 
              height: 64, 
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(bgRef.current, {
              opacity: 0.9, 
              backdropFilter: "blur(16px)",
              duration: 0.3
            });
          } else {
            gsap.to(navRef.current, { 
              height: 80, 
              duration: 0.3, 
              ease: "power2.out"
            });
            gsap.to(bgRef.current, {
              opacity: 0.6,
              backdropFilter: "blur(8px)",
              duration: 0.3
            });
          }
        }
      });
      
      // 3. Scroll Direction (Show/Hide) logic (Optional, requested "Expands on scroll up")
      // The current logic above handles standard shrinking. 
      // User says "Shrinks to ~64px on scroll down" AND "Expands on scroll up".
      // This usually means sticking to the top. The "Hide on scroll down, show on scroll up" is a different pattern.
      // Based on "Fixed at top of viewport" and "Shrinks", I will assume it STAYS distinct but shrinks.
      
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-40 h-20 transition-all duration-300 pointer-events-none" // pointer-events-none on container to let clicks pass if needed, but we need children to interact. Actually let's remove pointer-events-none and handle bg clicks separately if needed.
        style={{ height: '73px' }} 
      >
        {/* Helper Wrapper for pointer events */}
        <div className="relative w-full h-full pointer-events-auto">
          
          {/* Background Layer */}
          <div 
            ref={bgRef} 
            className="absolute inset-0 bg-black/60 border-b border-white/5 transition-all duration-300"
          >
            {/* 3D WebGL Layer */}
            <WebGLBackground />
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-electric-purple/5 opacity-50" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <NavLogo />
            </div>

            {/* Center: Navigation (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <NavLinks />
            </div>

            {/* Right: Actions & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <NavActions /> 
                {/* Note: In a real app, NavActions would handle the auth state. 
                    For this demo, ensure NavActions contains a Link to /dashboard or similar. 
                */}
              </div>
              
              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-white p-2 hover:text-neon-cyan transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
