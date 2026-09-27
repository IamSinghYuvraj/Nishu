import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { postsForProduct } from "@/lib/posts"

// "Guides for buyers" on a product page: the posts that lead a reader to this
// product, so links run both ways between guides and the page they support.
// Renders nothing until a post lists the product in its `products` field.
export function BuyerGuides({ product }: { product: string }) {
  const guides = postsForProduct(product)
  if (!guides.length) return null

  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Guides for buyers</p>
            <h2 className="mt-3 text-3xl text-foreground md:text-4xl">Read before you request a quote</h2>
          </div>
          <Link href="/blog" className="link-arrow">
            All resources <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/blog/${g.slug}`}
                className="group card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <span className="relative block aspect-video overflow-hidden bg-muted">
                  <Image
                    src={g.image}
                    alt={g.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="zoom-img object-cover"
                  />
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="font-semibold text-foreground transition-colors group-hover:text-primary">{g.title}</span>
                  <span className="mt-2 flex-1 text-sm text-muted-foreground">{g.description}</span>
                  <span className="link-arrow mt-4 text-sm">
                    Read the guide <span className="arrow">→</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
