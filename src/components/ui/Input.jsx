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
            "w-full bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 text-sm px-4 py-3 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-colors",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : "",
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
