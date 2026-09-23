'use client';

import React, { useState } from 'react';
import { Camera, MessageSquare, Phone } from 'lucide-react';
import QuoteModal from '../ui/QuoteModal';

export default function HomeQuoteTrigger({
  variant = 'hero',
  buttonText = 'Request Quote',
  className = '',
}) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      {variant === 'hero' && (
        <button
          onClick={() => setIsQuoteOpen(true)}
          className={`px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-[#0A192F] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${className}`}
        >
          <Camera size={16} className="text-[#1D6FA3]" />
          <span>{buttonText}</span>
        </button>
      )}

      {variant === 'banner' && (
        <button
          onClick={() => setIsQuoteOpen(true)}
          className={`px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-[#0A192F] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer ${className}`}
        >
          <Camera size={18} className="text-[#1D6FA3]" />
          <span>{buttonText}</span>
        </button>
      )}

      {variant === 'primary' && (
        <button
          onClick={() => setIsQuoteOpen(true)}
          className={`px-6 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs cursor-pointer transition-colors ${className}`}
        >
          <Camera size={16} />
          <span>{buttonText}</span>
        </button>
      )}

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
