import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/animation"
import { POSTS, POST_CATEGORIES } from "@/lib/posts"

// Every guide, linked from the homepage. Without this a guide is two clicks
// from the homepage (home > Resources > guide); here it is one. Server
// component on purpose: it reads the full article data, which the client-side
// homepage should not ship (see app/page.tsx).
export function HomeGuides() {
  // One block per Resources section, in display order; empty sections are skipped.
  const groups = POST_CATEGORIES.map((c) => ({
    ...c,
    posts: POSTS.filter((p) => p.category === c.slug),
  })).filter((g) => g.posts.length > 0)

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Resources · {POSTS.length} guides</p>
              <h2 className="mt-4 text-4xl text-foreground text-balance md:text-5xl">
                Water Treatment Guides for Buyers and Plant Operators
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Sizing, cost, quotations and troubleshooting, set out for the people who have to
                specify and run a plant.
              </p>
            </div>
            <Link href="/blog" className="link-arrow shrink-0 text-base">
              All guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          {/* CSS columns, so a long section sits beside two short ones instead of leaving a gap. */}
          <div className="gap-6 md:columns-2">
            {groups.map((group) => (
              <div
                key={group.slug}
                className="card-rule mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">
                  {group.name}
                </h3>
                <ul className="mt-5 space-y-4">
                  {group.posts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="group block">
                        <span className="font-semibold text-foreground transition-colors group-hover:text-primary">
                          {post.title}
                        </span>
                        <span className="mt-1 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                          {post.readingMinutes} min read
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
