/**
 * SEO & Metadata Utility Engine
 * Provides baseline OpenGraph, Twitter Cards, and JSON-LD schema builders.
 */

export const siteConfig = {
  title: 'Z Cool Technology | Premium Industrial Cooling & Thermal Management',
  description: 'Next-generation industrial HVAC, Close Control units, and high-performance electronic panel cooling systems.',
  url: 'https://zcooltech.com',
  ogImage: 'https://zcooltech.com/og-image.jpg',
  twitterHandle: '@zcooltech',
  organization: {
    name: 'Z Cool Technology',
    logo: 'https://zcooltech.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/z-cool-technology',
    ],
  },
};

// Generates dynamic Metadata objects for Next.js App Router
export function generateSEO({ title, description, path, ogImage, noIndex = false } = {}) {
  const metaTitle = title ? `${title} | Z Cool Tech` : siteConfig.title;
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
      telephone: '+91-XXXX-XXXXXX',
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
