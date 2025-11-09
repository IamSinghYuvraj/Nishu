import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Check, Zap, Shield } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function RFCPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/industrial-water-treatment-control-panel.jpg", title: "RFC Machine Overview" },
    { type: "image", src: "/water-filtration-machinery-close-up.jpg", title: "Rinsing Station" },
  ]

  const specs = [
    { label: "Capacity", value: "Up to 6000 bottles/hour (model dependent)" },
    { label: "Materials", value: "SS 304 / SS 316 construction options" },
    { label: "Bottle Types", value: "PET, Glass (adapter sets available)" },
    { label: "Controls", value: "PLC based with HMI" },
  ]

  const benefits = [
    "High throughput with minimal downtime",
    "Precision rinsing and filling to reduce product loss",
    "Modular design for easy maintenance and upgrades",
    "Customizable to your line and bottle specifications",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                  Rinsing Filling Capping <span className="text-secondary">Machine (RFC)</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Fully integrated rinsing, filling and capping line engineered for high-speed bottling applications.
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

        {/* Specs */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="font-semibold text-muted-foreground mb-2 text-sm group-hover:text-secondary transition-colors">
                    {spec.label}
                  </h3>
                  <p className="text-2xl font-bold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 p-4 hover:bg-background rounded-lg transition-colors duration-300">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <Zap className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">High Throughput</h3>
                <p className="text-muted-foreground text-sm">Optimized for continuous high-speed production.</p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <Shield className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Robust Construction</h3>
                <p className="text-muted-foreground text-sm">Durable SS construction built for long life and easy cleaning.</p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <Check className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Easy Integration</h3>
                <p className="text-muted-foreground text-sm">Designed to integrate with existing filling lines and automation systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/5 py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Automate Your Line?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Contact our engineers for a customized RFC solution.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 font-medium hover:-translate-y-1 hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </section>
      </main>

    </div>
  )
}
