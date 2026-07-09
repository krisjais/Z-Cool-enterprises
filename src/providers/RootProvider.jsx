'use client';

import React, { useEffect, createContext, useContext } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from '../lib/gsap';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';

const ScrollContext = createContext(null);

export const useScroll = () => useContext(ScrollContext);

export default function RootProvider({ children }) {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Instantiate Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom premium cubic easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    // Update ScrollTrigger on scroll
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Synchronise Lenis with GSAP ticker loop
    const updateGsapTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateGsapTicker);
    };
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <ScrollContext.Provider value={{}}>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#FCFBF8',
                color: '#111827',
                border: '1px solid rgba(17, 24, 39, 0.08)',
                borderRadius: '16px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                boxShadow: '0 8px 30px rgba(17, 24, 39, 0.06)',
              },
            }}
          />
          {children}
        </ScrollContext.Provider>
      </ThemeProvider>
    </AuthProvider>
  );
}
