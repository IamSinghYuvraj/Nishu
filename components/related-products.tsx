import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { PRODUCTS } from "@/lib/site"

// "Keep exploring" strip at the foot of every product page. Picks the next
// products in catalogue order so every page links onward to a different set.
export function RelatedProducts({ current, count = 4 }: { current: string; count?: number }) {
  const start = PRODUCTS.findIndex((p) => p.slug === current)
  const picks = Array.from({ length: count }, (_, i) => PRODUCTS[(start + 1 + i) % PRODUCTS.length]).filter(
    (p) => p.slug !== current,
  )

  return (
    <section className="border-t border-border bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Keep exploring</p>
            <h2 className="mt-3 text-3xl text-foreground md:text-4xl">Other systems we build</h2>
          </div>
          <Link href="/products" className="link-arrow">
            All {PRODUCTS.length} products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {picks.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group card-lift flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="zoom-img object-cover"
                />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-lime">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg text-foreground transition-colors group-hover:text-primary">{p.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
