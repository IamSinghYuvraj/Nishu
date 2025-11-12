import { Navigation } from "@/components/navigation"
import { Check, Shield, Zap } from "@/components/icons"
import Link from "next/link"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function MineralWaterProjectPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/Complete-Mineral-Water-Project(5).webp", title: "Complete Mineral Water Project" },
    { type: "image", src: "/COMPLETE-PROJECT-FLOW-DIAGRAM(3)).webp", title: "Project Flow Diagram" },
    { type: "image", src: "/Mineral-Drinking-Water-Plant(1).webp", title: "Mineral Drinking Water Plant" },
    { type: "image", src: "/Mineral-Water-Plant(2).webp", title: "Mineral Water Plant" },
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
                  Complete end-to-end solutions for packaged drinking water plants with BIS, WHO, and FSSAI compliance
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Project Specifications</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Project Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {components.map((component, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <Zap className="w-6 h-6 text-secondary mb-3" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{component.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Setup Package Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliverables.map((deliverable, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-background rounded-lg border border-border hover:border-secondary/50 transition-colors">
                  <Check className="w-6 h-6 text-secondary mb-3" />
                  <p className="text-sm font-medium text-foreground">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors">
                  <Shield className="w-6 h-6 text-secondary mb-3" />
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