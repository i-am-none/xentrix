"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { X } from "lucide-react";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "Teams", href: "/teams" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Media", href: "/media" },
  { name: "Community", href: "/community" },
  { name: "Shop", href: "/shop" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Open Animation
      const tl = gsap.timeline();
      
      tl.to(menuRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power3.inOut",
      })
      .fromTo(
        linksRef.current?.children || [],
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.3"
      );
      
    } else {
      // Close Animation
      const tl = gsap.timeline();
      
      tl.to(linksRef.current?.children || [], {
        x: 50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05
      })
      .to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut"
      }, "-=0.2");
    }
  }, [isOpen]);

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl translate-x-full"
    >
      <div className="absolute top-6 right-6">
        <button 
          onClick={onClose}
          className="p-2 text-white/70 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>
      </div>
      
      <div className="flex flex-col justify-center items-center h-full">
        <ul ref={linksRef} className="space-y-8 text-center">
          {LINKS.map((link) => (
            <li key={link.name} className="overflow-hidden">
              <Link 
                href={link.href}
                onClick={onClose}
                className="block text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:to-neon-cyan transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-neon-cyan/20 to-transparent pointer-events-none" />
    </div>
  );
}
