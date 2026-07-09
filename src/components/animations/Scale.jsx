'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Scale({ children, duration = 0.8, delay = 0, initialScale = 0.95, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }} // custom easeOutExpo
      className={className}
    >
      {children}
    </motion.div>
  );
}
