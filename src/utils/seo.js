/**
 * SEO & Metadata Utility Engine
 * Provides baseline OpenGraph, Twitter Cards, and JSON-LD schema builders.
 */

export const siteConfig = {
  title: 'Zcool Enterprises | Industrial AC Compressors & Cooling Solutions',
  description: 'Supplying high-efficiency AC Compressors, air conditioning systems, and industrial cooling solutions in Mumbai.',
  url: 'https://zcoolenterprises.com',
  ogImage: '/ac_compressor.png',
  twitterHandle: '@zcoolenterprises',
  organization: {
    name: 'Zcool Enterprises',
    logo: '/logo1.png',
    sameAs: [],
  },
};

// Generates dynamic Metadata objects for Next.js App Router
export function generateSEO({ title, description, path, ogImage, noIndex = false } = {}) {
  const metaTitle = title ? `${title} | Zcool Enterprises` : siteConfig.title;
  const metaDesc = description || siteConfig.description;
  const metaUrl = `${siteConfig.url}${path || ''}`;
  const metaImg = ogImage || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDesc,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: metaUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: metaUrl,
      siteName: siteConfig.organization.name,
      images: [
        {
          url: metaImg,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDesc,
      creator: siteConfig.twitterHandle,
      images: [metaImg],
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ],
      other: [
        { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
  };
}

// Generates JSON-LD Organization Schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.organization.name,
    url: siteConfig.url,
    logo: siteConfig.organization.logo,
    sameAs: siteConfig.organization.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-99206-91707',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  };
}

// Generates JSON-LD Product Schema
export function getProductSchema(product) {
  if (!product) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images || [],
    description: product.description,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
  };
}
