'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Reveal({ children, duration = 1.2, delay = 0, direction = 'up', className }) {
  const getClipPath = (type) => {
    switch (type) {
      case 'up':
        return {
          initial: { clipPath: 'inset(100% 0% 0% 0%)' },
          animate: { clipPath: 'inset(0% 0% 0% 0%)' },
        };
      case 'right':
        return {
          initial: { clipPath: 'inset(0% 100% 0% 0%)' },
          animate: { clipPath: 'inset(0% 0% 0% 0%)' },
        };
      case 'left':
        return {
          initial: { clipPath: 'inset(0% 0% 0% 100%)' },
          animate: { clipPath: 'inset(0% 0% 0% 0%)' },
        };
      case 'down':
        return {
          initial: { clipPath: 'inset(0% 0% 100% 0%)' },
          animate: { clipPath: 'inset(0% 0% 0% 0%)' },
        };
      default:
        return {
          initial: { clipPath: 'inset(100% 0% 0% 0%)' },
          animate: { clipPath: 'inset(0% 0% 0% 0%)' },
        };
    }
  };

  const clip = getClipPath(direction);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={clip.initial}
        whileInView={clip.animate}
        viewport={{ once: true, margin: '-5%' }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
