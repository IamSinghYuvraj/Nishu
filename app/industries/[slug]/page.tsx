import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import ContactUs from "@/components/contactus";
import { JsonLd } from "@/components/json-ld";
import { PostBody } from "@/components/post-body";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, industrySchema, faqPageSchema } from "@/lib/schema";
import { INDUSTRIES, getIndustry } from "@/lib/industries";
import { PRODUCTS } from "@/lib/site";

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
    title: industry.title,
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

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={industrySchema(industry)} />
      <JsonLd data={faqPageSchema(industry.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />
      <Navigation />

      <main className="flex-1">
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/industries"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← All industries
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-balance mb-5 text-foreground">
                  {industry.heading}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">{industry.intro}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/contact">Request a quotation</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/products">See our product range</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
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

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
              What makes this sector different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.challenges.map((c) => (
                <div key={c.title} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
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
                  className="group p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                  <span className="inline-block mt-4 text-sm font-medium text-primary">
                    View specifications →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-linear-to-br from-secondary/5 to-secondary/10 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {industry.faqs.map((f) => (
                <div key={f.question} className="p-6 rounded-lg border border-border bg-card">
                  <dt className="text-lg font-semibold text-foreground mb-2">{f.question}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Other industries we serve</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/industries/${o.slug}`} className="text-primary hover:underline">
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
