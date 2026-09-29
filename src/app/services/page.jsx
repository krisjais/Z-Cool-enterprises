import React from 'react';
import { getProducts } from '@/lib/api';
import ServicesInteractiveView from '@/components/services/ServicesInteractiveView';

export const metadata = {
  title: 'Compressor Sourcing & Supply Services | Zcool Enterprises',
  description:
    'Zcool Enterprises provides refurbished and replacement compressor supply, model identification, replacement matching, commercial bulk procurement, and specialized HVAC equipment sourcing in Mumbai, India.',
  keywords: [
    'compressor sourcing Mumbai',
    'refurbished compressor supply',
    'compressor model identification',
    'HVAC replacement compressor matching',
    'bulk compressor procurement',
    'Copeland Daikin compressor supplier',
  ],
  openGraph: {
    title: 'Compressor Sourcing & Supply Services | Zcool Enterprises',
    description:
      'Zcool Enterprises provides refurbished and replacement compressor supply, model identification, replacement matching, and commercial HVAC equipment sourcing.',
    url: 'https://zcool.in/services',
    siteName: 'Zcool Enterprises',
    type: 'website',
  },
};

export default async function ServicesPage() {
  const products = await getProducts();

  return (
    <main>
      <ServicesInteractiveView products={products} />
    </main>
  );
}
