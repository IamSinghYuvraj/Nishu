import { ProductHeroActions } from "@/components/product-hero-actions"
import { RelatedProducts } from "@/components/related-products"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Check } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"
import ContactUs  from "@/components/contactus";
import { TrustBar } from "@/components/trust-bar"
import { FaqSection } from "@/components/faq-section"
import { PRODUCTS } from "@/lib/site"
import { PRODUCT_FAQS } from "@/lib/product-content"

const seo = PRODUCTS.find((p) => p.slug === "water-softening")!


export default function WaterSofteningPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/Water-Softening-Plant.jpg", title: "Water Softening Plant" },
    {type: "image", src: "/water-softeners.webp", title: "Water Softeners"},
    {type: "image", src: "/water-softner(3).png", title: "Water Softeners"}
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
        <section className="on-dark page-hero py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <Link href="/products" className="eyebrow transition-opacity hover:opacity-80">All products</Link>
                  <h1 className="mt-4 text-4xl md:text-5xl text-balance mb-5 text-foreground">{seo.heading}</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    We manufacture industrial and commercial water softening plants that remove the calcium and magnesium hardness behind scale in boilers, cooling towers, hotels, housing societies and process equipment. Automatic FRP and stainless steel softeners, built in Vasai, Mumbai since 1996.
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

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Product Range</h2>
            <p className="text-lg text-muted-foreground mb-12">Our specialized water softening solutions cater to various industrial and commercial applications:</p>
            
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
                      <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-2">Core Benefits & Application</h4>
                      <p className="text-foreground">{product.features}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="on-dark page-hero py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow">How it works</p>
              <h2 className="mt-3 text-3xl md:text-4xl mb-6 text-foreground">The Science of Softening</h2>
              <p className="text-lg text-muted-foreground">
                The principle behind a water softener is straightforward. Hardness in water is primarily caused by positively-charged minerals like Calcium and Magnesium. These minerals can lead to issues such as scale buildup in pipes and appliances, and can also reduce the effectiveness of soaps and detergents. To resolve this, our systems use a process called Cation Exchange to effectively remove these minerals, resulting in soft water.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specs.map((s, i) => (
                <div key={i} className="p-6 rounded-xl border border-border bg-card card-lift card-rule">
                  <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-2">{s.label}</h3>
                  <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
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
        <FaqSection faqs={PRODUCT_FAQS["water-softening"] ?? []} />
        <RelatedProducts current="water-softening" />
      </main>
      <ContactUs />
    </div>
  )
}
