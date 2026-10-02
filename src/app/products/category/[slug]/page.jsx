import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function CategoryRedirectPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (slug) {
    redirect(`/products/${slug}`);
  }
  redirect('/products');
}
