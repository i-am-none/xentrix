"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";

export const ShootingStars = ({
  minDelay = 1200,
  maxDelay = 4200,
  minSpeed = 10,
  maxSpeed = 30,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}: {
  minDelay?: number;
  maxDelay?: number;
  minSpeed?: number;
  maxSpeed?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}) => {
  const [star, setStar] = useState<{
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
  } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      const { innerWidth, innerHeight } = window;
      const x = Math.random() * innerWidth;
      const y = 0;
      const angle = 45;
      const scale = 1;
      const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      const distance = 0;

      setStar({ x, y, angle, scale, speed, distance });

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();
  }, [minDelay, maxDelay, minSpeed, maxSpeed]);

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;
          const { innerWidth, innerHeight } = window;

          if (
            newX < -20 ||
            newX > innerWidth + 20 ||
            newY < -20 ||
            newY > innerHeight + 20
          ) {
            return null;
          }

          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0 z-0", className)}
    >
      {star && (
        <rect
          key={star.distance}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};


export const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}: {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}) => {
  const [stars, setStars] = useState<
    {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number | null;
    }[]
  >([]);

  useEffect(() => {
    const generateStars = () => {
      const { innerWidth, innerHeight } = window;
      const area = innerWidth * innerHeight;
      const numStars = Math.floor(area * starDensity);
      const newStars = Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          radius: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
  ]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          if (star.twinkleSpeed !== null) {
            const opacity =
              0.5 +
              Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
            return { ...star, opacity };
          }
          return star;
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className={cn("fixed inset-0 h-full w-full z-0", className)}
    >
      <canvas
        id="stars-canvas"
        className="absolute inset-0 h-full w-full"
        width={typeof window !== "undefined" ? window.innerWidth : 1000}
        height={typeof window !== "undefined" ? window.innerHeight : 1000}
        ref={(canvas) => {
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
              });
            }
          }
        }}
      />
    </div>
  );
};
