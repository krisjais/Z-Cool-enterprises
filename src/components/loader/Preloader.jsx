'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const pcbPathRef = useRef(null);
  const logoRef = useRef(null);
  const progressLineRef = useRef(null);
  const progressTextRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide preloader out of view
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.0,
            ease: 'power4.inOut',
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
        },
      });

      // 1. Draw circuit paths
      tl.to(pcbPathRef.current, {
        strokeDashoffset: 0,
        duration: 2.2,
        ease: 'power2.inOut',
      });

      // Update loading percentage text dynamically during trace
      const progressObject = { value: 0 };
      tl.to(progressObject, {
        value: 100,
        duration: 2.0,
        ease: 'power1.inOut',
        onUpdate: () => {
          if (progressTextRef.current) {
            progressTextRef.current.textContent = `${Math.floor(progressObject.value)}%`;
          }
          if (progressLineRef.current) {
            progressLineRef.current.style.width = `${progressObject.value}%`;
          }
        },
      }, '<');

      // 2. Light up PCB paths & fade in central Z logo
      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'drop-shadow(0 0 30px #00F0FF) drop-shadow(0 0 10px #005BFF)',
        duration: 1.0,
        ease: 'back.out(1.7)',
      }, '>-0.4');

      // 3. Glow burst & exit preloader
      tl.to(logoRef.current, {
        scale: 1.1,
        duration: 0.5,
        ease: 'power2.out',
      });

      // Slide out elements before container transition
      tl.to([pcbPathRef.current, progressTextRef.current, progressLineRef.current?.parentNode], {
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
      }, '>-0.2');

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[#050608] z-[99999] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Animated circuit lines */}
        <svg
          className="absolute w-full h-full text-cyan-400/30"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pcbPathRef}
            d="M 20,100 H 60 L 80,80 H 120 L 140,120 H 180 M 100,20 V 60 L 120,80 V 120 L 100,140 V 180"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="400"
            strokeDashoffset="400"
          />
        </svg>

        {/* Dynamic Logo Reveal */}
        <div ref={logoRef} className="z-10 opacity-0 scale-95 transition-all duration-300">
          <svg
            className="w-24 h-24 text-white"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer geometry */}
            <path
              d="M 15,15 H 85 L 65,35 H 15 Z"
              fill="#005BFF"
              className="opacity-90"
            />
            <path
              d="M 15,85 H 85 L 65,65 H 15 Z"
              fill="#005BFF"
              className="opacity-90"
            />
            {/* Middle Z Trace */}
            <path
              d="M 65,35 L 35,65 M 35,45 V 65 H 55"
              stroke="#00F0FF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="35" cy="45" r="5" fill="#00F0FF" />
            <circle cx="55" cy="65" r="5" fill="#00F0FF" />
          </svg>
          <h2 className="text-center font-bold tracking-widest text-xs uppercase mt-4 text-white">
            Z COOL TECH
          </h2>
        </div>
      </div>

      {/* Loading Percentage UI */}
      <div className="absolute bottom-16 w-64 flex flex-col items-center gap-2">
        <span
          ref={progressTextRef}
          className="text-xs font-mono uppercase tracking-widest text-cyan-400 glow-text-cyan"
        >
          0%
        </span>
        <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
          <div ref={progressLineRef} className="h-full bg-cyan-400 w-0" />
        </div>
      </div>
    </div>
  );
}
