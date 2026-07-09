'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

// Clip-path image mask reveal — image slides in from behind a mask
export default function ImageReveal({ src, alt, className = '', direction = 'up' }) {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const clipStart = {
      up:    'inset(100% 0% 0% 0%)',
      down:  'inset(0% 0% 100% 0%)',
      left:  'inset(0% 100% 0% 0%)',
      right: 'inset(0% 0% 0% 100%)',
    }[direction] || 'inset(100% 0% 0% 0%)';

    gsap.set(wrap, { clipPath: clipStart });
    gsap.set(img, { scale: 1.12 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.to(wrap, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4,
        ease: 'expo.inOut',
      }).to(img, {
        scale: 1,
        duration: 1.4,
        ease: 'expo.inOut',
      }, '<');
    }, wrap);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`} style={{ willChange: 'clip-path' }}>
      <img ref={imgRef} src={src} alt={alt} className="w-full h-full object-cover" style={{ willChange: 'transform' }} />
    </div>
  );
}
