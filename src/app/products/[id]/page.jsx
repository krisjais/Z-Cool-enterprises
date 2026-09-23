import React from 'react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/api';
import ProductDetailView from '@/components/products/ProductDetailView';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const productId = resolvedParams?.id;

  const data = await getProductById(productId);
  const product = data?.product;

  if (!product) {
    return {
      title: 'Compressor Not Found | Zcool Enterprises',
      description: 'The requested AC compressor model could not be found in our inventory.',
    };
  }

  return {
    title: `${product.brand} ${product.name} – ${product.code} | Zcool Enterprises`,
    description: `${product.brand} ${product.name} (${product.code}). ${product.tagline || product.description}. Refurbished and replacement AC compressor inspected and prepared for commercial HVAC supply.`,
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const productId = resolvedParams?.id;

  const data = await getProductById(productId);
  if (!data || !data.product) {
    notFound();
  }

  return <ProductDetailView product={data.product} relatedProducts={data.related || []} />;
}
