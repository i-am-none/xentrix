"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

// ----------------------------------------------------------------------
// 1. VIDEO CONFIGURATION
// ----------------------------------------------------------------------
// INSTRUCTIONS:
// 1. Create a folder named 'videos' in your 'public' directory: /public/videos/
// 2. Add your video files there.
// 3. Update the paths below to match your filenames.
const SLIDES = [
  {
    id: 1,
    videoSrc: "/1.mp4", 
    fallbackColor: "bg-blue-900", // Seen if video missing
    alt: "Evolving Gameplay"
  },
  {
    id: 2,
    videoSrc: "/2.mp4",
    fallbackColor: "bg-purple-900",
    alt: "Tournament Highlights"
  },
  {
    id: 3,
    videoSrc: "/3.mp4",
    fallbackColor: "bg-emerald-900",
    alt: "Team Roster"
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ----------------------------------------------------------------------
  // 2. ANIMATION CYCLE
  // ----------------------------------------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  // ----------------------------------------------------------------------
  // 3. GSAP TRANSITION LOGIC
  // ----------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Current active slide
      const currentSlide = slideRefs.current[currentIndex];
      // All slides
      const allSlides = slideRefs.current;

      if (!currentSlide) return;

      // Reset z-index for all, bring current to front
      gsap.set(allSlides, { zIndex: 0 });
      gsap.set(currentSlide, { zIndex: 1 });

      // Animate Current Slide IN
      gsap.fromTo(currentSlide, 
        { opacity: 0, scale: 1.1 }, // Standard Fade + subtle Zoom out
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.inOut" }
      );

      // Setup cleanup for previous slides if needed (handled by z-index/opacity overlap)
      
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* ----------------------------------------------------------------------
          BACKGROUND SLIDESHOW LAYER
      ---------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => { slideRefs.current[index] = el }} // Correct way to assign to array ref
            className={`absolute inset-0 w-full h-full object-cover ${slide.fallbackColor}`}
          >
            {/* The Video Element */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80" // slight opacity for overlay blend
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
            
            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-transparent to-black/40" />
            
            {/* Optional: Pattern Overlay (Grid / Scanlines) */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10" />
          </div>
        ))}
      </div>

      {/* ----------------------------------------------------------------------
          FOREGROUND CONTENT LAYER
      ---------------------------------------------------------------------- */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 pointer-events-none">
        
        {/* Pointer events auto applied to children for interaction */}
        <div className="pointer-events-auto">
          <HeroText />
        </div>
        
        <div className="pointer-events-auto mt-8">
          <HeroCTA />
        </div>

      </div>

      {/* ----------------------------------------------------------------------
          SCROLL INDICATOR
      ---------------------------------------------------------------------- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
         <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</div>
         <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan/0 via-neon-cyan to-neon-cyan/0 animate-pulse" />
      </div>

    </section>
  );
}
