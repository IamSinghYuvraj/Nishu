import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { productSchema, breadcrumbSchema } from "@/lib/schema";

const product = PRODUCTS.find((p) => p.slug === "dosing-ozonation-uv")!;

export const metadata: Metadata = {
  title: product.title,
  description: product.description,
  alternates: { canonical: `/products/${product.slug}` },
  openGraph: {
    title: product.title,
    description: product.description,
    url: `/products/${product.slug}`,
    images: [{ url: product.image, alt: product.name }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      {children}
    </>
  );
}
