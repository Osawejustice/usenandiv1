import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductTemplate } from "@/components/product-pages/product-template";
import { getProduct, products } from "@/content/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.oneLiner,
    alternates: { canonical: `https://nandi.to${product.href}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductTemplate product={product} />;
}
