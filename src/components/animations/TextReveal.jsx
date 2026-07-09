'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

// SplitText-style word reveal using clip-path masks
export default function TextReveal({ children, className = '', delay = 0, stagger = 0.08 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split into words
    const text = el.innerText;
    const words = text.split(' ');
    el.innerHTML = words
      .map(w => `<span class="word-wrap" style="overflow:hidden;display:inline-block;vertical-align:bottom;"><span class="word" style="display:inline-block;transform:translateY(110%);">${w}</span></span>`)
      .join(' ');

    const wordEls = el.querySelectorAll('.word');

    const ctx = gsap.context(() => {
      gsap.to(wordEls, {
        y: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger,
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
