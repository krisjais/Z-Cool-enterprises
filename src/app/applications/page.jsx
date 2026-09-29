import React from 'react';
import { getProducts } from '@/lib/api';
import ApplicationsInteractiveView from '@/components/applications/ApplicationsInteractiveView';

export const metadata = {
  title: 'Compressor Applications & HVAC Use Cases | Zcool Enterprises',
  description:
    'Find the right compressor for your application — commercial air conditioning, VRF/VRV systems, hotels & hospitality, cold storage & refrigeration, industrial process cooling, and emergency breakdown replacements.',
  keywords: [
    'commercial AC compressors',
    'VRF inverter compressors',
    'cold storage refrigeration compressor',
    'hotel HVAC compressor',
    'industrial process cooling compressor',
    'Copeland scroll compressor Mumbai',
    'Daikin VRV compressor',
  ],
  openGraph: {
    title: 'Compressor Applications & HVAC Use Cases | Zcool Enterprises',
    description:
      'Find the right compressor for your application — commercial air conditioning, VRF/VRV systems, hotels & hospitality, cold storage, industrial cooling, and emergency replacements.',
    url: 'https://zcool.in/applications',
    siteName: 'Zcool Enterprises',
    type: 'website',
  },
};

export default async function ApplicationsPage() {
  const products = await getProducts();

  return (
    <main>
      <ApplicationsInteractiveView products={products} />
    </main>
  );
}
