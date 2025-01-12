import ProductDetails from '@/view/Product/product-details';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <ProductDetails id={slug} />;
}
