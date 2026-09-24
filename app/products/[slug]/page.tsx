import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import ContactUs from "@/components/contactus";
import { JsonLd } from "@/components/json-ld";
import { PostBody } from "@/components/post-body";
import { TrustBar } from "@/components/trust-bar";
import { FaqSection } from "@/components/faq-section";
import { ProductHeroActions } from "@/components/product-hero-actions";
import { RelatedProducts } from "@/components/related-products";
import { breadcrumbSchema, productSchema, serviceSchema } from "@/lib/schema";
import { PRODUCTS } from "@/lib/site";
import { PRODUCT_FAQS, PRODUCT_PAGES } from "@/lib/product-content";
import { INDUSTRIES } from "@/lib/industries";

// Data-driven product pages. The original eight products have their own
// hand-built routes under app/products/<slug>, which take precedence over
// this dynamic segment; this template only serves slugs in PRODUCT_PAGES.
export const dynamicParams = false;

// Offered as a service rather than a physical product in structured data.
const SERVICE_SLUGS = new Set(["amc-maintenance"]);

export function generateStaticParams() {
  return Object.keys(PRODUCT_PAGES).map((slug) => ({ slug }));
}

function load(slug: string) {
  const product = PRODUCTS.find((p) => p.slug === slug);
  const page = PRODUCT_PAGES[slug];
  return product && page ? { product, page } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = load(slug);
  if (!data) return {};
  const { product } = data;
  return {
    title: { absolute: product.title },
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `/products/${product.slug}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function DataProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = load(slug);
  if (!data) notFound();
  const { product, page } = data;

  const industries = page.relatedIndustries
    .map((s) => INDUSTRIES.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={SERVICE_SLUGS.has(product.slug) ? serviceSchema(product) : productSchema(product)}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      <Navigation />

      <main className="flex-1">
        <section className="on-dark page-hero py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/products" className="eyebrow transition-opacity hover:opacity-80">
              All products
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
              <div>
                <h1 className="text-4xl md:text-5xl text-balance mb-5 text-foreground">
                  {product.heading}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">{page.intro}</p>
                <ProductHeroActions productName={product.name} />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/30">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {page.highlights.map((h) => (
                <div key={h.title} className="p-6 rounded-xl border border-border bg-card card-lift card-rule">
                  <h2 className="text-xl text-foreground mb-2">{h.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <PostBody blocks={page.body} />
          </div>
        </section>

        {industries.length > 0 && (
          <section className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="eyebrow">Where it&apos;s used</p>
              <h2 className="mt-3 text-2xl text-foreground mb-6">Industries this serves</h2>
              <ul className="flex flex-wrap gap-3">
                {industries.map((i) => (
                  <li key={i.slug}>
                    <Link href={`/industries/${i.slug}`} className="chip-link">
                      {i.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <FaqSection faqs={PRODUCT_FAQS[product.slug] ?? []} />
        <RelatedProducts current={product.slug} />
      </main>
      <ContactUs />
    </div>
  );
}
