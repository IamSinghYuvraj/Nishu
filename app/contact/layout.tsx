import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Request a Quote: RO, DM & Water Softening Plants | Mumbai" },
  description:
    "Get a quote for RO plants, DM plants, water softeners or a mineral water project. Call +91 98201 42424, WhatsApp, or send your requirement. Vasai East.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Quote: RO, DM & Water Softening Plants | Mumbai",
    description: "Get a quote for RO plants, DM plants, water softeners or a mineral water project. Call +91 98201 42424, WhatsApp, or send your requirement. Vasai East.",
    url: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: 'Contact', path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
