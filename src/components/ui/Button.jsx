'use client';

import React, { forwardRef, useRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn'; // We'll create this utility in the next steps
import { useMagnetic } from '../../hooks/useMagnetic';
import { useTheme } from '../../context/ThemeContext';

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-[16px] focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-[#111827] text-white hover:bg-black border border-black/5 hover:-translate-y-[3px] shadow-[0_4px_10px_rgba(17,24,39,0.04)] hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)]",
        secondary: "bg-white text-[#111827] border border-black/[0.08] hover:bg-black/[0.02] hover:border-black/15 shadow-[0_2px_8px_rgba(17,24,39,0.02)]",
        outline: "bg-transparent text-[#111827] border border-black/[0.08] hover:bg-black/[0.02]",
        glow: "bg-[#2563EB] text-white hover:bg-blue-600 border border-[#2563EB] shadow-sm hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.15)]",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Button = forwardRef(({ className, variant, size, magnetic = false, children, ...props }, ref) => {
  const { setCursorHover } = useTheme();
  
  // Conditionally apply magnetic hook
  const localRef = useRef(null);
  const magneticRef = useMagnetic(0.25);
  const buttonRef = magnetic ? magneticRef : (ref || localRef);

  return (
    <button
      ref={buttonRef}
      className={cn(buttonVariants({ variant, size, className }))}
      onMouseEnter={() => setCursorHover(true)}
      onMouseLeave={() => setCursorHover(false)}
      {...props}
    >
      {/* Sliding glow reflection line inside the button */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </button>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
export default Button;
