import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Filter, Check, Leaf, Zap } from "@/components/icons"

export default function FiltrationPage() {
  const specs = [
    { label: "Filter Types", value: "5+ Technologies" },
    { label: "Customization", value: "Fully Customizable" },
    { label: "Flow Rate", value: "50 - 5,000 GPM" },
    { label: "Service Life", value: "5-10 Years" },
  ]

  const technologies = [
    "Sand and gravel filtration for large particle removal",
    "Activated carbon filtration for odor and chemical removal",
    "Membrane filtration technology for superior clarity",
    "Multimedia cartridge filters for cost efficiency",
    "Specialized resins for contaminant removal",
    "Ion exchange systems for mineral adjustment",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/5 to-primary/5 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                  Filtration <span className="text-accent">Systems</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Specialized filtration solutions for every industrial and commercial application
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
                >
                  Request Consultation
                </Link>
              </div>
              <div className="bg-accent/10 rounded-lg p-8 flex items-center justify-center h-96">
                <Filter className="w-40 h-40 text-accent opacity-50" />
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
                <div key={idx} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-muted-foreground mb-2 text-sm">{spec.label}</h3>
                  <p className="text-2xl font-bold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Filtration Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex gap-4 p-4">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg border border-border bg-card">
                <Filter className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Customizable</h3>
                <p className="text-muted-foreground text-sm">
                  Tailor filtration solutions to your specific water quality requirements
                </p>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card">
                <Leaf className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Eco-Friendly</h3>
                <p className="text-muted-foreground text-sm">
                  Environmentally responsible processes with proper waste management
                </p>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card">
                <Zap className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Cost Effective</h3>
                <p className="text-muted-foreground text-sm">
                  Optimize your filtration without compromising on quality or performance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent/5 py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Find Your Perfect Filtration Solution
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Talk to our filtration experts about your specific requirements
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
