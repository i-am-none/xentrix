"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles(props: object) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const temp = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 10; // flatter distribution
      const z = (Math.random() - 0.5) * 10;
      temp[i * 3] = x;
      temp[i * 3 + 1] = y;
      temp[i * 3 + 2] = z;
    }
    return temp;
  }, []);

  useFrame((_state: RootState, delta: number) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30; // Slow rotation
      ref.current.rotation.y -= delta / 50;
      
      // Subtle mouse parallax could be added here if we access state.pointer
      // ref.current.rotation.x += (state.pointer.y * 0.05 - ref.current.rotation.x) * 0.1
      // ref.current.rotation.y += (state.pointer.x * 0.05 - ref.current.rotation.y) * 0.1
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function WebGLBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-transparent pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
