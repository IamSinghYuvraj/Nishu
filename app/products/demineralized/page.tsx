import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Check, Shield } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function DMPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/industrial-water-treatment-control-panel.jpg", title: "DM Plant Overview" },
  ]

  const specs = [
    { label: "Resin Type", value: "Mixed-bed / Strong acid/base resins" },
    { label: "Conductivity", value: "< 1 µS/cm" },
  ]

  const products = [
    {
      name: "FRP DM Plant (Rapid Flow Two Bed)",
      description: "Efficiently produces treated water with low conductivity (less than 30 micro siemens/cm), ideal for feed water with low Total Dissolved Solids (TDS) or post-RO treatment.",
      features: "Compact, factory-tested, utilizes FRP pressure vessels and special resin to handle higher velocities. Quick installation and monitoring points for quality control."
    },
    {
      name: "Mixed Bed DM Plants",
      description: "Used as a polisher unit following a two-bed DM or RO system to achieve ultra-high purity water (conductivity as low as 0.05 micro siemens/cm or 18 mega ohms).",
      features: "Delivers exceptionally pure water for critical applications. Available in various materials including Stainless Steel and FRP."
    },
    {
      name: "Mild Steel Rubber Lined Two Bed DM Water Plants",
      description: "Provides effective demineralisation for a wide range of industrial applications, yielding water with a conductivity of less than 10–30 micro siemens/cm.",
      features: "Features robust Mild Steel Rubber Lined vessels and components, offering high capacity and durability for larger volume requirements."
    },
    {
      name: "Mixed Bed FRP DM Plants",
      description: "Produces high-quality treated water with a conductivity of less than 1–2 micro siemens/cm and neutral pH, suitable for sensitive processes.",
      features: "Constructed with FRP pressure vessels and offers compact, pre-assembled, and easy-to-maintain functionality for consistent water quality."
    },
    {
      name: "Rapid Flow Two Bed DM Plants",
      description: "Incorporates state-of-the-art counter-flow technology for fast, automatic regeneration (just 30 minutes) and continuous, high-volume production of deionized water.",
      features: "Minimizes downtime and uses an automatic PLC control system. Excellent for demanding industrial environments needing high flow rates and low running costs."
    },
    {
      name: "Auto FRP Two Bed DM Water Plants",
      description: "Specialised system for automatic water demineralization using the ion exchange process, offering reliable performance with minimal effort.",
      features: "Features FRP construction, compact design, easy handling, and requires low maintenance."
    },
    {
      name: "Mild Steel Mixed Bed DM Plants",
      description: "Designed for ultra-purification, providing water quality as low as 0.05 micro siemens/cm (or less than 18 mega Ohms) for highly critical sectors like Pharma and Power Plants.",
      features: "Utilizes Mild Steel Rubber Lined vessels and robust components to ensure superior water purity for complex industrial processes."
    }
  ]

  const benefits = [
    "Ultrapure water for process and boiler feed",
    "Custom resin configurations for application needs",
    "Wide range of configurations for different industrial needs",
    "High-quality water treatment for critical applications",
    "Efficient and reliable performance"
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">Demineralized Plant <span className="text-secondary">(DM)</span></h1>
                <p className="text-lg text-muted-foreground mb-8">As a leading supplier and trader of advanced Demineralisation (DM) Plants, we provide efficient systems designed to purify water by removing a wide variety of impurities, including mineral salts and contaminants. Our DM plants are essential for industries requiring water of the highest quality.</p>
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
            <p className="text-lg text-muted-foreground mb-12">Here is a comprehensive overview of our DM Plant solutions, each designed to meet specific industrial requirements:</p>
            
            <div className="grid gap-8">
              {products.map((product, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{product.name}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-muted-foreground mb-2">Description</h4>
                      <p className="text-foreground">{product.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-muted-foreground mb-2">Key Features</h4>
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
