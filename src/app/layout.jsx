import React from 'react';
import '../styles/globals.css';
import RootProvider from '../providers/RootProvider';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Zcool Enterprises | Refurbished AC Compressors & HVAC Equipment',
  description: 'Specialized B2B supplier of refurbished and replacement scroll, rotary, and reciprocating AC compressors in Mumbai, India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F8F9FA] text-[#0F172A] selection:bg-[#1D6FA3] selection:text-white">
        <RootProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-[64px]">
              {children}
            </main>
            <Footer />
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
