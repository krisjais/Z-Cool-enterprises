import React from 'react';
import { notFound } from 'next/navigation';
import { getProductById, getProducts } from '@/lib/api';
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

  const codeStr = product.code ? ` (${product.code})` : '';
  const condStr = product.condition ? ` · ${product.condition}` : '';

  return {
    title: `${product.brand} ${product.name}${codeStr} | Zcool Enterprises`,
    description: `${product.brand} ${product.name}${codeStr}${condStr}. ${product.tagline || product.description || 'Refurbished and replacement commercial AC compressor.'} Pan-India B2B freight dispatch.`,
    openGraph: {
      title: `${product.brand} ${product.name}${codeStr}`,
      description: `${product.brand} ${product.name}. Refurbished commercial AC compressor.`,
      images: product.images?.[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const productId = resolvedParams?.id;

  const [data, allProducts] = await Promise.all([
    getProductById(productId),
    getProducts(),
  ]);

  if (!data || !data.product) {
    notFound();
  }

  return (
    <ProductDetailView
      product={data.product}
      allProducts={allProducts || []}
      backendRelated={data.related || []}
    />
  );
}
