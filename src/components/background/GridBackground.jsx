'use client';

import React from 'react';

export default function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-40 overflow-hidden">
      {/* Subtle blueprint grid lines */}
      <div className="absolute inset-0 engineering-grid" />

      {/* Gentle ambient light vignette (no neon glows) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F7F4]/20 to-[#F8F7F4]/50" />
    </div>
  );
}
