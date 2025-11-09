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

  const products = [
    {
      name: "Stainless Steel Water Softeners",
      description: "Industrial-grade removal of calcium and magnesium (water hardness).",
      features: "High-quality, durable construction (MS/SS/FRP options) for reliable performance in industrial settings."
    },
    {
      name: "Automatic FRP Water Softeners",
      description: "Superior softening support using an automatic control system.",
      features: "Consistent water quality for demanding preparations like boiler feed water, air conditioning systems, and textiles, with microcomputer-controlled timing."
    }
  ]

  const benefits = [
    "Prevents scale formation",
    "Extends equipment life",
    "Improves detergent efficiency",
    "Reduces maintenance costs",
    "Enhances equipment performance",
    "Automated operation available"
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">Water Softening Plant</h1>
                <p className="text-lg text-muted-foreground mb-8">We provide top-quality Water Softening Plants designed to remove hardness-causing minerals from water, ensuring efficient operation for industrial and civil water systems.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Product Range</h2>
            <p className="text-lg text-muted-foreground mb-12">Our specialized water softening solutions cater to various industrial and commercial applications:</p>
            
            <div className="grid gap-8">
              {products.map((product, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{product.name}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-muted-foreground mb-2">Primary Function</h4>
                      <p className="text-foreground">{product.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-muted-foreground mb-2">Core Benefits & Application</h4>
                      <p className="text-foreground">{product.features}</p>
                    </div>
                  </div>
                </div>
              ))}
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
