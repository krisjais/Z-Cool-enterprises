'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

// Horizontal scroll panel — panels snap horizontally as user scrolls vertically
export default function HorizontalScroll({ children, className = '' }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - container.offsetWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`} style={{ height: '100vh' }}>
      <div ref={trackRef} className="flex h-full items-stretch" style={{ width: 'max-content' }}>
        {children}
      </div>
    </div>
  );
}
