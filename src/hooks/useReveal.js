import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export const useReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      animation = 'fade-up', // fade, fade-up, fade-down, scale, blur-in
      duration = 1.2,
      delay = 0,
      threshold = 0.15,
      stagger = 0,
      ease = 'power3.out',
    } = options;

    let initialStyles = {};
    let animateStyles = {
      opacity: 1,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: element,
        start: `top +=${100 - threshold * 100}%`,
        toggleActions: 'play none none none',
      },
    };

    switch (animation) {
      case 'fade':
        initialStyles = { opacity: 0 };
        break;
      case 'fade-up':
        initialStyles = { opacity: 0, y: 50 };
        animateStyles = { ...animateStyles, y: 0 };
        break;
      case 'fade-down':
        initialStyles = { opacity: 0, y: -50 };
        animateStyles = { ...animateStyles, y: 0 };
        break;
      case 'scale':
        initialStyles = { opacity: 0, scale: 0.9 };
        animateStyles = { ...animateStyles, scale: 1 };
        break;
      case 'blur-in':
        initialStyles = { opacity: 0, filter: 'blur(10px)' };
        animateStyles = { ...animateStyles, filter: 'blur(0px)' };
        break;
      default:
        initialStyles = { opacity: 0 };
    }

    // Set initial state
    gsap.set(element, initialStyles);

    // Create trigger
    const animationInstance = gsap.to(element, animateStyles);

    return () => {
      if (animationInstance.scrollTrigger) {
        animationInstance.scrollTrigger.kill();
      }
      animationInstance.kill();
    };
  }, [options]);

  return elementRef;
};
