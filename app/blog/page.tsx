import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import ContactUs from "@/components/contactus";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { POSTS } from "@/lib/posts";

const title = "Water Treatment Guides: RO, DM, Softeners & Boilers";
const description =
  "Practical guides for plant engineers and buyers: sizing an RO plant, choosing between RO and DM, mineral water plant costs, and boiler feed water treatment.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog" },
};

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => b.published.localeCompare(a.published));

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/blog" },
        ])}
      />
      <Navigation />
      <main className="flex-1">
        <section className="on-dark page-hero py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Resources · {posts.length} guides</p>
            <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl text-balance mb-6 text-foreground">
              Water Treatment Guides &amp; Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Specifying and installing water treatment plants since 1996, written
              up for the engineers and buyers who have to make the decision.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="card-lift card-rule h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="zoom-img object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-3">
                        Guide · {post.readingMinutes} min read
                      </p>
                      <h2 className="text-xl text-foreground mb-3 text-balance transition-colors group-hover:text-primary">
                        {post.title}
                      </h2>
                      <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                        {post.description}
                      </p>
                      <span className="link-arrow mt-5 text-sm">
                        Read the guide <span className="arrow">→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactUs />
      </main>
    </div>
  );
}
