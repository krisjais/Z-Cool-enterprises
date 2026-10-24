'use client';

import React, { useState } from 'react';
import { FileCheck, MessageSquare, Phone } from 'lucide-react';
import QuoteModal from '@/components/ui/QuoteModal';
import { COMPANY_DETAILS } from '@/constants/company';

export function ContactHeroCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="button"
          onClick={scrollToForm}
          className="px-7 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
        >
          <FileCheck size={16} />
          <span>REQUEST A QUOTE</span>
        </button>

        <a
          href={COMPANY_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
        >
          <MessageSquare size={16} />
          <span>WHATSAPP DESK</span>
        </a>

        <a
          href={COMPANY_DETAILS.primaryTel}
          className="px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
        >
          <Phone size={15} />
          <span>{COMPANY_DETAILS.formattedPrimaryPhone}</span>
        </a>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
