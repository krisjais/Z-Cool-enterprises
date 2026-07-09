'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingParticles({ count = 350 }) {
  const pointsRef = useRef();

  // Create particle positions and velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Position random coordinates inside a box
      pos[i * 3] = (Math.random() - 0.5) * 15; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z

      // Velocity drift
      vels[i * 3] = (Math.random() - 0.5) * 0.01; // X speed
      vels[i * 3 + 1] = (Math.random() * 0.01) + 0.005; // Y speed (float upwards)
      vels[i * 3 + 2] = (Math.random() - 0.5) * 0.01; // Z speed
    }

    return [pos, vels];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const geo = pointsRef.current.geometry;
    const posArray = geo.attributes.position.array;
    const { mouse } = state;

    for (let i = 0; i < count; i++) {
      // Apply upward velocity
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      
      // Add a slight sine drift to X & Z
      posArray[i * 3] += velocities[i * 3] + Math.sin(state.clock.getElapsedTime() + i) * 0.001;
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      // If particle floats past the top, wrap it around to the bottom
      if (posArray[i * 3 + 1] > 7.5) {
        posArray[i * 3 + 1] = -7.5;
        posArray[i * 3] = (Math.random() - 0.5) * 15;
      }

      // Attract slightly to normalized mouse position
      posArray[i * 3] += (mouse.x * 2.0 - posArray[i * 3]) * 0.001;
      posArray[i * 3 + 1] += (mouse.y * 2.0 - posArray[i * 3 + 1]) * 0.001;
    }

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00F0FF"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
