import Link from "next/link";
import { PostArt } from "@/components/post-art";
import { getPost } from "@/lib/posts";

// A single article promoted as a wide banner (homepage and About page). Server
// component: it reads the post data, which the client homepage should not ship,
// so app/page.tsx renders it and passes it into the homepage as a prop.
export function FeaturedArticle({
  slug,
  eyebrow = "Featured guide",
  className = "",
}: {
  slug: string;
  eyebrow?: string;
  className?: string;
}) {
  const post = getPost(slug);
  if (!post) return null;

  return (
    <section className={`py-14 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/blog/${post.slug}`}
          className="group card-lift grid overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-ink/10 md:grid-cols-[2fr_3fr]"
        >
          <span className="relative block aspect-video overflow-hidden bg-muted md:aspect-auto md:min-h-[18rem]">
            <PostArt kind={post.art} compact className="zoom-img" />
          </span>
          <span className="flex flex-col justify-center p-7 md:p-10">
            <span className="eyebrow">
              {eyebrow} · {post.readingMinutes} min read
            </span>
            <span className="mt-4 block font-display text-2xl font-bold text-foreground text-balance transition-colors group-hover:text-primary md:text-3xl">
              {post.title}
            </span>
            <span className="mt-4 block text-lg leading-relaxed text-muted-foreground">{post.description}</span>
            <span className="link-arrow mt-6 text-base">
              Read the guide <span className="arrow">→</span>
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
