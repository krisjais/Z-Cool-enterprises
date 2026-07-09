'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import Lights from './Lights';

export default function R3FCanvas({ children, enableControls = true, enableBloom = true }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#050608]">
        <div className="text-xs uppercase tracking-widest text-cyan-400 animate-pulse font-mono">
          Booting 3D WebGL Engine...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] relative bg-[#050608]">
      <Canvas
        shadows
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 8], fov: 45 }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#050608']} />
          
          {/* Universal Lighting Presets */}
          <Lights />

          {/* User Models/Child geometries */}
          {children}

          {/* Smooth Controls */}
          {enableControls && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 1.8}
              minPolarAngle={Math.PI / 3}
            />
          )}

          {/* Advanced WebGL Post Processing */}
          {enableBloom && (
            <EffectComposer>
              <Bloom 
                intensity={1.0} 
                luminanceThreshold={0.2} 
                luminanceSmoothing={0.9} 
                mipmapBlur
              />
              <Noise opacity={0.03} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
