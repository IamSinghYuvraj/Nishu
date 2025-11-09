import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Droplet, Check, Zap, Shield } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function WaterTreatmentPage() {
  const mediaItems: MediaItem[] = [
    {
      type: "image",
      src: "/water-treatment-plant-industrial-equipment.jpg",
      title: "WTP-5000 System Overview",
    },
    {
      type: "image",
      src: "/water-filtration-machinery-close-up.jpg",
      title: "Multi-Stage Filtration System",
    },
    {
      type: "video",
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      title: "Installation Process",
    },
    {
      type: "image",
      src: "/industrial-water-treatment-control-panel.jpg",
      title: "Control & Monitoring System",
    },
  ]

  const specs = [
    { label: "Capacity Range", value: "100 - 10,000 GPM" },
    { label: "Filtration Stages", value: "Multi-stage (3-5 stages)" },
    { label: "Automation", value: "Full automated control" },
    { label: "Warranty", value: "5-10 years" },
  ]

  const benefits = [
    "Superior water quality meeting international standards",
    "Reduced operating costs through efficiency",
    "Minimal downtime with automated monitoring",
    "Environmentally friendly waste management",
    "Expert installation and training included",
    "24/7 technical support available",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                  Water Treatment <span className="text-secondary">Plants</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  State-of-the-art water purification systems designed for maximum efficiency and reliability
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

        {/* Specifications */}
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

        {/* Features Highlight */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <Zap className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Energy Efficient</h3>
                <p className="text-muted-foreground text-sm">
                  Optimized designs reduce operational costs by 30-40% compared to conventional systems
                </p>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <Shield className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Reliable & Durable</h3>
                <p className="text-muted-foreground text-sm">
                  Built with premium materials and tested for 20+ years of continuous operation
                </p>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <Droplet className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Superior Quality</h3>
                <p className="text-muted-foreground text-sm">
                  Meets and exceeds international water quality standards and regulations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/5 py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Upgrade Your Water Treatment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team for a personalized consultation and quote
            </p>
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
