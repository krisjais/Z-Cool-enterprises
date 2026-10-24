'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function LoadingScreen({ onComplete, productName, productCode }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide up and fade out the container
          gsap.to(containerRef.current, {
            yPercent: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power4.inOut',
            onComplete: onComplete
          });
        }
      });

      // 1. Initial blueprint layout reveal
      tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        // 2. Staggered logo and titles fade & lift
        .fromTo(logoRef.current, 
          { scale: 0.8, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)' }
        )
        .fromTo(titleRef.current, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(subtitleRef.current, 
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        )
        // 3. Progress bar animation
        .fromTo(progressRef.current,
          { width: '0%' },
          { width: '100%', duration: 1.2, ease: 'power1.inOut' },
          '-=0.2'
        )
        // Hold for absolute cinematic impact
        .to({}, { duration: 0.3 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[#0F2B46] flex flex-col items-center justify-center text-white"
    >
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] engineering-grid" />
      
      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center select-none">
        {/* Brand Icon */}
        <div ref={logoRef} className="w-16 h-16 mb-6 relative flex items-center justify-center bg-white rounded-2xl shadow-xl p-2.5">
          <img src="/logo-icon.png" alt="Z Cool Enterprises Logo" className="w-full h-full object-contain" />
        </div>

        {/* Dynamic Titles */}
        <h2 ref={titleRef} className="text-xl md:text-2xl font-extrabold tracking-tight font-sans leading-tight">
          {productName}
        </h2>
        <p ref={subtitleRef} className="text-[10px] font-mono tracking-widest text-[#B8955A] mt-2 uppercase">
          CALIBRATING REGISTER MAPS // {productCode}
        </p>

        {/* Premium Progress Meter */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden relative">
          <div 
            ref={progressRef} 
            className="absolute left-0 top-0 h-full bg-[#1D6FA3] shadow-[0_0_10px_#1D6FA3]" 
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
}
