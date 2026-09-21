import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'About Us - 30 Years in Water Treatment',
  description:
    'Nishu Enterprises has manufactured water treatment plants and machinery since 1996: 1200+ plants installed, 3500+ clients, 45 countries. Serving pharma, F&B, manufacturing, power and more.',
  alternates: { canonical: "/about" },
  openGraph: {
    title: 'About Us - 30 Years in Water Treatment',
    description: 'Nishu Enterprises has manufactured water treatment plants and machinery since 1996: 1200+ plants installed, 3500+ clients, 45 countries. Serving pharma, F&B, manufacturing, power and more.',
    url: "/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: 'About', path: "/about" },
        ])}
      />
      {children}
    </>
  );
}
