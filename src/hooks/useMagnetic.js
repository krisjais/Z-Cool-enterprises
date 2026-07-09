import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export const useMagnetic = (strength = 0.35) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      // Calculate distance
      const distance = Math.hypot(distanceX, distanceY);
      const activeRange = width * 1.5; // pull active range

      if (distance < activeRange) {
        // pull towards cursor
        gsap.to(element, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        // reset position
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength]);

  return ref;
};
