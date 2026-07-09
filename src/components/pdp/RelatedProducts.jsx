'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS_CATALOG } from '@/data/products';

export default function RelatedProducts({ productId, currentAccentColor }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(slider.children, 
        { opacity: 0, x: 60, scale: 0.95 },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          stagger: 0.12, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: slider,
            start: 'top 85%'
          }
        }
      );
    }, slider);

    return () => ctx.revert();
  }, []);

  const C = {
    navy: '#0F2B46',
    borderLight: 'rgba(15,43,70,0.06)'
  };

  const related = PRODUCTS_CATALOG.filter(item => item.id !== productId);

  return (
    <div className="w-full text-left">
      <div 
        ref={sliderRef} 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {related.map(item => (
          <div
            key={item.id}
            className="group bg-white rounded-[28px] border overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            style={{ borderColor: C.borderLight }}
          >
            <div>
              {/* Image Frame */}
              <div className="p-6 bg-slate-50/50 flex items-center justify-center aspect-[4/3] border-b relative overflow-hidden" style={{ borderColor: C.borderLight }}>
                {/* Micro engineering grid overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none engineering-grid" />
                <img 
                  src={item.images[0]} 
                  alt={item.name} 
                  className="max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-500 pointer-events-none" 
                />
              </div>

              {/* Card Meta */}
              <div className="p-8">
                <span className="font-mono text-[9px] tracking-widest uppercase font-bold block mb-1 text-[#1D6FA3]">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-[#0F2B46] mb-3 leading-snug">{item.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-2">{item.description}</p>
              </div>
            </div>

            {/* Bottom Actions Link */}
            <div className="p-8 pt-0">
              <Link
                href={`/products/${item.id}`}
                className="w-full py-3.5 bg-slate-100 hover:bg-[#1D6FA3] hover:text-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Explore Product</span>
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
