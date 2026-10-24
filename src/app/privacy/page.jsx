import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, AlertCircle, FileText, Lock, Clock, Database, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { COMPANY_DETAILS } from '@/constants/company';

export const metadata = {
  title: 'Privacy Policy | Z.Cool Enterprises Mumbai',
  description: 'Privacy transparency document detailing what information Z.Cool Enterprises collects, how it is used for compressor sourcing enquiries, and contact details for privacy inquiries.',
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-4xl border-b border-stone-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100/80 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E4B75] mb-3">
            <ShieldCheck size={14} className="text-[#0E4B75]" />
            <span>Privacy Transparency &amp; Data Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            This Privacy Policy explains how <strong>{COMPANY_DETAILS.name}</strong> collects, uses, stores, and handles personal and commercial information submitted through our website (<span className="font-mono text-xs">zcoolenterprises.com</span>) and related quotation channels.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span>Last Updated: {lastUpdated}</span>
            <span>&bull;</span>
            <span>Entity: Sole Proprietorship / Trader-Retailer</span>
            <span>&bull;</span>
            <span>Location: Dharavi, Mumbai, Maharashtra</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl space-y-10 text-slate-700 leading-relaxed font-sans">

          {/* 1. Operating Context & Website Nature */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              1. Nature of Our Business &amp; Website Purpose
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {COMPANY_DETAILS.name} is a Mumbai-based HVAC compressor trading and sourcing business operated by {COMPANY_DETAILS.owner}. Our website operates primarily as a <strong>B2B technical catalogue and quotation-request portal</strong>. We do not operate an automated retail shopping cart or process consumer credit card payments online. All sales, specifications, and availability confirmations are completed via direct commercial communication between our Mumbai technical desk and the prospective purchaser.
            </p>
          </section>

          {/* 2. What Information We Collect */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              2. Information Collected by Our Enquiry Forms
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We collect only the minimum information necessary to identify replacement compressors, verify technical specifications, and respond to commercial sourcing enquiries. When you submit a quote request via our homepage, catalogue modals, or contact forms, we collect:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block font-bold mb-1">Full Name (Mandatory)</strong>
                <span className="text-slate-600">To address your commercial enquiry and maintain accurate customer records.</span>
              </div>
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block font-bold mb-1">Phone / WhatsApp Number (Mandatory)</strong>
                <span className="text-slate-600">Primary communication channel used by our Mumbai technical desk to provide pricing, displacement matching, and availability updates.</span>
              </div>
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block font-bold mb-1">Email Address (Optional)</strong>
                <span className="text-slate-600">Used to transmit written quotation sheets, tax invoices, and equipment specification sheets if requested.</span>
              </div>
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block font-bold mb-1">Company / Firm Name (Optional)</strong>
                <span className="text-slate-600">To generate B2B GST quotations for commercial HVAC contractors, facilities, or refrigeration plants.</span>
              </div>
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block font-bold mb-1">Compressor Model &amp; Technical Notes</strong>
                <span className="text-slate-600">Equipment model codes (e.g. ZR72KC, JT160), operating voltage (415V/230V), refrigerant type (R22, R410A), and application details.</span>
              </div>
              <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block font-bold mb-1">Nameplate Photo Attachment (Optional)</strong>
                <span className="text-slate-600">Photograph of your existing compressor label (JPG, PNG, or WebP up to 5MB) to assist in accurate visual identification.</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 font-mono">
              <strong>Technical Audit Metadata:</strong> Our web server automatically logs the submitting IP address and submission timestamp to prevent automated spam and record affirmative consent.
            </div>
          </section>

          {/* 3. Purpose & Legal Basis of Processing */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              3. Purpose of Processing &amp; Consent
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              The information you submit is processed exclusively for the purpose of fulfilling your direct request:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>Reviewing model availability in current warehouse stock or partner sourcing networks.</li>
              <li>Calculating commercial quotations, packaging, and surface transport freight to your delivery location.</li>
              <li>Verifying technical compatibility (refrigerant, oil type, displacement, electrical rating).</li>
              <li>Responding via telephone, WhatsApp, or email with requested commercial information.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 pt-2">
              We do <strong>not</strong> subscribe your contact information to automated marketing newsletters, sell your data to third-party telemarketers, or use your information for targeted digital advertising.
            </p>
          </section>

          {/* 4. Data Storage, Security & Processors */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              4. Data Storage &amp; Infrastructure Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Enquiry submissions are received and handled through the following verified infrastructure:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-slate-900 block font-bold">Primary Database Storage</strong>
                <span className="text-slate-600">
                  Enquiry records are stored in a secured MongoDB database instance accessed only through authorized backend credentials over encrypted connections.
                </span>
              </div>
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-slate-900 block font-bold">Media Upload Storage</strong>
                <span className="text-slate-600">
                  Compressor nameplate photographs are stored either on our secure web server disk storage or processed via Cloudinary media infrastructure (where configured). Uploaded files are strictly restricted to image formats (JPG, PNG, WebP) and capped at 5MB.
                </span>
              </div>
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-slate-900 block font-bold">Third-Party Analytics &amp; Advertising Trackers</strong>
                <span className="text-slate-600">
                  Our public website does <strong>not</strong> load Google Analytics, Meta Pixel, session recording software, or advertising retargeting cookies.
                </span>
              </div>
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-slate-900 block font-bold">External Typography (Google Fonts)</strong>
                <span className="text-slate-600">
                  Typography stylesheets (Inter and JetBrains Mono) are loaded from Google Fonts (<span className="font-mono text-xs">fonts.googleapis.com</span>). Your browser connects to Google&apos;s content delivery network to render these fonts, which transmits standard HTTP header information (such as IP address and browser User-Agent).
                </span>
              </div>
            </div>
          </section>

          {/* 5. Data Retention & Business Practices */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              5. Data Retention &amp; Deletion
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Enquiry submissions and customer specifications are retained in our internal records to facilitate order fulfillment, ongoing quotation correspondence, and technical warranty support.
            </p>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
              <strong className="block font-bold mb-1 flex items-center gap-1.5">
                <Clock size={15} className="text-amber-700" />
                <span>Operational Notice on Retention Schedules</span>
              </strong>
              <span>
                Specific automated data-retention schedules, archiving intervals, and database purge routines are currently under formal administrative review with the business owner in accordance with emerging Digital Personal Data Protection Act rules. Customers may request the deletion or correction of their enquiry data at any time by contacting us directly.
              </span>
            </div>
          </section>

          {/* 6. Your Rights & How to Contact Us */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              6. Your Rights &amp; Privacy Contact Information
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Under applicable Indian law, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>Request confirmation of whether we hold your personal enquiry information.</li>
              <li>Request correction or updating of inaccurate contact details.</li>
              <li>Request deletion or withdrawal of consent for future quotation correspondence.</li>
            </ul>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mt-4 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                Official Business &amp; Privacy Contact Desk
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div>
                  <span className="text-slate-500 font-mono block text-xs">Entity / Trade Name:</span>
                  <strong>{COMPANY_DETAILS.name}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block text-xs">Proprietor / Contact Lead:</span>
                  <strong>{COMPANY_DETAILS.owner}</strong> ({COMPANY_DETAILS.role})
                </div>
                <div>
                  <span className="text-slate-500 font-mono block text-xs">Official Email:</span>
                  <a href={COMPANY_DETAILS.mailto} className="text-[#0E4B75] font-semibold hover:underline">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block text-xs">Primary Telephone:</span>
                  <a href={COMPANY_DETAILS.primaryTel} className="text-[#0E4B75] font-semibold hover:underline">
                    {COMPANY_DETAILS.formattedPrimaryPhone}
                  </a>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs text-slate-600">
                <span className="text-slate-500 font-mono block">Approved Commercial Address:</span>
                <span>{COMPANY_DETAILS.address.full}</span>
              </div>
            </div>
          </section>

          {/* 7. Changes to this Policy */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-2">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              7. Updates to this Policy
            </h2>
            <p className="text-sm text-slate-600">
              We may update this Privacy Policy from time to time to reflect modifications in our operational workflow, catalogue features, or applicable legal requirements. The latest version will always be published on this page with the revision date noted at the top.
            </p>
          </section>

        </div>
      </Container>
    </div>
  );
}
