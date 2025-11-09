import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Check } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function WaterSofteningPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/water-filtration-machinery-close-up.jpg", title: "Water Softening System" },
  ]

  const specs = [
    { label: "Process", value: "Ion-exchange based softening" },
    { label: "Capacity", value: "Customizable to customer needs" },
  ]

  const benefits = ["Prevents scale formation", "Extends equipment life", "Improves detergent efficiency"]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">Water Softening Plant</h1>
                <p className="text-lg text-muted-foreground mb-8">Effective softening solutions using ion-exchange resin technology.</p>
                <Link href="/contact" className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg">Get a Quote</Link>
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
              {specs.map((s, i) => (
                <div key={i} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-muted-foreground mb-2 text-sm">{s.label}</h3>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
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
