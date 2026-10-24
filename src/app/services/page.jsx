import React from 'react';
import { getProducts } from '@/lib/api';
import ServicesInteractiveView from '@/components/services/ServicesInteractiveView';

import { generateSEO } from '@/utils/seo';

export const metadata = generateSEO({
  title: 'Compressor Sourcing & Supply Services',
  description:
    'Z Cool Enterprises provides refurbished and replacement compressor supply, model identification, replacement matching, commercial bulk procurement, and specialized HVAC equipment sourcing in Mumbai, India.',
  path: '/services',
});

export default async function ServicesPage() {
  const products = await getProducts();

  return (
    <main>
      <ServicesInteractiveView products={products} />
    </main>
  );
}
