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
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
              Water Treatment Guides &amp; Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Thirty years of specifying and installing water treatment plants, written
              up for the engineers and buyers who have to make the decision.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="h-full flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-transform hover:scale-[1.02] hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                        {post.readingMinutes} min read
                      </p>
                      <h2 className="text-xl font-semibold text-foreground mb-2 text-balance">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.description}
                      </p>
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
