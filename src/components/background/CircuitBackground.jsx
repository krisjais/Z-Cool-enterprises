'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CircuitBackground() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0.05 },
    visible: {
      pathLength: 1,
      opacity: 0.12,
      transition: {
        pathLength: { type: 'spring', duration: 5, bounce: 0, repeat: Infinity, repeatType: 'reverse' },
        opacity: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
      },
    },
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-30 overflow-hidden">
      <svg className="absolute w-full h-full text-[#102A43]" xmlns="http://www.w3.org/2000/svg">
        {/* Fine left-side engineering track */}
        <motion.path
          d="M 80,0 L 80,400 L 180,500 L 180,800 M 180,650 L 300,650"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.0"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <circle cx="300" cy="650" r="2.5" className="fill-[#102A43]/15" />
        <circle cx="80" cy="400" r="2" className="fill-[#102A43]/10" />

        {/* Fine right-side engineering track */}
        <motion.path
          d="M 1200,1000 L 1050,850 L 900,850 L 900,500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.0"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <circle cx="900" cy="500" r="2.5" className="fill-[#102A43]/15" />
      </svg>
    </div>
  );
}
