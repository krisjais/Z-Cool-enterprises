import React from 'react';
import '../styles/globals.css';
import RootProvider from '../providers/RootProvider';
import AppShell from '../components/layout/AppShell';
import { getOrganizationSchema, getSiteUrl } from '../utils/seo';

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Z Cool Enterprises | Refurbished AC Compressors & HVAC Equipment Mumbai',
    template: '%s | Z Cool Enterprises',
  },
  description: 'Specialized B2B supplier of refurbished and replacement scroll, rotary, reciprocating, and VRF AC compressors in Mumbai, Maharashtra, India.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Z Cool Enterprises',
    title: 'Z Cool Enterprises | Refurbished AC Compressors & HVAC Equipment Mumbai',
    description: 'Specialized B2B supplier of refurbished and replacement scroll, rotary, reciprocating, and VRF AC compressors in Mumbai, Maharashtra, India.',
    images: [
      {
        url: '/ac_compressor.png',
        width: 1200,
        height: 630,
        alt: 'Z Cool Enterprises - Commercial AC Compressors Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z Cool Enterprises | Refurbished AC Compressors & HVAC Equipment Mumbai',
    description: 'Specialized B2B supplier of refurbished and replacement scroll, rotary, reciprocating, and VRF AC compressors in Mumbai, Maharashtra, India.',
    images: ['/ac_compressor.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  const orgSchema = getOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-[#FBFBFA] text-[#18181B] selection:bg-[#0E4B75] selection:text-white antialiased">
        <RootProvider>
          <AppShell>{children}</AppShell>
        </RootProvider>
      </body>
    </html>
  );
}
