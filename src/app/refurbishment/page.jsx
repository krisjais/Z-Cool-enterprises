import React from 'react';
import { getProducts } from '@/lib/api';
import RefurbishmentProcessView from '@/components/refurbishment/RefurbishmentProcessView';

export const metadata = {
  title: 'Compressor Refurbishment Process | Zcool Enterprises',
  description:
    'Explore the 6-stage compressor evaluation and refurbishment workflow at Zcool Enterprises Mumbai. From core sourcing and inspection to testing, condition grading, and B2B freight dispatch.',
  openGraph: {
    title: 'Compressor Refurbishment Process | Zcool Enterprises',
    description:
      'From used compressor to ready-to-supply equipment. 6-stage industrial evaluation and preparation workflow.',
    images: [{ url: '/ac_compressor.png' }],
  },
};

export const dynamic = 'force-dynamic';

export default async function RefurbishmentPage() {
  const products = await getProducts();
  const featured = Array.isArray(products) ? products.slice(0, 3) : [];

  return <RefurbishmentProcessView featuredProducts={featured} />;
}
