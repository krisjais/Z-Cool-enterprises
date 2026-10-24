import React from 'react';
import { getProducts } from '@/lib/api';
import ProductCatalogView from '@/components/catalog/ProductCatalogView';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'HVAC Compressor Catalogue | Z Cool Enterprises Mumbai',
  description: 'Browse commercial replacement scroll, rotary, reciprocating, and VRF compressors. Sourced and displacement-matched by Mumbai technical desk.',
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const initialCategory = resolvedParams?.category || resolvedParams?.type || 'All';
  const initialPage    = parseInt(resolvedParams?.page, 10) || 1;
  const initialSort    = resolvedParams?.sort || 'default';

  const products = await getProducts();

  return (
    <div className="bg-[#FBFBFA] min-h-screen text-slate-900 pt-6 pb-14 sm:pt-8 sm:pb-16">
      <Container>
        <ProductCatalogView
          products={products}
          initialCategory={initialCategory}
          initialPage={initialPage}
          initialSort={initialSort}
        />
      </Container>
    </div>
  );
}
