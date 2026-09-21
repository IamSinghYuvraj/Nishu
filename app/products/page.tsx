import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { ProductsGrid } from "@/components/products-grid";

const title = "Water Treatment Plants & Machinery";
const description =
  "Browse all Nishu Enterprises products: RO plants, DM plants, water softeners, membrane housings, fabricated SS/MS tanks, turnkey mineral water projects, ozone/UV systems and RFC bottling machines.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: { title, description, url: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <ProductsGrid />
    </>
  );
}
