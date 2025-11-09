import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Check, Zap, Shield } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function ROPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/water-treatment-plant-industrial-equipment.jpg", title: "RO System Overview" },
  ]

  const specs = [
    { label: "Recovery", value: "60% - 85% (depending on feed)" },
    { label: "Membrane Type", value: "Thin-film composite (TFC)" },
    { label: "Capacity", value: "Up to 10,000 LPH and beyond" },
  ]

  const benefits = [
    "Removes dissolved salts and contaminants",
    "Improved water taste and safety",
    "Low maintenance with high uptime",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                  Reverse Osmosis Plant <span className="text-secondary">(RO)</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  High-performance RO systems designed for potable, industrial and process water treatment.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 font-medium hover:-translate-y-1 hover:shadow-lg"
                >
                  Get a Quote
                </Link>
              </div>

              <div>
                <MediaGallery items={mediaItems} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specs.map((spec, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-muted-foreground mb-2 text-sm">{spec.label}</h3>
                  <p className="text-2xl font-bold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex gap-4 p-4 hover:bg-background rounded-lg">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
