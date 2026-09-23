import React from 'react';
import HomeScrollProgress from '@/components/home/HomeScrollProgress';
import HeroIndustrial from '@/components/home/HeroIndustrial';
import ProductDiscoveryRange from '@/components/home/ProductDiscoveryRange';
import FeaturedInventoryShowcase from '@/components/home/FeaturedInventoryShowcase';
import RefurbishmentProcessSticky from '@/components/home/RefurbishmentProcessSticky';
import WhyRefurbishedEditorial from '@/components/home/WhyRefurbishedEditorial';
import RealInventoryGallery from '@/components/home/RealInventoryGallery';
import CaseStudiesEditorial from '@/components/home/CaseStudiesEditorial';
import ModelIdentificationCTA from '@/components/home/ModelIdentificationCTA';
import FinalIndustrialCTA from '@/components/home/FinalIndustrialCTA';

export const metadata = {
  title: 'Zcool Enterprises | Refurbished AC Compressors & HVAC Sourcing',
  description: 'Specialized B2B supplier of refurbished and replacement scroll, rotary, and reciprocating AC compressors in Mumbai, India.',
};

export default function HomePage() {
  return (
    <div className="bg-[#F8F9FA] text-[#0F172A] min-h-screen relative overflow-x-clip">
      {/* ── Fixed Desktop Scroll Progress Rail ── */}
      <HomeScrollProgress />

      {/* ── 1. DISCOVER: Hero Physical Product Showcase ── */}
      <HeroIndustrial />

      {/* ── 2. EXPLORE: Interactive Product Range Discovery ── */}
      <ProductDiscoveryRange />

      {/* ── 3. INVENTORY: Featured Large Equipment Showcase ── */}
      <FeaturedInventoryShowcase />

      {/* ── 4. UNDERSTAND: 6-Stage Refurbishment Process Sticky Story ── */}
      <RefurbishmentProcessSticky />

      {/* ── 5. ADVANTAGE: Why Buy Refurbished Editorial Interaction ── */}
      <WhyRefurbishedEditorial />

      {/* ── 6. REAL ASSETS: Authentic Warehouse Inventory Gallery ── */}
      <RealInventoryGallery />

      {/* ── 7. VERIFY: Verified Compressor Supply Scenarios ── */}
      <CaseStudiesEditorial />

      {/* ── 8. IDENTIFY: Nameplate Photo Matching Desk ── */}
      <ModelIdentificationCTA />

      {/* ── 9. REQUEST: Final Dark Industrial Quote CTA ── */}
      <FinalIndustrialCTA />
    </div>
  );
}
