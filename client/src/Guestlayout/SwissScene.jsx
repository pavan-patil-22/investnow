import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image as DreiImage, useCursor } from "@react-three/drei";
import * as THREE from "three";

// --- 3D Component: Interactive Image ---
export function HoverImage() {
  const ref = useRef(null);
  const [hovered, setHover] = useState(false);

  useCursor(hovered);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const material = ref.current.material;

    material.grayscale = THREE.MathUtils.damp(
      material.grayscale,
      hovered ? 0 : 1,
      4,
      delta,
    );
    material.zoom = THREE.MathUtils.damp(
      material.zoom,
      hovered ? 1.1 : 1,
      4,
      delta,
    );

    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <DreiImage
      ref={ref}
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtC_D-34ozW6glvgR5o8qyI8DhEuzB-quqCH4nchK5PQ&s=10"
      transparent
      scale={[4, 5]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    />
  );
}

// --- Component: 3D Scene Wrapper ---
export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <HoverImage />
    </Canvas>
  );
}

// --- Component: Infinite Marquee ---
export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-t border-black bg-[#ff3300] py-4 text-black">
      <div className="animate-marquee whitespace-nowrap text-4xl font-black uppercase tracking-tighter">
        <span className="mx-4">New Collection 2024 —</span>
        <span className="mx-4">Paris Fashion Week —</span>
        <span className="mx-4">Available Worldwide —</span>
        <span className="mx-4">New Collection 2024 —</span>
        <span className="mx-4">Paris Fashion Week —</span>
        <span className="mx-4">Available Worldwide —</span>
      </div>
    </div>
  );
}
