'use client';

import React from 'react';
import InteractiveCompanyProfile from '@/components/about/InteractiveCompanyProfile';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FA] border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Single Authoritative Two-Stage Interactive Company Profile */}
        <InteractiveCompanyProfile defaultExpanded={false} />
      </div>
    </section>
  );
}
