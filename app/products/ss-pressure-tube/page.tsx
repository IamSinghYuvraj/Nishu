import { Navigation } from "@/components/navigation"
import { Check } from "@/components/icons"
import Link from "next/link"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function SSPressureTubePage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/ss-pressure-tube.jpg", title: "SS Pressure Tube" },
  ]

  const specs = [
    { label: "Material", value: "316L Stainless Steel" },
    { label: "Diameter Range", value: "2.5\" to 8\"" },
    { label: "Max Pressure", value: "300 PSI" },
  ]

  const products = [
    {
      name: "High Pressure Pump",
      description: "Drives the system by providing the necessary high pressure for efficient purification processes (like Reverse Osmosis).",
      features: "Maximizes system efficiency and minimizes ownership cost by using the best available technology (e.g., Grundfoss) known for superior longevity and lower electrical consumption"
    }
  ]

  const benefits = [
    "High corrosion resistance",
    "Precision manufacturing",
    "Custom end fittings",
    "Superior longevity",
    "Lower electrical consumption",
    "Optimal system efficiency"
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                  High Pressure Pump
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  As a leading manufacturer of water treatment components, we offer advanced High Pressure Pumps designed to ensure the optimal and cost-effective operation of your systems.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Product Details</h2>
            <p className="text-lg text-muted-foreground mb-12">Our high-performance pressure pump solutions are engineered for reliability and efficiency:</p>
            
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
                      <h4 className="font-medium text-muted-foreground mb-2">Core Benefits & Performance</h4>
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