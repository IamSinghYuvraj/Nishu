import { Navigation } from "@/components/navigation"
import { Check, Shield } from "@/components/icons"
import Link from "next/link"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function FabricatedVesselsPage() {
const mediaItems: MediaItem[] = [
    { type: "image", src: "/ss-storage-tank(5).png", title: "SS Storage Tank 5" },
    { type: "image", src: "/ss-storage-tank(6).png", title: "SS Storage Tank 6" },
    { type: "image", src: "/ss-storage-tanks(10).jpeg", title: "SS Storage Tanks 10" },
    { type: "image", src: "/ss-storage-tanks(7).jpg", title: "SS Storage Tanks 7" },
    { type: "image", src: "/ss-storage-tanks(8).jpg", title: "SS Storage Tanks 8" },
    { type: "video", src: "/ss-storage-tank(1)video.mp4", title: "SS Storage Tank Video 1" },
    { type: "video", src: "/ss-storage-tanks(1)video.mp4", title: "SS Storage Tanks Video 2" },
  ]

  const specs = [
    { label: "Materials", value: "SS304, SS316, MS" },
    { label: "Capacity", value: "100L to 100,000L" },
    { label: "Thickness", value: "2mm to 12mm" },
  ]

  const products = [
    {
      name: "SS Storage Tanks",
      description: "High-capacity, secure storage for various liquids, including chemicals and oils.",
      features: "Constructed from high-grade Stainless Steel (SS 304/316L), offering a corrosion-resistant solution especially suited for the Pharmaceutical Industry. Can be custom-designed for pressure, full vacuum, and heating/cooling requirements."
    }
  ]

  const benefits = [
    "Custom engineered designs",
    "International quality standards",
    "Advanced welding & finishing",
    "Corrosion resistance",
    "Pressure and vacuum capability",
    "Heating/cooling customization"
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
                  SS & MS Vessel Tanks
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Custom-engineered storage vessels in stainless steel and mild steel for industrial applications
                </p>
              </div>

              <div>
                <MediaGallery items={mediaItems} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specs.map((spec, idx) => (
                <div key={idx} className="p-8 rounded-lg border border-border bg-background hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-muted-foreground mb-3 text-sm uppercase tracking-wide">{spec.label}</h3>
                  <p className="text-3xl font-bold text-secondary">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Product Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, idx) => (
                <div key={idx} className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <Shield className="w-6 h-6 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-background hover:border-secondary/50 transition-colors">
                  <Check className="w-6 h-6 text-secondary mb-3" />
                  <p className="text-sm font-medium text-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}