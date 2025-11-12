import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Check, Zap, Shield } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function RFCPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/rfc(1).webp", title: "RFC Machine 1" },
    { type: "image", src: "/rfc(2).webp", title: "RFC Machine 2" },
    { type: "image", src: "/rfc(3).webp", title: "RFC Machine 3" },
    { type: "video", src: "/rfc(1) video.mp4", title: "RFC Machine Video 1" },
    { type: "video", src: "/rfc(2)video.mp4", title: "RFC Machine Video 2" },
  ]

  const specs = [
    { label: "Capacity Range", value: "24 BPM to 300 BPM (1,440 - 18,000 bottles/hour)" },
    { label: "Bottle Size Range", value: "200 ml – 2 L bottles" },
    { label: "Construction", value: "SS with food-grade contact parts" },
    { label: "Control System", value: "PLC-controlled automation" },
  ]

  const features = [
    {
      title: "Integrated System",
      description: "Rinsing, filling, and capping in one integrated system"
    },
    {
      title: "Smart Technology",
      description: "No-bottle-no-fill technology with PLC control"
    },
    {
      title: "High Speed",
      description: "High-speed rotary filling system up to 12,000 bottles per hour"
    },
    {
      title: "Versatile Design",
      description: "Easy changeover for different bottle sizes"
    },
    {
      title: "Food Safety",
      description: "Food-grade materials with easy cleaning systems"
    },
    {
      title: "Reliable Performance",
      description: "Minimal downtime with robust construction"
    }
  ]

  const applications = [
    "Packaged drinking water (PET/Glass bottles)",
    "Carbonated beverages",
    "Flavored & functional drinks"
  ]

  const benefits = [
    "High-speed production capacity",
    "Integrated 3-in-1 system",
    "Food-grade safety standards",
    "Easy size changeover",
    "Minimal maintenance required",
    "PLC-controlled automation"
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                  RFC Machine <span className="text-secondary">(Rinsing Filling Capping)</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Automatic Rinsing, Filling, and Capping (RFC) machines designed for packaged drinking water and beverages. Ensures hygienic, high-speed bottling operations.
                </p>
                <div className="flex gap-4">
                  
                  <Link
                    href="/brochure.pdf"
                    className="inline-block px-8 py-3 bg-background text-foreground rounded-lg border border-border hover:border-secondary transition-all duration-300 font-medium hover:-translate-y-1 hover:shadow-lg"
                  >
                    Brochure
                  </Link>
                </div>
              </div>

              <div>
                <MediaGallery items={mediaItems} />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Advanced RFC Technology</h2>
            <p className="text-lg text-muted-foreground mb-12">Engineered for precision, speed, and reliability in beverage production</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <Zap className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Applications</h2>
            <p className="text-lg text-muted-foreground mb-12">Versatile solution for various bottling needs:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg">
                  <Shield className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground mb-12">Built for high-volume production with precision engineering and food-grade materials for optimal performance.</p>
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
            
          </div>
        </section>
      </main>

    </div>
  )
}
