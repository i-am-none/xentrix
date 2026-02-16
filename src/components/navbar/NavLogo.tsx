"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function NavLogo() {
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  return (
    <Link 
      href="/" 
      ref={logoRef}
      className="relative flex items-center gap-2 font-black text-2xl tracking-tighter uppercase select-none group"
    >
      <img 
        src="/logo/xentrix-logo.png" 
        alt="Xentrix" 
        className="h-25 w-auto object-contain" 
      />
    </Link>
  );
}
