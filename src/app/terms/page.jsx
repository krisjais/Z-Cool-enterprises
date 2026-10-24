import React from 'react';
import Link from 'next/link';
import { FileText, ShieldCheck, CheckCircle2, AlertTriangle, ChevronRight, Store, Truck, Wrench } from 'lucide-react';
import Container from '@/components/ui/Container';
import { COMPANY_DETAILS } from '@/constants/company';

export const metadata = {
  title: 'Terms and Conditions | Z.Cool Enterprises Mumbai',
  description: 'Terms and conditions governing quotation requests, technical compatibility verification, product availability, and commercial compressor sourcing with Z.Cool Enterprises.',
};

export default function TermsPage() {
  const lastUpdated = 'October 24, 2026';

  return (
    <div className="bg-[#FBFBFA] min-h-screen text-slate-900 pt-8 pb-16 sm:pt-12 sm:pb-24">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <li>
              <Link href="/" className="hover:text-[#0E4B75] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={12} className="text-slate-400" />
            </li>
            <li className="text-slate-900 font-bold" aria-current="page">
              Terms &amp; Conditions
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-4xl border-b border-stone-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100/80 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E4B75] mb-3">
            <FileText size={14} className="text-[#0E4B75]" />
            <span>Commercial Terms &amp; Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            These Terms &amp; Conditions govern your use of the <strong>{COMPANY_DETAILS.name}</strong> website (<span className="font-mono text-xs">zcoolenterprises.com</span>), quotation submissions, and technical sourcing interactions.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span>Last Updated: {lastUpdated}</span>
            <span>&bull;</span>
            <span>Jurisdiction: Mumbai, Maharashtra, India</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl space-y-10 text-slate-700 leading-relaxed font-sans">

          {/* 1. Introduction & Operating Scope */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              1. Commercial Context &amp; Quotation Nature
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {COMPANY_DETAILS.name} operates as a specialised B2B trader and retailer in refurbished, replacement, and tested commercial and industrial AC compressors.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              The listings, specifications, photographs, and catalogue entries on this website constitute an <strong>invitation to treat and request quotations</strong>. Display of an item or model on the website does not constitute a unilateral binding offer to sell. Every order and sale is subject to physical inventory check, technical specification review, and formal quotation issuance by our Mumbai technical desk.
            </p>
          </section>

          {/* 2. Quotation, Pricing & Availability Process */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              2. Quotation Process &amp; Stock Availability
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <p>
                <strong>Quotation Requests:</strong> When you submit a model enquiry through our online forms, phone, or WhatsApp, our technical team evaluates:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Whether the requested model is currently in stock at our Dharavi workshop or can be procured through our Mumbai supplier network.</li>
                <li>The physical condition of the unit (refurbished, surplus tested, or core unit).</li>
                <li>Applicable GST (typically 18% for commercial machinery) and commercial packaging charges.</li>
                <li>Surface transport freight options across Mumbai MMR or interstate road dispatch.</li>
              </ul>
              <p>
                <strong>Price Validity:</strong> Commercial quotations issued by our desk remain valid for the timeframe specified on the quotation (typically 3 to 7 working days) due to market fluctuations in core compressor availability, transport tariffs, and scrap commodity values.
              </p>
              <p>
                <strong>Stock Availability:</strong> Reconditioned compressors are subject to prior sale. Availability status indicated as &quot;In Stock&quot; or &quot;Sourcing Reference&quot; reflects current sourcing feasibility rather than a guaranteed perpetual reserve.
              </p>
            </div>
          </section>

          {/* 3. Technical Verification & Buyer Responsibility */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              3. Technical Verification &amp; Fitment Responsibility
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              HVAC compressors are critical electro-mechanical components engineered for precise operating envelopes. To ensure safe operation and prevent equipment failure:
            </p>
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm space-y-2 text-slate-700">
              <strong className="text-slate-900 block font-bold">Buyer Verification Checklist:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Electrical Specifications:</strong> Confirm supply voltage (e.g., 380V–415V 3-Phase vs. 220V–240V 1-Phase, 50Hz frequency).</li>
                <li><strong>Refrigerant &amp; Oil Chemistry:</strong> Confirm system refrigerant (e.g., R22 with mineral/alkylbenzene oil vs. R410A/R407C/R134a with POE or PVE oil). Intermixing incompatible oils and refrigerants causes immediate winding breakdown.</li>
                <li><strong>Displacement &amp; Capacity:</strong> Confirm cooling capacity in TR or displacement in m³/h or cc/rev.</li>
                <li><strong>Mounting Dimensions:</strong> Verify base mounting hole spacing and suction/discharge braze or rotolock port sizes.</li>
              </ul>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Our technical desk provides displacement matching and crossover assistance in good faith based on the data and nameplate images you supply. However, final confirmation that the selected replacement fits the recipient chiller, packaged unit, or cold room remains the responsibility of the installing HVAC technician or contracting firm.
            </p>
          </section>

          {/* 4. Brand Names, Trademarks & Nominative Use */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              4. OEM Trademarks &amp; Non-Affiliation Notice
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Brand names, manufacturer logos, model codes, and trademarks displayed on this website—including but not limited to <strong>Copeland, Emerson, Daikin, Danfoss, LG, Mitsubishi, Highly, GMCC, Carrier, Hitachi, Panasonic, and Sanyo</strong>—are the exclusive property of their respective Original Equipment Manufacturers.
            </p>
            <div className="p-4 rounded-lg bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-800 space-y-1.5">
              <strong className="block font-bold text-[#0E4B75]">Nominative Fair Use Statement:</strong>
              <span>
                All OEM brand references and model numbers are used strictly for <strong>nominative identification and replacement compatibility matching</strong> under Section 30 of the Indian Trade Marks Act, 1999 and Section 52 of the Indian Copyright Act, 1957.
              </span>
              <span className="block pt-1 font-semibold text-slate-900">
                {COMPANY_DETAILS.name} is an independent equipment trading and sourcing business and is not an authorized distributor, agent, franchise, or factory representative of these manufacturers.
              </span>
            </div>
          </section>

          {/* 5. Inspection, Dispatch & Transport */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              5. Packaging, Testing &amp; Road Transport
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Prior to dispatch from our Dharavi workshop, compressors undergo visual inspection, electrical insulation checking (Megger testing), and nitrogen holding tests. Units are crated or palletized for commercial road transit.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li><strong>Local MMR Delivery:</strong> Local transport or customer pickup from our Dharavi bus depot workshop can be arranged upon commercial clearance.</li>
              <li><strong>Interstate Transport:</strong> Dispatched via verified commercial transport logistics operators under buyer consignment terms. Transit insurance, where requested, is arranged at buyer expense.</li>
              <li><strong>Receipt Inspection:</strong> The buyer or receiving technician must inspect the crating and compressor shell for physical impact damage prior to signing transport delivery receipts.</li>
            </ul>
          </section>

          {/* 6. Limitation of Liability */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              6. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              To the extent permitted under applicable Indian law:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>{COMPANY_DETAILS.name} shall not be liable for consequential, indirect, or incidental damages arising from equipment downtime, refrigerated product spoilage, lost business profits, or labor costs incurred during installation or replacement.</li>
              <li>We do not warrant compressors damaged by improper installation, phase failure, inadequate electrical protection, non-condensable moisture, or wrong refrigerant/oil charging.</li>
              <li>Nothing in these terms seeks to exclude or limit statutory consumer rights or statutory obligations that cannot be lawfully excluded under applicable Indian commercial statutes.</li>
            </ul>
          </section>

          {/* 7. Governing Law & Contact */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              7. Applicable Law &amp; Inquiries
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              These terms are governed by the laws of India. For commercial questions, quotation verifications, or clarifications regarding these terms, contact our Mumbai sourcing desk:
            </p>
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm space-y-1 text-slate-700">
              <div><strong>{COMPANY_DETAILS.name}</strong></div>
              <div>Contact Person: <strong>{COMPANY_DETAILS.owner}</strong> ({COMPANY_DETAILS.role})</div>
              <div>Address: {COMPANY_DETAILS.address.full}</div>
              <div>Telephone: {COMPANY_DETAILS.formattedPrimaryPhone} | Alt: {COMPANY_DETAILS.formattedSecondaryPhone}</div>
              <div>Email: <a href={COMPANY_DETAILS.mailto} className="text-[#0E4B75] hover:underline">{COMPANY_DETAILS.email}</a></div>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
