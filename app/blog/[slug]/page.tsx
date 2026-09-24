import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import ContactUs from "@/components/contactus";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { PostBody } from "@/components/post-body";
import { POSTS, getPost } from "@/lib/posts";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: { absolute: post.seoTitle ?? post.title },
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.published,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <Navigation />
      <main className="flex-1">
        <article>
          <header className="on-dark page-hero pt-14 pb-36 md:pt-20 md:pb-40">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link href="/blog" className="eyebrow transition-opacity hover:opacity-80">
                All resources
              </Link>
              <h1 className="text-4xl md:text-5xl text-balance mt-5 mb-5 text-foreground">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground">{post.description}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {post.readingMinutes} min read
              </p>
            </div>
          </header>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative -mt-24 mb-12 aspect-video overflow-hidden rounded-2xl border-4 border-white shadow-2xl shadow-ink/20 md:-mt-28">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <PostBody blocks={post.body} />

            <div className="on-dark page-hero no-wave mt-14 rounded-2xl p-8">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-3 text-2xl text-foreground mb-2">
                Need this specified for your site?
              </h2>
              <p className="text-muted-foreground mb-5">
                Send us your water analysis and daily requirement and we will size the
                plant before quoting.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="cta">
                  <Link href={post.cta.href}>{post.cta.label}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Request a quotation</Link>
                </Button>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <p className="eyebrow">Keep reading</p>
                <h2 className="mt-3 text-2xl text-foreground mb-6">
                  Related guides
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="group card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
                      >
                        <span className="relative block aspect-video overflow-hidden bg-muted">
                          <Image src={r.image} alt={r.imageAlt} fill sizes="(max-width: 640px) 100vw, 360px" className="zoom-img object-cover" />
                        </span>
                        <span className="flex flex-1 flex-col p-5">
                          <span className="font-semibold text-foreground transition-colors group-hover:text-primary">{r.title}</span>
                          <span className="link-arrow mt-3 text-sm">Read <span className="arrow">→</span></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>

        <ContactUs />
      </main>
    </div>
  );
}
