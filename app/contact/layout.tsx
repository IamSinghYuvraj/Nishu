import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/site";

const description = `Get a quote for RO plants, DM plants, water softeners or a mineral water project. Call ${BUSINESS.phone}, WhatsApp, or send your requirement. Vasai East.`;

export const metadata: Metadata = {
  title: { absolute: "Request a Quote: RO, DM & Water Softening Plants | Mumbai" },
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Quote: RO, DM & Water Softening Plants | Mumbai",
    description,
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
