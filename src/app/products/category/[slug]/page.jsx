import { redirect } from 'next/navigation';
import { CATEGORIES_LIST } from '@/data/products';

export const revalidate = 86400; // 24-hour cache for category redirects

const KNOWN_SLUG_MAP = {
  'scroll-compressor': 'Scroll Compressors',
  'scroll-compressors': 'Scroll Compressors',
  'rotary-compressor': 'Rotary Compressors',
  'rotary-compressors': 'Rotary Compressors',
  'reciprocating-compressor': 'Reciprocating Compressors',
  'reciprocating-compressors': 'Reciprocating Compressors',
  'vrf-inverter-compressors': 'VRF / DC Inverter',
  'vrf-system': 'VRF / DC Inverter',
};

export function generateStaticParams() {
  const slugs = new Set([
    ...Object.keys(KNOWN_SLUG_MAP),
    ...CATEGORIES_LIST.map((c) => c.slug || c.id).filter(Boolean),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function CategoryRedirectPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.toLowerCase()?.trim();
  if (slug && KNOWN_SLUG_MAP[slug]) {
    redirect(`/products?category=${encodeURIComponent(KNOWN_SLUG_MAP[slug])}`);
  }
  const match = CATEGORIES_LIST.find((c) => c.slug === slug || c.id === slug);
  if (match) {
    redirect(`/products?category=${encodeURIComponent(match.name)}`);
  }
  redirect('/products');
}
