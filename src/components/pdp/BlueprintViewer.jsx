'use client';

import React, { useState, useRef } from 'react';
import { Eye, Info, Move } from 'lucide-react';

export default function BlueprintViewer({ product, activeImageIndex }) {
  const [activeAnnotation, setActiveAnnotation] = useState(null);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const annotations = product.blueprintSpecs?.annotations || [];
  const measurements = product.blueprintSpecs?.measurements || [];
  const dimensions = product.blueprintSpecs?.dimensions || '';

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-[32px] bg-[#0A1622] border border-[#1D6FA3]/30 shadow-2xl overflow-hidden flex flex-col justify-between p-6 select-none"
    >
      {/* CAD technical blueprint grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 blueprint-grid" />

      {/* Horizontal Dimension Rule line */}
      <div className="absolute top-8 left-16 right-16 h-[1px] bg-[#0EA6A6]/40 flex items-center justify-center">
        <div className="w-[1px] h-2 bg-[#0EA6A6] absolute left-0" />
        <div className="bg-[#0A1622] px-3 font-mono text-[9px] text-[#0EA6A6] font-bold tracking-widest uppercase">
          DIM: {dimensions.split(' (')[0]}
        </div>
        <div className="w-[1px] h-2 bg-[#0EA6A6] absolute right-0" />
      </div>

      {/* Vertical Dimension Rule line */}
      <div className="absolute left-8 top-16 bottom-16 w-[1px] bg-[#0EA6A6]/40 flex items-center justify-center">
        <div className="h-[1px] w-2 bg-[#0EA6A6] absolute top-0" />
        <span 
          className="bg-[#0A1622] py-2 px-1 font-mono text-[9px] text-[#0EA6A6] font-bold tracking-widest uppercase"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          H: {dimensions.includes('x ') ? dimensions.split('x ')[1].split(' ')[0] : 'AUTO'}
        </span>
        <div className="h-[1px] w-2 bg-[#0EA6A6] absolute bottom-0" />
      </div>

      {/* Main CAD Interactive Canvas Area */}
      <div 
        className="flex-grow flex items-center justify-center relative overflow-hidden cursor-crosshair mt-8 mb-4"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => {
          setIsZooming(false);
          setActiveAnnotation(null);
        }}
      >
        {/* Render main image in cyan CAD styling */}
        <img 
          src={product.images[activeImageIndex]} 
          alt="CAD Blueprint Blueprint" 
          className="max-h-[85%] max-w-[85%] object-contain filter invert opacity-80 transition-transform duration-100 pointer-events-none"
          style={{
            transform: isZooming ? 'scale(1.5)' : 'scale(1)',
            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
            filter: 'invert(80%) sepia(30%) saturate(1200%) hue-rotate(150deg) brightness(0.95)'
          }}
        />

        {/* Sonar Hotspot Annotations Overlaid (Only when not zooming in closely to avoid shifts) */}
        {!isZooming && annotations.map((spot, idx) => (
          <div
            key={spot.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          >
            <button
              onMouseEnter={() => setActiveAnnotation(spot)}
              className="w-5 h-5 rounded-full bg-[#0EA6A6] text-white flex items-center justify-center font-mono text-[9px] font-bold shadow-[0_0_10px_rgba(14,166,166,0.6)] cursor-pointer focus:outline-none relative"
            >
              <span className="absolute inset-0 rounded-full bg-[#0EA6A6] animate-ping opacity-60" />
              {idx + 1}
            </button>

            {/* Frosted Glass CAD Tooltip */}
            {activeAnnotation && activeAnnotation.id === spot.id && (
              <div className="absolute top-7 left-1/2 -translate-x-1/2 min-w-[180px] max-w-[220px] bg-[#0A1622]/90 backdrop-blur-md border border-[#0EA6A6]/30 p-3.5 rounded-xl shadow-xl z-30 text-left">
                <span className="font-mono text-[8px] text-[#0EA6A6] font-bold uppercase tracking-wider block mb-1">
                  ANNOTATION 0{idx + 1}
                </span>
                <p className="text-[10px] text-slate-300 font-mono leading-relaxed">
                  {spot.text}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Blueprint HUD Legend & Parameters list */}
      <div className="flex justify-between items-end border-t border-[#1D6FA3]/20 pt-4 z-10">
        <div className="flex flex-col gap-1 text-left">
          <span className="font-mono text-[8px] text-[#0EA6A6] font-bold uppercase tracking-wider">BLUEPRINT TELEMETRY REPORT</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400 font-mono text-[9px]">
            {measurements.map((m, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#0EA6A6]" />
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#0EA6A6]/10 border border-[#0EA6A6]/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-mono text-[9px] text-[#0EA6A6] font-bold pointer-events-none uppercase">
          <Move size={10} className="animate-pulse" /> Zoom origin active
        </div>
      </div>
    </div>
  );
}
