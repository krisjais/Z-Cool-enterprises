'use client';

import React from 'react';

export default function Lights() {
  return (
    <>
      {/* Base ambient illumination */}
      <ambientLight intensity={0.4} />

      {/* Cyber blue key directional light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#005BFF"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />

      {/* Cyan secondary fill light */}
      <directionalLight
        position={[-5, 4, -2]}
        intensity={0.8}
        color="#00F0FF"
      />

      {/* Central spotlight pointing to the center object */}
      <spotLight
        position={[0, 10, 0]}
        intensity={2.5}
        color="#FFFFFF"
        angle={0.6}
        penumbra={0.5}
        castShadow
      />

      {/* Point light to add back rim-lighting glow */}
      <pointLight position={[0, -5, -5]} intensity={1.5} color="#005BFF" />
    </>
  );
}
