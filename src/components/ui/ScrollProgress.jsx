'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

export default function ScrollProgress() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    // Create trigger that binds scaleX of progress bar to scroll position
    const trigger = gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      if (trigger.scrollTrigger) {
        trigger.scrollTrigger.kill();
      }
      trigger.kill();
    };
  }, []);

  return (
    <div className="hidden md:block fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[9999] pointer-events-none origin-left">
      <div
        ref={progressBarRef}
        className="w-full h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-300 scale-x-0 origin-left"
        style={{
          boxShadow: '0 0 10px #00F0FF, 0 0 5px #005BFF',
        }}
      />
    </div>
  );
}
