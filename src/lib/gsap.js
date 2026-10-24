import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins only in client-side environment
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set default settings
  gsap.config({
    nullTargetWarn: false,
  });

  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
}

export { gsap, ScrollTrigger };
