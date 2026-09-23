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
          <header className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-14 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ← All resources
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-balance mt-4 mb-4 text-foreground">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground">{post.description}</p>
              <p className="text-sm text-muted-foreground mt-4">
                {post.readingMinutes} min read
              </p>
            </div>
          </header>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-10">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <PostBody blocks={post.body} />

            <div className="mt-12 p-6 rounded-lg border border-border bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Need this specified for your site?
              </h2>
              <p className="text-muted-foreground mb-5">
                Send us your water analysis and daily requirement and we will size the
                plant before quoting.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={post.cta.href}>{post.cta.label}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Request a quotation</Link>
                </Button>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Related guides
                </h2>
                <ul className="space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="text-primary hover:underline"
                      >
                        {r.title}
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
