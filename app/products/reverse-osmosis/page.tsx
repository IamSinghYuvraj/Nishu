import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Check, Zap, Shield } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"
import AnimatedSection from "@/components/animation";
import ContactUs from "@/components/contactus";

export default function ROPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/ro-img11.jpeg", title: "RO Plant Image 11" },
    { type: "image", src: "/Ro-img2.jpg", title: "RO Plant Image 2" },
    { type: "image", src: "/Ro-image4.jpg", title: "RO Plant Image 4" },
    { type: "image", src: "/Ro-img6.jpg", title: "RO Plant Image 6" },
  ]

  const specs = [
    { label: "Recovery", value: "60% - 85% (depending on feed)" },
    { label: "Membrane Type", value: "Thin-film composite (TFC)" },
    { label: "Capacity", value: "Up to 10,000 LPH and beyond" },
  ]

  const products = [
    {
      name: "Commercial Reverse Osmosis Units (Eco Series)",
      description: "High-capacity purification for commercial and industrial scale water needs.",
      features: "Provides reliably treated water suitable for various applications using quality pre-filtration components."
    },
    {
      name: "Industrial Reverse Osmosis Unit",
      description: "High-efficiency RO for demanding industrial processes.",
      features: "Offers high water recovery (up to 85%) and robust pre-treatment to ensure consistent, pure water."
    },
    {
      name: "Industrial RO Plant",
      description: "Economical and efficient membrane desalination for brackish water.",
      features: "Produces water that is clear, pleasant to taste, and removes up to 95% of TDS/salinity. Ideal for reducing regeneration chemicals in DM plants."
    },
    {
      name: "Commercial Reverse Osmosis System (Premium Series)",
      description: "Complete, state-of-the-art packaged RO systems for low-TDS brackish water treatment.",
      features: "Yields very low TDS water free from particulate and colloidal matter, with optional UV sterilization for drinking water use."
    },
    {
      name: "Industrial RO System",
      description: "Robust, modular purification to remove virtually all TDS content.",
      features: "Provides high performance with a modular design, requiring simple operation and minimal daily chemical maintenance."
    }
  ]

  const benefits = [
    "Removes dissolved salts and contaminants",
    "Improved water taste and safety",
    "Low maintenance with high uptime",
    "High water recovery rates",
    "Efficient TDS reduction",
    "Modular and scalable solutions"
  ]

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      <main className="flex-1">
        <AnimatedSection>
          <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                    Reverse Osmosis Plant <span className="text-secondary">(RO)</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    We are a prominent supplier of Reverse Osmosis (RO) Systems, providing the perfect solution for removing impurities and unwanted elements from water. RO technology purifies brackish or saline water by reducing Total Dissolved Solids (TDS) for various commercial and industrial needs.
                  </p>
                  
                </div>

                <div>
                  <MediaGallery items={mediaItems} />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Product Range</h2>
              <p className="text-lg text-muted-foreground mb-12">Our comprehensive range of Reverse Osmosis systems is designed to meet various industrial and commercial requirements:</p>
            </AnimatedSection>
            
            <div className="grid gap-8">
              {products.map((product, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{product.name}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-muted-foreground mb-2">Primary Function</h4>
                        <p className="text-foreground">{product.description}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-muted-foreground mb-2">Core Benefits & Output</h4>
                        <p className="text-foreground">{product.features}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <AnimatedSection>
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
        </AnimatedSection>

        <AnimatedSection>
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
        </AnimatedSection>
      </main>
      <AnimatedSection><ContactUs/></AnimatedSection>
    </div>
  )
}
