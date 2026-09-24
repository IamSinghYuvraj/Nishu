import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "About Nishu Enterprises | Water Treatment Since 1996" },
  description:
    "Nishu Enterprises has manufactured water treatment plants in Vasai, Mumbai since 1996, with plants installed across 45 countries.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nishu Enterprises | Water Treatment Since 1996",
    description: "Nishu Enterprises has manufactured water treatment plants in Vasai, Mumbai since 1996, with plants installed across 45 countries.",
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
