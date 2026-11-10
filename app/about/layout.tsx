import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "About Nishu Enterprises | Water Treatment Since 1996" },
  description:
    "Nishu Enterprises has built RO, DM, softening and mineral water plants in Vasai, Mumbai since 1996, for Bisleri, Bailey, Campa and clients in India and abroad.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nishu Enterprises | Water Treatment Since 1996",
    description: "Nishu Enterprises has built RO, DM, softening and mineral water plants in Vasai, Mumbai since 1996, for Bisleri, Bailey, Campa and clients in India and abroad.",
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
