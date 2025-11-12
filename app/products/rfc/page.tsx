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
                  Automatic 3-in-1 bottling solution for packaged drinking water and beverages
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

        {/* Specs Infographic */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Key Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-lg border border-border bg-background hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="font-semibold text-muted-foreground mb-3 text-sm group-hover:text-secondary transition-colors uppercase tracking-wide">
                    {spec.label}
                  </h3>
                  <p className="text-3xl font-bold text-secondary">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <Zap className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Icons */}
        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {applications.map((app, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-secondary/50 transition-colors">
                  <Shield className="w-8 h-8 text-secondary mb-3" />
                  <p className="text-center font-medium text-foreground text-sm">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Infographic */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors">
                  <Check className="w-6 h-6 text-secondary mb-3" />
                  <p className="text-sm font-medium text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/5 py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Scale?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Let our engineers design your custom RFC solution</p>
          </div>
        </section>
      </main>

    </div>
  )
}
