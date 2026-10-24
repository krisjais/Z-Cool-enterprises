import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Camera, CheckCircle2, ArrowRight, ArrowUpRight, HelpCircle } from 'lucide-react';
import { ARTICLES, ARTICLE_CATEGORIES } from '@/data/articles';
import {
  BlogHeroCTA,
  FeaturedArticleAction,
  BlogArticlesView,
  NameplateUploadCTA,
  BlogBottomCTA,
} from '@/components/blog/BlogActions';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Compressor Knowledge Center | HVAC Guides & Identification | Zcool Enterprises',
  description:
    'Practical technical guides for HVAC contractors, service technicians, and facility engineers on reading compressor nameplates, scroll vs rotary selection, voltage/phase in India, and replacement matching.',
};

export default function BlogPage() {
  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const regularArticles = ARTICLES;

  // Schema.org structured data for Technical Knowledge Base
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Compressor Technical Knowledge Center',
    description:
      'Practical guides for identifying, selecting and sourcing AC and refrigeration compressors.',
    publisher: {
      '@type': 'Organization',
      name: 'Z.Cool Enterprises',
      url: 'https://zcoolenterprises.com',
    },
    hasPart: ARTICLES.map((art) => ({
      '@type': 'TechArticle',
      headline: art.title,
      description: art.summary,
      articleSection: art.category,
    })),
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Editorial Hero ── */}
      <section className="bg-[#0A192F] text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-8 space-y-4">
              <ScrollReveal delay={0} direction="up" distance={10}>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <BookOpen size={14} />
                  <span>HVAC TECHNICAL RESOURCE &amp; SOURCING GUIDES</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80} direction="up" distance={14}>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  THE COMPRESSOR KNOWLEDGE CENTER
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160} direction="up" distance={14}>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-sans leading-relaxed">
                  Practical guides for identifying, selecting, and sourcing AC and refrigeration
                  compressors. Written for commercial HVAC contractors, service engineers, and
                  procurement teams.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={220} direction="up" distance={14}>
                <BlogHeroCTA />
              </ScrollReveal>
            </div>

            {/* Hero Thumbnail / Visual */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <ScrollReveal delay={200} direction="scale" distance={16}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs max-w-xs space-y-3">
                  <div className="relative h-44 w-full bg-slate-900/40 rounded-xl overflow-hidden flex items-center justify-center p-2">
                    <Image
                      src="/ac_compressor.png"
                      alt="Commercial AC Compressor"
                      width={200}
                      height={160}
                      className="object-contain max-h-40 drop-shadow-md hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#0EA6A6] uppercase tracking-wider block font-bold">
                      VERIFIED TECHNICAL ARTICLES
                    </span>
                    <span className="text-xs text-slate-300 font-sans block">
                      Practical compressor replacement &amp; identification guides for India.
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Technical Article ── */}
      {featuredArticle && (
        <section className="py-10 sm:py-12 border-b border-slate-200 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
            <ScrollReveal direction="up" distance={16}>
              <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-10 space-y-6 shadow-lg relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <span className="font-mono text-xs font-bold text-[#0EA6A6] uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    FEATURED TECHNICAL GUIDE
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    CATEGORY: {featuredArticle.category.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3 max-w-3xl">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <FeaturedArticleAction article={featuredArticle} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Articles Grid & Filters ── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
          <ScrollReveal direction="up" distance={14}>
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#1D6FA3] uppercase tracking-wider block">
                TECHNICAL GUIDES &amp; MANUALS
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Browse Compressor Resources
              </h2>
            </div>
          </ScrollReveal>

          <BlogArticlesView articles={regularArticles} categories={ARTICLE_CATEGORIES} />
        </div>
      </section>

      {/* ── Nameplate Photo Identification Callout ── */}
      <section className="py-12 sm:py-16 bg-[#0A192F] text-white border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <ScrollReveal direction="up" distance={12}>
                <span className="font-mono text-xs font-bold text-[#0EA6A6] uppercase tracking-wider block">
                  TECHNICAL DESK ASSISTANCE
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  NEED HELP IDENTIFYING A COMPRESSOR FROM A NAMEPLATE?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-xl">
                  Photograph the compressor sticker or rating label clearly and upload it to our Mumbai desk. We verify model codes, voltage, and replacement stock.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <ScrollReveal delay={100} direction="up" distance={14}>
                <NameplateUploadCTA />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Catalog CTA ── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <ScrollReveal direction="up" distance={12}>
            <BlogBottomCTA />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
