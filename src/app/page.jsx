import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import NameplateMatchingSection from '@/components/home/NameplateMatchingSection';
import CompressorCategoriesSection from '@/components/home/CompressorCategoriesSection';
import VerifiedSpotlightSection from '@/components/home/VerifiedSpotlightSection';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import HomeQuoteSection from '@/components/home/HomeQuoteSection';

export const metadata = {
  title: 'Z Cool Enterprises | Refurbished AC Compressors & Industrial HVAC Sourcing Mumbai',
  description: 'Specialized B2B supplier of replacement and refurbished scroll, rotary, and reciprocating AC compressors in Mumbai, India.',
};

export default function HomePage() {
  return (
    <div className="bg-[#FBFBFA] text-[#18181B] min-h-screen">
      {/* 1. HERO: B2B Compressor Sourcing & Replacement Focus */}
      <HeroSection />

      {/* 2. MATCHING: Practical Nameplate & Model Identification Guide */}
      <NameplateMatchingSection />

      {/* 3. TAXONOMY: Core Compressor Engineering Categories */}
      <CompressorCategoriesSection />

      {/* 4. SPOTLIGHT: Verified Representative Sourcing References */}
      <VerifiedSpotlightSection />

      {/* 5. APPLICATIONS: Commercial & Industrial HVAC Facilities Served */}
      <ApplicationsSection />

      {/* 6. QUOTE: Direct On-Page Quote Submission & Mumbai Desk Connect */}
      <HomeQuoteSection />
    </div>
  );
}
