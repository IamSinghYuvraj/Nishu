import { Navigation } from "@/components/navigation"
import { Check } from "@/components/icons"
import Link from "next/link"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"
import AnimatedSection from "@/components/animation";
import ContactUs from "@/components/contactus";

export default function MembraneHousingPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/membrane-Housing(1).jpg", title: "Membrane Housing 1" },
    { type: "image", src: "/membrane-Housing(2).jpeg", title: "Membrane Housing 3" },
  ]

  const specs = [
    { label: "Material", value: "316L Stainless Steel" },
    { label: "Diameter Range", value: "2.5\" to 8\"" },
    { label: "Max Pressure", value: "300 PSI" },
  ]

  const products = [
    {
      name: "Membrane Housing",
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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      <main className="flex-1">
        <AnimatedSection>
          <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                    Membrane Housing
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    As a leading manufacturer of water treatment components, we offer advanced High Pressure Pumps designed to ensure the optimal and cost-effective operation of your systems.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Product Details</h2>
              <p className="text-lg text-muted-foreground mb-12">Our high-performance pressure pump solutions are engineered for reliability and efficiency:</p>
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
                        <h4 className="font-medium text-muted-foreground mb-2">Core Benefits & Performance</h4>
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
      <ContactUs />
    </div>
  )
}