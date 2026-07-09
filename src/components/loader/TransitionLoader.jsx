'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function TransitionLoader() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      setIsNavigating(true);
      setPrevPath(pathname);
      
      // Auto disable navigation loader after 600ms (within 500-700ms duration specification)
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath]);

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 bg-[#0F2B46] z-[99999] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Logo 2 appears in center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-md">
              <img src="/logo2.png" alt="Z Cool Tech Loader Logo" className="w-full h-full object-cover" />
            </div>
            
            {/* Thin loading line */}
            <div className="w-40 h-[1.5px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-1/2 bg-[#0EA6A6]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
