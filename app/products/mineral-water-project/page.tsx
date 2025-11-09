import { Navigation } from "@/components/navigation"
import { Check } from "@/components/icons"
import Link from "next/link"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function MineralWaterProjectPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/mineral-water-project.jpg", title: "Mineral Water Project" },
  ]

  const specs = [
    { label: "Plant Capacity Range", value: "2,000 to 50,000 LPH" },
    { label: "Production Speed", value: "2,000 to 24,000 BPH" },
    { label: "Bottle Sizes", value: "200ml to 20L" },
  ]

  const components = [
    {
      name: "Raw Water Treatment",
      description: "Complete purification using RO, UV, and Ozonation.",
      benefits: "Delivers water that meets the highest standards for safety and purity."
    },
    {
      name: "Mineral Dosing System",
      description: "Controlled and precise addition of essential minerals.",
      benefits: "Ensures optimal taste and required mineral content in the final product."
    },
    {
      name: "Quality Control Laboratory",
      description: "Full laboratory facility setup for internal testing.",
      benefits: "Enables continuous quality assurance and adherence to regulatory norms."
    },
    {
      name: "Licensing & Regulatory Support",
      description: "Assistance with obtaining necessary permits and clearances.",
      benefits: "Provides complete compliance with BIS, FSSAI, and other regulations."
    },
    {
      name: "Bottling & Packaging Line",
      description: "Includes Rinsing, Filling, Capping (RFC), Labeling, and Shrink Wrapping.",
      benefits: "Automates the final production stages for high-volume, professional output."
    }
  ]

  const deliverables = [
    "Engineering & Design: Complete plant machinery and layout planning",
    "Installation & Testing: End-to-end setup and final commissioning",
    "Training & Support: Comprehensive operator training and ongoing Annual Maintenance Contract (AMC)"
  ]

  const benefits = [
    "Complete turnkey solution",
    "BIS, WHO, and FSSAI compliance",
    "Full regulatory support",
    "Automated production line",
    "Comprehensive quality control",
    "Ongoing technical support"
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">Turnkey Mineral Water Project</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  We offer complete, end-to-end turnkey solutions for setting up Packaged Drinking Water Plants. Our projects cover every stage, from initial raw water treatment to final bottling and packaging, ensuring compliance with BIS, WHO, and FSSAI standards.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Project Components</h2>
            <p className="text-lg text-muted-foreground mb-12">From Water Source to Shelf - Our comprehensive project scope includes:</p>
            
            <div className="grid gap-8">
              {components.map((component, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{component.name}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-muted-foreground mb-2">Primary Function</h4>
                      <p className="text-foreground">{component.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-muted-foreground mb-2">Core Benefits</h4>
                      <p className="text-foreground">{component.benefits}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Complete Setup Package</h2>
            <p className="text-lg text-muted-foreground mb-12">Our turnkey solution includes comprehensive deliverables:</p>
            
            <div className="grid gap-6">
              {deliverables.map((deliverable, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Project Specifications</h2>
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