'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function CustomCursor() {
  const { cursorHover, cursorType } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics settings for custom trail lag
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Inner dot springs (faster tracking)
  const innerXSpring = useSpring(cursorX, { damping: 40, stiffness: 400 });
  const innerYSpring = useSpring(cursorY, { damping: 40, stiffness: 400 });

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    let frameId = requestAnimationFrame(() => {
      setMounted(true);

      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (hasCoarsePointer || hasTouch) {
        setIsTouch(true);
      }
    });

    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasCoarsePointer || hasTouch) {
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!mounted || !isVisible || isTouch) return null;

  return (
    <>
      {/* Outer Spring ring trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#111827]/30 pointer-events-none z-[99999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          borderColor: cursorHover ? '#2563EB' : 'rgba(17, 24, 39, 0.3)',
        }}
        animate={{
          scale: cursorHover ? 1.6 : 1.0,
          backgroundColor: cursorHover ? 'rgba(37, 99, 235, 0.03)' : 'rgba(37, 99, 235, 0)',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />
      {/* Inner instant dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#2563EB] rounded-full pointer-events-none z-[99999]"
        style={{
          x: innerXSpring,
          y: innerYSpring,
          transform: 'translate(12px, 12px)',
        }}
      />
    </>
  );
}
