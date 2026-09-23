import React from 'react';
import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#1D6FA3] hover:bg-[#165680] text-white shadow-xs focus:ring-[#1D6FA3]',
    secondary: 'bg-white hover:bg-slate-100 text-[#0A192F] border border-slate-300 focus:ring-slate-400',
    dark: 'bg-[#0A192F] hover:bg-slate-800 text-white focus:ring-[#0A192F]',
    emerald: 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-600',
    outline: 'bg-transparent border border-slate-300 hover:border-slate-800 text-slate-800 focus:ring-slate-400'
  };

  const sizes = {
    sm: 'text-[11px] px-3 py-1.5 gap-1.5',
    md: 'text-xs px-4 py-2.5 gap-2',
    lg: 'text-xs px-6 py-3.5 gap-2.5'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
