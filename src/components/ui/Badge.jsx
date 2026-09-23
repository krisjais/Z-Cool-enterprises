import React from 'react';

export default function Badge({ children, variant = 'default', className = '' }) {
  const variantStyles = {
    default: 'bg-[#0A192F] text-white',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    accent: 'bg-[#1D6FA3]/10 text-[#1D6FA3] border border-[#1D6FA3]/20',
    teal: 'bg-[#0EA6A6]/10 text-[#0EA6A6] border border-[#0EA6A6]/20'
  };

  return (
    <span className={`badge-industrial ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {children}
    </span>
  );
}
