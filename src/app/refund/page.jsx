import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Clock, ShieldAlert, Phone, Mail, ChevronRight, HelpCircle, FileText } from 'lucide-react';
import Container from '@/components/ui/Container';
import { COMPANY_DETAILS } from '@/constants/company';

export const metadata = {
  title: 'Draft Refund & Return Policy (Under Review) | Z.Cool Enterprises Mumbai',
  description: 'Draft commercial return and testing terms for Z.Cool Enterprises, pending formal business owner review and final approval.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RefundPolicyDraftPage() {
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
              Refund &amp; Return Policy (Draft)
            </li>
          </ol>
        </nav>

        {/* PROMINENT DRAFT STATUS BANNER */}
        <div className="max-w-4xl p-5 sm:p-6 rounded-xl bg-amber-50 border-2 border-amber-300 text-amber-900 mb-8 space-y-2.5">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-amber-800">
            <AlertTriangle size={18} className="text-amber-600" />
            <span>ADMINISTRATIVE DRAFT — PENDING FORMAL BUSINESS OWNER APPROVAL</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Important Notice:</strong> This document represents a proposed operational draft for commercial returns and workshop testing terms. The specific timelines, testing windows, freight allocations, and exclusion criteria outlined below are <strong>UNCONFIRMED</strong> and require formal review and explicit written authorization by the business owner ({COMPANY_DETAILS.owner}) before activation.
          </p>
          <div className="pt-1 text-[11px] font-mono text-amber-800">
            Status: Unpublished Draft &bull; Excluded from Public Site Navigation &bull; Noindex / Nofollow Active
          </div>
        </div>

        {/* Page Header */}
        <div className="max-w-4xl border-b border-stone-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            B2B Equipment Return &amp; Testing Policy (Draft)
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Proposed framework governing pre-dispatch quality checks, receipt inspection, dead-on-arrival (DOA) reporting, and commercial return assistance for HVAC compressors.
          </p>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl space-y-10 text-slate-700 leading-relaxed font-sans">

          {/* 1. Commercial Reality of Refurbished Compressors */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              1. B2B Commercial Nature of Industrial Compressors
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Unlike consumer retail goods, commercial and industrial HVAC compressors are precision mechanical machines installed into high-pressure sealed refrigeration circuits. Compressor longevity and mechanical integrity depend strictly on correct electrical wiring, certified phase protection, vacuum drawdown, and contaminant-free oil/refrigerant charging.
            </p>
            <p className="text-sm text-slate-600">
              Consequently, consumer-style &quot;open-box return&quot; policies cannot apply to industrial compressor trading once units are brazed into piping systems or powered on unverified electrical panels.
            </p>
          </section>

          {/* 2. Proposed Workshop Verification (Pre-Dispatch) */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              2. Pre-Dispatch Testing Standards (Proposed)
            </h2>
            <p className="text-sm text-slate-600">
              Prior to packaging and transport clearance from our Dharavi workshop, all reconditioned units undergo standard verification:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li><strong>Nitrogen Pressure Holding:</strong> Factory shell holding test to verify zero weld or housing leaks.</li>
              <li><strong>Megger Insulation Test:</strong> Electrical motor winding insulation resistance verification against ground.</li>
              <li><strong>Terminal Pin Inspection:</strong> Visual inspection of terminal block seals and glass-to-metal fusion points.</li>
              <li><strong>Protective Packaging:</strong> Rubber shipping plugs and crated/palletized transport protection.</li>
            </ul>
          </section>

          {/* 3. Draft Terms Requiring Business Owner Decision */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              3. Proposed Terms Under Management Review
            </h2>
            <p className="text-sm text-slate-600">
              The following terms have been drafted for operational discussion and must be formally decided by {COMPANY_DETAILS.owner}:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between pb-1">
                  <strong className="text-slate-900 font-bold">Proposed DOA Notification Window</strong>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] uppercase font-bold">Unconfirmed</span>
                </div>
                <p className="text-slate-600">
                  <em>Proposed:</em> Buyer must inspect the delivery and notify our desk of transit damage or pre-installation defects within <strong>48 hours</strong> of receipt from the transport carrier.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between pb-1">
                  <strong className="text-slate-900 font-bold">Proposed Installation &amp; Brazing Exclusion</strong>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] uppercase font-bold">Unconfirmed</span>
                </div>
                <p className="text-slate-600">
                  <em>Proposed:</em> Once a compressor has been brazed, soldered, connected into refrigeration lines, or operated under refrigerant charge, returns are not accepted due to the irreversible risk of system acid contamination, moisture ingress, or phase failure.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between pb-1">
                  <strong className="text-slate-900 font-bold">Proposed Return Freight Allocation</strong>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] uppercase font-bold">Unconfirmed</span>
                </div>
                <p className="text-slate-600">
                  <em>Proposed:</em> In the event of an approved return or replacement, return road transport freight to the Dharavi workshop is borne by the purchaser unless an incorrect model was dispatched by our desk.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Contact for Return Queries */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              4. Immediate Assistance for In-Transit or Equipment Issues
            </h2>
            <p className="text-sm text-slate-600">
              If you have received a shipment with transit damage, incorrect model labels, or questions regarding pre-installation Megger testing, contact our Mumbai sourcing desk immediately:
            </p>
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <div><strong>{COMPANY_DETAILS.name}</strong></div>
              <div>Contact Lead: <strong>{COMPANY_DETAILS.owner}</strong> ({COMPANY_DETAILS.role})</div>
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
