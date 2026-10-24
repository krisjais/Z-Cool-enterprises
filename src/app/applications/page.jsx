import React from 'react';
import { getProducts } from '@/lib/api';
import ApplicationsInteractiveView from '@/components/applications/ApplicationsInteractiveView';

import { generateSEO } from '@/utils/seo';

export const metadata = generateSEO({
  title: 'Compressor Applications & HVAC Use Cases',
  description:
    'Find the right compressor for your application — commercial air conditioning, VRF/VRV systems, hotels & hospitality, cold storage & refrigeration, industrial process cooling, and emergency breakdown replacements.',
  path: '/applications',
});

export default async function ApplicationsPage() {
  const products = await getProducts();

  return (
    <main>
      <ApplicationsInteractiveView products={products} />
    </main>
  );
}
