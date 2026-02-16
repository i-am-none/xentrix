"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/utils/cn";

type SparklesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  
  const generatedId = useId();
  
  return (
    <div className={cn("opacity-0 transition-opacity duration-1000", init && "opacity-100")}>
        {init && (
            <Particles
                id={id || generatedId}
                className={cn("h-full w-full", className)}
                options={{
                    background: {
                        color: {
                            value: background || "transparent",
                        },
                    },
                    fullScreen: {
                        enable: false,
                        zIndex: 1,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: { enable: true },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: particleColor || "#ffffff",
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: speed || 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                width: 800,
                                height: 800,
                            },
                            value: particleDensity || 120,
                        },
                        opacity: {
                            value: { min: 0.1, max: 1 },
                            animation: {
                                enable: true,
                                speed: speed || 4,
                                sync: false,
                            },
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: minSize || 1, max: maxSize || 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        )}
    </div>
  );
};
