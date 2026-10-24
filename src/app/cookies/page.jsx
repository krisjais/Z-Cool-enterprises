import React from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, CheckCircle2, ChevronRight, Info, Lock, Globe } from 'lucide-react';
import Container from '@/components/ui/Container';
import { COMPANY_DETAILS } from '@/constants/company';

export const metadata = {
  title: 'Cookie & Tracking Policy | Z.Cool Enterprises Mumbai',
  description: 'Verified disclosure of cookies, local storage technologies, and external assets used on the Z.Cool Enterprises website.',
};

export default function CookiePolicyPage() {
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
              Cookie Policy
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-4xl border-b border-stone-200 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100/80 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E4B75] mb-3">
            <Cookie size={14} className="text-[#0E4B75]" />
            <span>Storage &amp; Tracking Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Cookie &amp; Tracking Policy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            This Cookie Policy describes the verified technologies and storage mechanisms used by <strong>{COMPANY_DETAILS.name}</strong> on <span className="font-mono text-xs">zcoolenterprises.com</span>.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span>Last Updated: {lastUpdated}</span>
            <span>&bull;</span>
            <span>Policy Status: Active &amp; Verified</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl space-y-10 text-slate-700 leading-relaxed font-sans">

          {/* 1. Summary Box */}
          <section className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-emerald-950 font-display flex items-center gap-2">
              <CheckCircle2 size={20} className="text-emerald-700 shrink-0" />
              <span>Summary: Zero Public Tracking Cookies Active</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              An empirical audit of our codebase and network assets confirms that <strong>we do not use non-essential tracking cookies, advertising cookies, or third-party behavioral analytics on public pages</strong>. Because our website does not execute optional or invasive tracking, we do not present an intrusive pop-up consent banner, ensuring faster browsing, clean navigation, and complete privacy for our B2B visitors.
            </p>
          </section>

          {/* 2. What are Cookies and Web Storage */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              1. What are Cookies and Browser Storage?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Cookies are small text files placed on your computer or mobile device by websites you visit. Browser storage (such as HTML5 <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">localStorage</code>) allows web applications to retain data locally on your device for session persistence and operational state.
            </p>
          </section>

          {/* 3. Verified Technologies Table */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              2. Technologies Actually Used on Our Website
            </h2>
            <p className="text-sm text-slate-600">
              The following table documents every storage and external network technology identified in our web application:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-stone-200 rounded-lg overflow-hidden">
                <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] uppercase tracking-wider text-slate-700">
                  <tr>
                    <th className="p-3">Technology / Key</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Purpose &amp; Scope</th>
                    <th className="p-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-slate-600 text-xs sm:text-sm">
                  <tr>
                    <td className="p-3 font-mono font-bold text-slate-900">Google Fonts CDN</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-mono text-[11px]">External Asset</span></td>
                    <td className="p-3">Loads typography stylesheets (Inter, JetBrains Mono). Your browser connects to Google servers to fetch web font files.</td>
                    <td className="p-3 font-mono">Browser Cache</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-slate-900">z_cool_token (localStorage)</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-mono text-[11px]">Admin Only</span></td>
                    <td className="p-3">Stores encrypted JSON Web Token for authenticated administrators accessing the internal dashboard (<code className="font-mono text-xs">/admin</code>). Never set for public visitors.</td>
                    <td className="p-3 font-mono">Until Logout</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-slate-900">Third-Party Tracking Cookies</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono text-[11px]">None</span></td>
                    <td className="p-3">Google Analytics, Meta Pixel, Hotjar, and marketing retargeting trackers are <strong>NOT installed</strong>.</td>
                    <td className="p-3 font-mono">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. External Services & Direct Links */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              3. External Communication Links
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Our website includes direct action links to external communication platforms:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li><strong>WhatsApp Technical Chat:</strong> Clicking our WhatsApp links opens the official WhatsApp Web or mobile application (<span className="font-mono text-xs">wa.me</span>). WhatsApp operates under Meta&apos;s independent privacy and cookie policies.</li>
              <li><strong>Google Maps Navigation:</strong> Clicking &quot;Get Directions&quot; opens Google Maps in a separate browser tab (<span className="font-mono text-xs">maps.google.com</span>). No map widget is embedded directly on our pages.</li>
              <li><strong>Telephone &amp; Email Links:</strong> Standard <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">tel:</code> and <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">mailto:</code> protocols that trigger your device&apos;s native dialer or email client.</li>
            </ul>
          </section>

          {/* 5. Managing Browser Storage */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              4. Managing Browser Cookies &amp; Storage
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              You can control or clear browser cookies and cached storage through your browser settings (Chrome, Edge, Firefox, Safari) at any time. Clearing your cache will simply cause your browser to reload site assets and fonts fresh upon your next visit without affecting your ability to view our catalogue or submit quote requests.
            </p>
          </section>

          {/* 6. Contact */}
          <section className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E4B75]" />
              5. Questions Regarding This Policy
            </h2>
            <p className="text-sm text-slate-600">
              If you have any questions about this Cookie Policy, contact us at:
            </p>
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <div><strong>{COMPANY_DETAILS.name}</strong></div>
              <div>Contact Person: <strong>{COMPANY_DETAILS.owner}</strong> ({COMPANY_DETAILS.role})</div>
              <div>Address: {COMPANY_DETAILS.address.full}</div>
              <div>Telephone: {COMPANY_DETAILS.formattedPrimaryPhone}</div>
              <div>Email: <a href={COMPANY_DETAILS.mailto} className="text-[#0E4B75] hover:underline">{COMPANY_DETAILS.email}</a></div>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
