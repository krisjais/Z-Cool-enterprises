'use client';

import React from 'react';
import { cn } from '../../utils/cn';

export default function Card({
  className,
  children,
  variant = 'light',
  tilt = false,
  tiltMaxAngle = 8,
  enableGlare = false,
  ...props
}) {
  const variantClasses = {
    light: 'bg-white border border-slate-200 shadow-xs rounded-xl p-6 sm:p-8 relative overflow-hidden',
    dark: 'bg-slate-900/95 border border-slate-800/90 shadow-2xl rounded-2xl p-6 sm:p-8 relative overflow-hidden text-white',
    tech: 'bg-[#0B1220] border border-cyan-500/20 shadow-2xl rounded-2xl p-6 sm:p-8 relative overflow-hidden text-white',
  };

  return (
    <div
      className={cn(
        variantClasses[variant] || variantClasses.light,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
