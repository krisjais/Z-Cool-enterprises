'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hotspots({ product }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const C = {
    borderLight: 'rgba(15,43,70,0.06)',
    borderStrong: 'rgba(15,43,70,0.12)'
  };

  // Support both product.hotspots and product.blueprintSpecs.annotations
  const hotspots = product.hotspots || product.blueprintSpecs?.annotations || [];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Diagram Board (Left 7 Columns) */}
        <div className="col-span-1 lg:col-span-7 flex justify-center relative bg-slate-50 rounded-[32px] p-8 border border-[#0F2B46]/5 overflow-hidden">
          {/* Studio engineering background grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] engineering-grid" />
          
          <div className="relative w-full aspect-[4/3] max-w-lg flex items-center justify-center">
            {/* Show product front view render */}
            <img
              src={product.images[0]}
              alt="Engineering Explorer Diagram"
              className="max-h-full max-w-full object-contain opacity-95 filter saturate-50 select-none pointer-events-none"
            />

            {/* Hotspots Mapping */}
            {hotspots.map(spot => (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                onMouseEnter={() => setActiveHotspot(spot)}
                className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D6FA3] text-white flex items-center justify-center font-mono text-xs font-bold shadow-[0_0_15px_rgba(29,111,163,0.6)] cursor-pointer focus:outline-none"
                style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                }}
              >
                <span className="absolute inset-0 rounded-full bg-[#1D6FA3] animate-ping opacity-60" />
                +
              </button>
            ))}
          </div>
        </div>

        {/* Explorer Details Panel (Right 5 Columns) */}
        <div className="col-span-1 lg:col-span-5 text-left">
          <AnimatePresence mode="wait">
            {activeHotspot ? (
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 border rounded-3xl p-6 md:p-8 relative text-left shadow-sm bg-gradient-to-tr from-slate-50 to-white"
                style={{ borderColor: C.borderStrong }}
              >
                <span className="font-mono text-[9px] text-[#1D6FA3] uppercase tracking-wider font-bold">COMPONENT SPEC SHEET</span>
                <h3 className="text-xl font-bold text-[#0F2B46] mt-2 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D6FA3]" />
                  {activeHotspot.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                  {activeHotspot.desc}
                </p>
                <div className="border-t pt-4 font-mono text-[10px] text-slate-400" style={{ borderColor: C.borderLight }}>
                  EXPLODED PART ID: #{activeHotspot.id.toUpperCase()}
                </div>
              </motion.div>
            ) : (
              <div className="border border-dashed rounded-3xl p-12 text-center text-slate-400 font-mono text-xs select-none">
                Hover or tap a hotspot on the diagram canvas to load internal component technical specs.
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
