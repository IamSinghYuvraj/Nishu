import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import ContactUs from "@/components/contactus";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = {
  title: { absolute: "Water Treatment Plants by Industry | Pharma, Hotels, Labs" },
  description:
    "Water treatment plants for pharma, food and beverage, housing societies, hotels, hospitals, labs, chemical, textile and more. 1200+ plants since 1996.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Water Treatment Plants by Industry | Nishu Enterprises",
    description:
      "Water treatment plants for pharma, food and beverage, housing societies, hotels, hospitals, labs, chemical, textile and more.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <Navigation />

      <main className="flex-1">
        <section className="on-dark page-hero py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Industries · {INDUSTRIES.length} sectors</p>
            <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl text-balance mb-6 text-foreground">
              Water Treatment Plants for Every Industry We Serve
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Water is a different problem in every sector. A pharmaceutical loop, a bottling
              line and a high-pressure boiler need different trains, different materials and
              different documentation. These pages set out how we approach each one — and what
              we need from you to quote accurately.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group card-lift card-rule flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      className="zoom-img object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h2 className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {industry.cardBlurb}
                    </p>
                    <span className="link-arrow mt-5 text-sm">
                      How we treat it <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ContactUs />
    </div>
  );
}
