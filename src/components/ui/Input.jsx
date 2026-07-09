'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(({ className, label, error, type = 'text', ...props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full bg-white border border-[#111827]/10 focus:border-[#2563EB] text-sm px-4 py-3 rounded-[16px] text-[#111827] placeholder-gray-400 focus:outline-none transition-all duration-300",
            error ? "border-red-500 focus:border-red-500" : "focus:shadow-[0_4px_12px_rgba(37,99,235,0.05)]",
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs text-red-500 uppercase tracking-wide font-medium mt-0.5">
          {error.message || error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
export default Input;
