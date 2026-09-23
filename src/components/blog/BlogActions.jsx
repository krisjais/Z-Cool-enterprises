'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCheck,
  Camera,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import QuoteModal from '@/components/ui/QuoteModal';
import PhotoUpload from '@/components/ui/PhotoUpload';

/* ── Hero action buttons ── */
export function BlogHeroCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Link
          href="/products"
          className="px-7 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
        >
          <FileCheck size={16} />
          <span>BROWSE COMPRESSORS</span>
        </Link>

        <button
          type="button"
          onClick={() => setIsQuoteOpen(true)}
          className="px-7 py-3.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Camera size={16} />
          <span>SEND NAMEPLATE PHOTO</span>
        </button>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}

/* ── Featured article action button ── */
export function FeaturedArticleAction({ article }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {article.catalogLink && (
          <Link
            href={article.catalogLink.href}
            className="px-5 py-2.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow-xs"
          >
            <span>{article.catalogLink.text}</span>
            <ArrowRight size={14} />
          </Link>
        )}

        <button
          type="button"
          onClick={() => setIsQuoteOpen(true)}
          className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors cursor-pointer"
        >
          <Camera size={14} className="text-[#1D6FA3]" />
          <span>{article.actionLink?.text || 'Upload Nameplate Photo'}</span>
        </button>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={{ name: article.title, brand: 'Zcool Technical Desk' }}
      />
    </>
  );
}

/* ── Interactive Category Filtering & Article Grid ── */
export function BlogArticlesView({ articles, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeModalArticle, setActiveModalArticle] = useState(null);

  // Filter out the featured article if viewing ALL, or show filtered
  const filteredArticles = articles.filter((art) => {
    if (art.featured && selectedCategory === 'ALL') return false; // featured shown separately
    if (selectedCategory === 'ALL') return true;
    return art.category === selectedCategory;
  });

  return (
    <div className="space-y-8">
      {/* Category filter tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
          <Filter size={14} className="text-[#1D6FA3]" />
          <span>TOPIC FILTER:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0A192F] text-white font-bold shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-xs hover:border-slate-300 transition-colors"
          >
            <div className="space-y-3.5">
              {/* Top metadata */}
              <div className="flex items-center justify-between font-mono text-[11px] border-b border-slate-100 pb-3">
                <span className="font-bold text-[#1D6FA3] uppercase tracking-wider">
                  {article.category}
                </span>
                {article.readTime && (
                  <span className="text-slate-400 font-medium">{article.readTime}</span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#0A192F] leading-snug">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                {article.summary}
              </p>

              {/* Technical takeaways bullet points */}
              {article.keyPoints && article.keyPoints.length > 0 && (
                <ul className="space-y-1.5 pt-1 font-sans text-xs text-slate-700 bg-slate-50 p-3.5 rounded-lg border border-slate-200/70">
                  {article.keyPoints.slice(0, 3).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#0EA6A6] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Practical Takeaway */}
              {article.takeaway && (
                <div className="text-[11px] font-sans text-slate-600 bg-blue-50/50 border border-blue-100 rounded-md p-2.5">
                  <strong className="font-mono text-[10px] text-[#1D6FA3] uppercase block mb-0.5">
                    PRACTICAL TAKEAWAY
                  </strong>
                  <span>{article.takeaway}</span>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              {article.catalogLink && (
                <Link
                  href={article.catalogLink.href}
                  className="font-bold text-[#1D6FA3] hover:text-[#165680] inline-flex items-center gap-1 hover:underline"
                >
                  <span>{article.catalogLink.text}</span>
                  <ArrowRight size={12} />
                </Link>
              )}

              {article.actionLink && (
                <button
                  type="button"
                  onClick={() => setActiveModalArticle(article)}
                  className="font-semibold text-slate-600 hover:text-[#0A192F] inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Camera size={13} className="text-slate-400" />
                  <span>{article.actionLink.text}</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      <QuoteModal
        isOpen={!!activeModalArticle}
        onClose={() => setActiveModalArticle(null)}
        initialProduct={
          activeModalArticle
            ? { name: activeModalArticle.title, brand: 'Technical Knowledge Desk' }
            : null
        }
      />
    </div>
  );
}

/* ── Nameplate Upload CTA block (Section 11) ── */
export function NameplateUploadCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider">
          <Camera size={16} />
          <span>CAN&apos;T IDENTIFY YOUR COMPRESSOR?</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0A192F] leading-snug">
              Send us a clear photograph of your compressor nameplate sticker.
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              If the model code is scratched or partially worn, our technical desk can cross-reference
              the serial number, casing markings, terminal configuration, and mounting bolt pitch to
              identify the exact replacement.
            </p>
            <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600" />
                Zero obligation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600" />
                Direct Mumbai stock check
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 bg-slate-50 p-4 sm:p-5 rounded-lg border border-slate-200">
            <PhotoUpload
              label="Attach Nameplate Photo"
              onPhotoSelect={(file) => setPhoto(file)}
            />
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="w-full px-5 py-3 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
            >
              <FileCheck size={15} />
              <span>UPLOAD NAMEPLATE PHOTO</span>
            </button>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}

/* ── Buyer Procurement CTA block (Section 12) ── */
export function BlogBottomCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0A192F] text-white rounded-2xl border border-white/10 p-8 sm:p-12 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1 rounded">
            <span>B2B COMPRESSOR SOURCING</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            LOOKING FOR A SPECIFIC COMPRESSOR?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Search our verified inventory across scroll, rotary, and reciprocating compressors, or
            send your exact model and electrical requirements for a fast quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/products"
              className="px-7 py-3.5 rounded-lg bg-[#1D6FA3] hover:bg-[#165680] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <FileCheck size={16} />
              <span>BROWSE COMPRESSORS</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="px-7 py-3.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Camera size={16} />
              <span>GET A QUOTE</span>
            </button>

            <a
              href="https://wa.me/919920691707?text=Hello%2C%20I%20have%20a%20question%20regarding%20a%20compressor%20model."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageSquare size={16} />
              <span>WHATSAPP DESK</span>
            </a>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
