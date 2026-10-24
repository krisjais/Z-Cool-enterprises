import React from 'react';
import '../styles/globals.css';
import RootProvider from '../providers/RootProvider';
import AppShell from '../components/layout/AppShell';
import { getOrganizationSchema } from '../utils/seo';

export const metadata = {
  title: 'Z.Cool Enterprises | Refurbished AC Compressors & HVAC Equipment',
  description: 'Specialized B2B supplier of refurbished and replacement scroll, rotary, and reciprocating AC compressors in Mumbai, India.',
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
