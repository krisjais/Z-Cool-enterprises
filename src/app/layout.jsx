import React from 'react';
import '../styles/globals.css';
import RootProvider from '../providers/RootProvider';
import CustomCursor from '../components/cursor/CustomCursor';
import GridBackground from '../components/background/GridBackground';
import CircuitBackground from '../components/background/CircuitBackground';
import ScrollProgress from '../components/ui/ScrollProgress';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { generateSEO } from '../utils/seo';

export const metadata = generateSEO();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="selection:bg-blue-100 selection:text-blue-900">
        <RootProvider>
          {/* Static grain noise overlay */}
          <div className="noise-overlay" />

          {/* WebGL & Vector Backgrounds */}
          <GridBackground />
          <CircuitBackground />

          {/* Custom cursor trails */}
          <CustomCursor />

          {/* Global progress meter */}
          <ScrollProgress />

          <div className="flex flex-col min-h-screen">
            {/* Header / Navigation bar */}
            <Header />

            {/* Main view container */}
            <main className="flex-grow">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
