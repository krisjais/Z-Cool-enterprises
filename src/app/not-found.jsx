import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, MessageSquare, Phone, FileCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '@/constants/company';

export const metadata = {
  title: 'Page Not Found | Z.Cool Enterprises',
  description: 'The requested page or compressor could not be found.',
};

export default function NotFound() {
  return (
    <div className="bg-[#F8F9FA] min-h-[70vh] flex flex-col justify-center text-[#0F172A] py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] bg-blue-50 border border-blue-200 px-3 py-1 rounded">
          <span>404 // RESOURCE NOT FOUND</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A192F] tracking-tight">
          Page or Compressor Not Located
        </h1>

        <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
          The page or compressor model you requested could not be found. If you are searching for a
          specific model code or replacement unit, browse our verified catalog or send our Mumbai desk
          your equipment specifications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href="/products"
            className="px-6 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md transition-colors"
          >
            <Search size={15} />
            <span>VIEW COMPRESSOR INVENTORY</span>
          </Link>

          <Link
            href="/"
            className="px-6 py-3.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={15} />
            <span>RETURN TO HOME</span>
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            <FileCheck size={15} />
            <span>CONTACT SOURCING DESK</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
          <span>Direct Inquiries: </span>
          <a href={COMPANY_DETAILS.primaryTel} className="font-bold text-[#0A192F] hover:underline">
            {COMPANY_DETAILS.formattedPrimaryPhone}
          </a>
          <span className="mx-2">•</span>
          <a
            href={COMPANY_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:underline font-semibold"
          >
            WhatsApp Support
          </a>
        </div>
      </div>
    </div>
  );
}
