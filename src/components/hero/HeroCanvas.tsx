"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Dynamic Rotation based on mouse position (Smoother Lerp)
    // Target rotation
    const targetX = state.pointer.y * 0.5; // Look up/down
    const targetY = state.pointer.x * 0.5; // Look left/right
    
    // Smoothly interpolate (damp)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX + time * 0.1, 0.02);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY + time * 0.15, 0.02);

    // Note: Removed the per-frame material distortion update as it causes significant overhead on some GPUs.
    // The distortion effect is now static but the mesh itself rotates/floats.
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron args={[1, 0]} ref={meshRef} scale={2}>
          {/* Static distortion is much cheaper */}
          <MeshDistortMaterial
            color="#050505"
            emissive="#00f3ff"
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.8}
            distort={0.4}
            speed={2}
            wireframe
          />
        </Icosahedron>
      </Float>
      
      {/* Reduced star count for performance */}

    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]} // Limit pixel ratio for performance
        gl={{ antialias: false }} // Disable generic antialiasing if performance is key
      >
        <Scene />
        <fog attach="fog" args={['#000', 5, 20]} />
      </Canvas>
      
      {/* Pointer events none is CRITICAL here to let clicks pass through the gradient if needed, 
          but usually the canvas should catch mouse events for the parallax. 
          The overlay was the issue before. */}
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />
    </div>
  );
}
