import React from 'react';
import { getProducts } from '@/lib/api';
import RefurbishmentProcessView from '@/components/refurbishment/RefurbishmentProcessView';

import { generateSEO } from '@/utils/seo';

export const metadata = generateSEO({
  title: 'Compressor Refurbishment Process',
  description:
    'Explore the 6-stage compressor evaluation and refurbishment workflow at Z Cool Enterprises Mumbai. From core sourcing and inspection to testing, condition grading, and B2B freight dispatch.',
  path: '/refurbishment',
});

export const revalidate = 86400; // 24-hour ISR for static refurbishment workflow overview

export default async function RefurbishmentPage() {
  const products = await getProducts();
  const featured = Array.isArray(products) ? products.slice(0, 3) : [];

  return <RefurbishmentProcessView featuredProducts={featured} />;
}
