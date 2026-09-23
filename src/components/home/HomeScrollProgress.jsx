'use client';

import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'HERO', num: '01' },
  { id: 'discovery', label: 'RANGE', num: '02' },
  { id: 'inventory', label: 'INVENTORY', num: '03' },
  { id: 'process', label: 'PROCESS', num: '04' },
  { id: 'why-zcool', label: 'ADVANTAGE', num: '05' },
  { id: 'gallery', label: 'GALLERY', num: '06' },
  { id: 'case-studies', label: 'CASES', num: '07' },
  { id: 'quote', label: 'QUOTE', num: '08' },
];

export default function HomeScrollProgress() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Section navigation rail"
      className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-auto select-none opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <div className="flex flex-col items-end gap-2.5">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group flex items-center justify-end gap-2 py-0.5 cursor-pointer text-right"
              aria-label={`Jump to section ${sec.label}`}
            >
              <span
                className={`font-mono text-[9px] uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? 'text-[#0EA6A6] font-bold opacity-100'
                    : 'text-slate-400 opacity-0 group-hover:opacity-100'
                }`}
              >
                {sec.num} {sec.label}
              </span>
              <span
                className={`transition-all duration-200 rounded-full ${
                  isActive
                    ? 'w-4 h-[2px] bg-[#0EA6A6]'
                    : 'w-2 h-[1px] bg-slate-400 group-hover:w-3 group-hover:bg-slate-200'
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
