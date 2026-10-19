import React from 'react';
import { notFound } from 'next/navigation';
import { getProductById, getProducts, getCategories } from '@/lib/api';
import ProductDetailView from '@/components/products/ProductDetailView';
import ProductCatalogView from '@/components/catalog/ProductCatalogView';
import Container from '@/components/ui/Container';

export const dynamic = 'force-dynamic';

// Only the 4 approved active engineering categories from CATEGORIES_LIST
const KNOWN_CATEGORY_SLUGS = {
  'scroll-compressor': 'Scroll Compressors',
  'scroll-compressors': 'Scroll Compressors',
  'rotary-compressor': 'Rotary Compressors',
  'rotary-compressors': 'Rotary Compressors',
  'reciprocating-compressor': 'Reciprocating Compressors',
  'reciprocating-compressors': 'Reciprocating Compressors',
  'vrf-inverter-compressors': 'VRF / DC Inverter',
  'vrf-system': 'VRF / DC Inverter',
};

async function matchCategory(identifier) {
  if (!identifier) return null;
  const clean = identifier.toLowerCase().trim();

  if (KNOWN_CATEGORY_SLUGS[clean]) {
    return {
      name: KNOWN_CATEGORY_SLUGS[clean],
      slug: clean,
    };
  }

  // Also check database categories
  try {
    const catData = await getCategories();
    const categories = catData?.categories || [];
    const found = categories.find(
      (c) =>
        c.slug?.toLowerCase() === clean ||
        c.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === clean
    );
    if (found) {
      return {
        name: found.name,
        slug: found.slug,
        description: found.description,
      };
    }
  } catch (_) {}

  return null;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const identifier = resolvedParams?.id;

  // 1. Check if it's a product
  const data = await getProductById(identifier);
  const product = data?.product;

  if (product) {
    const codeStr = (product.modelNumber || product.code) ? ` (${product.modelNumber || product.code})` : '';
    const condStr = product.condition ? ` · ${product.condition}` : '';
    const priceStr = product.price > 0 ? ` · ₹${Number(product.price).toLocaleString('en-IN')}` : '';

    return {
      title: `${product.brand} ${product.name}${codeStr}${priceStr} | Zcool Enterprises`,
      description: `${product.brand} ${product.name}${codeStr}${condStr}. ${product.shortDescription || product.tagline || product.description || 'Refurbished and replacement commercial AC compressor.'} Pan-India B2B freight dispatch.`,
      openGraph: {
        title: `${product.brand} ${product.name}${codeStr}`,
        description: `${product.brand} ${product.name}. Verified commercial AC compressor.`,
        images: product.images?.[0]
          ? [{ url: typeof product.images[0] === 'object' ? product.images[0].url : product.images[0] }]
          : [],
      },
    };
  }

  // 2. Check if it's a category
  const category = await matchCategory(identifier);
  if (category) {
    return {
      title: `${category.name} Inventory & Models | Zcool Enterprises`,
      description: `Browse available refurbished and tested ${category.name} models. Verified bench performance, pressure tests, and express freight delivery across India.`,
    };
  }

  return {
    title: 'Item Not Found | Zcool Enterprises',
    description: 'The requested compressor or category could not be found.',
  };
}

export default async function DynamicProductOrCategoryPage({ params }) {
  const resolvedParams = await params;
  const identifier = resolvedParams?.id;

  // 1. Attempt to fetch as product
  const [data, allProducts] = await Promise.all([
    getProductById(identifier),
    getProducts(),
  ]);

  if (data && data.product) {
    return (
      <ProductDetailView
        product={data.product}
        allProducts={allProducts || []}
        backendRelated={data.related || []}
      />
    );
  }

  // 2. Check if identifier is a category slug
  const category = await matchCategory(identifier);
  if (category) {
    const categoryName = category.name;
    const categoryProducts = (allProducts || []).filter((p) => {
      const pCat = (p.category || '').toLowerCase().replace(/[- ]/g, '');
      const targetCat = categoryName.toLowerCase().replace(/[- ]/g, '');
      return pCat === targetCat || pCat.includes(targetCat) || targetCat.includes(pCat);
    });

    return (
      <div className="bg-[#F8F9FA] min-h-screen text-[#0F172A] py-6 sm:py-8 lg:py-10">
        <Container className="space-y-6 sm:space-y-8">
          {/* Category Hero Section */}
          <section
            aria-label="Category Overview"
            className="bg-[#0A192F] text-white rounded-lg p-5 sm:p-7 lg:p-8 border border-white/10 relative overflow-hidden shadow-sm"
          >
            <div className="absolute inset-0 pointer-events-none opacity-5 engineering-grid-dark" />
            <div className="relative z-10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#0EA6A6] tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA6A6]" />
                  <span>CATEGORY INVENTORY</span>
                </div>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white tracking-wide">
                    {categoryProducts.length} MODEL{categoryProducts.length !== 1 ? 'S' : ''} IN CATEGORY
                  </span>
                </div>
              </div>

              <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight uppercase">
                {categoryName}
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-3xl font-sans leading-relaxed">
                {category.description ||
                  `Inspected, leak-tested, and certified ${categoryName} inventory ready for express Pan-India industrial dispatch.`}
              </p>
            </div>
          </section>

          {/* Catalog Filtered to this category */}
          <ProductCatalogView
            products={allProducts || []}
            initialCategory={categoryName}
            categoryInfo={category}
          />
        </Container>
      </div>
    );
  }

  // 3. Not found
  notFound();
}
