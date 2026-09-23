'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const logoContainerRef = useRef(null);
  const sheenRef = useRef(null);
  const brandRef = useRef(null);
  const lineRef = useRef(null);
  const progressTextRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }
      });

      // Fast, sleek single-pass loading sequence (~0.6s total)
      tl.fromTo(logoContainerRef.current,
        { opacity: 0, filter: 'blur(8px)', scale: 0.95 },
        { opacity: 1, filter: 'blur(0px)', scale: 1.0, duration: 0.3, ease: 'power2.out' }
      );

      tl.fromTo(sheenRef.current,
        { left: '-150%' },
        { left: '150%', duration: 0.4, ease: 'power1.inOut' },
        '<0.1'
      );

      tl.fromTo(brandRef.current,
        { opacity: 0, y: 4 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
        '<0.1'
      );

      tl.fromTo(lineRef.current,
        { width: '0%' },
        { width: '100%', duration: 0.3, ease: 'power2.inOut' },
        '<0.1'
      );

      const progressObject = { value: 0 };
      tl.to(progressObject, {
        value: 100,
        duration: 0.4,
        ease: 'power2.out',
        onUpdate: () => {
          if (progressTextRef.current) {
            progressTextRef.current.textContent = `${Math.floor(progressObject.value)}%`;
          }
          if (progressLineRef.current) {
            progressLineRef.current.style.width = `${progressObject.value}%`;
          }
        }
      }, '<');

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[#0F2B46] z-[99999] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center relative max-w-sm w-full px-8">
        
        {/* Logo 2 Wrapper */}
        <div ref={logoContainerRef} className="relative w-44 h-44 flex items-center justify-center overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg">
          <img src="/logo2.png" alt="Z Cool Enterprises Logo" className="w-full h-full object-cover" />
          
          {/* Metallic light sheen sweep layer */}
          <div
            ref={sheenRef}
            className="absolute top-0 bottom-0 w-[50%] skew-x-[-25deg] pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)',
            }}
          />
        </div>

        {/* Brand Name Typography */}
        <div ref={brandRef} className="mt-6 text-center opacity-0">
          <h2 className="text-white text-xs font-mono font-medium tracking-[0.25em] uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            ZCOOL ENTERPRISES
          </h2>
        </div>

        {/* Blueprint line */}
        <div className="w-48 h-[1px] bg-white/10 mt-3 relative overflow-hidden">
          <div ref={lineRef} className="absolute left-0 top-0 bottom-0 bg-[#0EA6A6] w-0" />
        </div>

        {/* Loading Percentage & Bar */}
        <div className="w-48 mt-4 flex flex-col items-center gap-1.5">
          <span ref={progressTextRef} className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            0%
          </span>
          <div className="w-full h-[1.5px] bg-white/5 rounded-full overflow-hidden">
            <div ref={progressLineRef} className="h-full bg-[#1D6FA3] w-0" />
          </div>
        </div>

      </div>
    </div>
  );
}
