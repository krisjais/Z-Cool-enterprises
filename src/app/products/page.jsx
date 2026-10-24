import React, { Suspense } from 'react';
import { getProducts } from '@/lib/api';
import ProductCatalogView from '@/components/catalog/ProductCatalogView';
import CatalogLoading from './loading';
import Container from '@/components/ui/Container';

import { generateSEO } from '@/utils/seo';

export const metadata = generateSEO({
  title: 'Commercial HVAC Compressor Catalogue',
  description: 'Browse commercial replacement scroll, rotary, reciprocating, and VRF compressors. Sourced and displacement-matched by Mumbai technical desk.',
  path: '/products',
});

export const revalidate = 3600; // 1-hour ISR cache for catalogue index

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-[#FBFBFA] min-h-screen text-slate-900 pt-6 pb-14 sm:pt-8 sm:pb-16">
      <Container>
        <Suspense fallback={<CatalogLoading />}>
          <ProductCatalogView products={products} />
        </Suspense>
      </Container>
    </div>
  );
}
