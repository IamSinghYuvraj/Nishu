import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import ContactUs from "@/components/contactus";
import { JsonLd } from "@/components/json-ld";
import { PostBody } from "@/components/post-body";
import { Button } from "@/components/ui/button";
import { TrustBar } from "@/components/trust-bar";
import { FaqSection } from "@/components/faq-section";
import { breadcrumbSchema, industrySchema } from "@/lib/schema";
import { INDUSTRIES, getIndustry } from "@/lib/industries";
import { PRODUCTS } from "@/lib/site";
import { getPost } from "@/lib/posts";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: { absolute: industry.title },
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: industry.title,
      description: industry.description,
      url: `/industries/${industry.slug}`,
      images: [{ url: industry.image, alt: industry.imageAlt }],
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const products = industry.relatedProducts
    .map((s) => PRODUCTS.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug);

  const guides = (industry.relatedPosts ?? [])
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={industrySchema(industry)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />
      <Navigation />

      <main className="flex-1">
        <section className="on-dark page-hero py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/industries" className="eyebrow transition-opacity hover:opacity-80">
              All industries
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
              <div>
                <h1 className="text-4xl md:text-5xl text-balance mb-5 text-foreground">
                  {industry.heading}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">{industry.intro}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="cta">
                    <Link href="/contact">Request a quotation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/products">See our product range</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/30">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
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
            <p className="eyebrow">The challenge</p>
            <h2 className="mt-3 text-3xl md:text-4xl mb-10 text-foreground">
              What makes this sector different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.challenges.map((c) => (
                <div key={c.title} className="p-6 rounded-xl border border-border bg-card card-lift card-rule">
                  <h3 className="text-xl text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <PostBody blocks={industry.body} />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Equipment</p>
            <h2 className="mt-3 text-3xl md:text-4xl mb-3 text-foreground">
              Systems we supply for this sector
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              The equipment below covers most requirements in {industry.name.toLowerCase()}.
              Where the duty is unusual, we design against the specification instead.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group card-lift card-rule flex gap-5 overflow-hidden rounded-2xl border border-border bg-card p-4"
                >
                  <span className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-muted sm:h-32 sm:w-32">
                    <Image src={p.image} alt={p.imageAlt} fill sizes="128px" className="zoom-img object-cover" />
                  </span>
                  <div className="flex flex-col py-1">
                    <h3 className="text-lg text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <span className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</span>
                    <span className="link-arrow mt-auto pt-3 text-sm">
                      View specifications <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection faqs={industry.faqs} />

        {guides.length > 0 && (
          <section className="pt-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="eyebrow">Further reading</p>
              <h2 className="mt-3 text-2xl text-foreground mb-6">Guides for this sector</h2>
              <ul className="grid gap-3 md:grid-cols-2">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/blog/${g.slug}`} className="group card-lift flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 font-semibold text-foreground">
                      {g.title}
                      <span className="link-arrow shrink-0"><span className="arrow">→</span></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Keep exploring</p>
            <h2 className="mt-3 text-2xl text-foreground mb-6">Other industries we serve</h2>
            <ul className="flex flex-wrap gap-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/industries/${o.slug}`} className="chip-link">
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactUs />
      </main>
    </div>
  );
}
