import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Contact Us - Request a Quotation',
  description:
    'Get a quote for RO plants, DM plants, water softeners or a complete mineral water project. Call +91 98201 42424, WhatsApp, or send your requirement. Vasai East, Maharashtra.',
  alternates: { canonical: "/contact" },
  openGraph: {
    title: 'Contact Us - Request a Quotation',
    description: 'Get a quote for RO plants, DM plants, water softeners or a complete mineral water project. Call +91 98201 42424, WhatsApp, or send your requirement. Vasai East, Maharashtra.',
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
