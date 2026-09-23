import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { ProductsGrid } from "@/components/products-grid";

const title = "Water Treatment Plants & Equipment | RO, DM, Softener, UV";
const description =
  "RO plants, DM plants, water softeners, desalination and mineral water plants, ozone/UV, RFC machines, spares and AMC. Manufacturer in Mumbai since 1996.";

export const metadata: Metadata = {
  title: { absolute: title },
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
