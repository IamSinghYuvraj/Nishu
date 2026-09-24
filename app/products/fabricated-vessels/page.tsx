import { ProductHeroActions } from "@/components/product-hero-actions"
import { RelatedProducts } from "@/components/related-products"
import { Navigation } from "@/components/navigation"
import { Check, Shield } from "@/components/icons"
import Link from "next/link"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"
import AnimatedSection from "@/components/animation";
import ContactUs from "@/components/contactus";
import { TrustBar } from "@/components/trust-bar"
import { FaqSection } from "@/components/faq-section"
import { PRODUCTS } from "@/lib/site"
import { PRODUCT_FAQS } from "@/lib/product-content"

const seo = PRODUCTS.find((p) => p.slug === "fabricated-vessels")!

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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      <main className="flex-1">
          <section className="on-dark page-hero py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <Link href="/products" className="eyebrow transition-opacity hover:opacity-80">All products</Link>
                  <h1 className="mt-4 text-4xl md:text-5xl text-balance mb-5 text-foreground">{seo.heading}</h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    We manufacture stainless steel (SS) and mild steel (MS) storage tanks, pressure vessels and filter vessels in-house in Vasai, built to your capacity and site layout for water treatment and process industries by a water treatment manufacturer established in 1996.
                  </p>
                  <ProductHeroActions productName={seo.name} />
                  
                </div>

                  <div>
                    <MediaGallery items={mediaItems} />
                  </div>
                </div>
              </div>
            </section>

        <TrustBar />
<AnimatedSection><section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Product Range</h2>
            <p className="text-lg text-muted-foreground mb-12">Our storage solutions are engineered for durability and reliability across various industrial applications:</p>
            
            <div className="grid gap-8">
              {products.map((product, idx) => (
                <div key={idx} className="card-lift card-rule border border-border rounded-xl p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{product.name}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-2">Primary Function</h4>
                      <p className="text-foreground">{product.description}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-2">Core Benefits & Features</h4>
                      <p className="text-foreground">{product.features}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section></AnimatedSection>
        

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specs.map((spec, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card card-lift card-rule">
                  <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-2">{spec.label}</h3>
                  <p className="font-display text-2xl font-bold text-foreground">{spec.value}</p>
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
                <div key={idx} className="benefit-row">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FaqSection faqs={PRODUCT_FAQS["fabricated-vessels"] ?? []} />
        <RelatedProducts current="fabricated-vessels" />
      </main>
      <ContactUs />
    </div>
  )
}