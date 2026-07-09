'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Fade({ children, duration = 0.8, delay = 0, yOffset = 15, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
