import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Cog, Check, Wrench, TrendingUp } from "@/components/icons"

export default function MachineryPage() {
  const specs = [
    { label: "Operating Capacity", value: "24/7 Continuous" },
    { label: "Maintenance Interval", value: "Annual service" },
    { label: "Build Quality", value: "Industrial Grade" },
    { label: "Lifespan", value: "20+ Years" },
  ]

  const features = [
    "Heavy-duty construction for demanding environments",
    "Minimal maintenance requirements",
    "Energy-efficient motor systems",
    "Automatic shutdown safety features",
    "Compatible with existing systems",
    "Comprehensive spare parts availability",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/5 to-primary/5 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
                  Industrial <span className="text-secondary">Machinery</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Engineered solutions built to withstand the harshest industrial conditions
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                >
                  Request Consultation
                </Link>
              </div>
              <div className="bg-secondary/10 rounded-lg p-8 flex items-center justify-center h-96">
                <Cog className="w-40 h-40 text-secondary opacity-50" />
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

        {/* Features */}
        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-4">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{feature}</p>
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
                <Wrench className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Easy Maintenance</h3>
                <p className="text-muted-foreground text-sm">
                  Simple maintenance procedures with readily available spare parts worldwide
                </p>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">High Performance</h3>
                <p className="text-muted-foreground text-sm">
                  Delivers consistent performance and reliability in any industrial setting
                </p>
              </div>
              <div className="p-8 rounded-lg border border-border bg-card">
                <Cog className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Built to Last</h3>
                <p className="text-muted-foreground text-sm">
                  Premium construction ensures decades of reliable operation with minimal intervention
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/5 py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Upgrade Your Industrial Operations</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts help you find the perfect machinery solution for your needs
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
            >
              Get Your Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
