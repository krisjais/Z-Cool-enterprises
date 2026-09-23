import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Box, Phone } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="min-h-[70vh] bg-[#F8F9FA] flex items-center justify-center p-6 text-[#0F172A]">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-xl p-8 text-center space-y-6 shadow-sm">
        
        <div className="w-14 h-14 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center mx-auto text-amber-600">
          <AlertTriangle size={28} />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
            MODEL NOT FOUND IN CATALOG
          </span>
          <h1 className="font-display font-extrabold text-2xl text-[#0A192F]">
            Compressor Model Unavailable
          </h1>
          <p className="text-slate-600 text-xs font-sans leading-relaxed">
            The requested compressor model identifier may be mistyped, out of stock, or not listed in the public online index.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-xs text-left space-y-2">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <Box size={14} className="text-[#1D6FA3]" />
            <span>Sourcing Support Available</span>
          </div>
          <p className="text-slate-600 text-[11px] font-sans leading-snug">
            We source non-standard, custom, and legacy compressor models upon request. Contact our sales desk with your serial number or nameplate picture.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/products"
            className="w-full py-3 px-4 rounded-[#1D6FA3] bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-lg shadow-xs"
          >
            <ArrowLeft size={16} />
            <span>BACK TO COMPRESSORS CATALOG</span>
          </Link>

          <a
            href="https://wa.me/919920691707?text=Hello%2C%20I%20am%20looking%20for%20a%20compressor%20model%20not%20found%20in%20the%20catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded border border-slate-300 hover:border-slate-800 text-slate-700 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <Phone size={14} />
            <span>INQUIRE VIA WHATSAPP DESK</span>
          </a>
        </div>

      </div>
    </div>
  );
}
