import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Droplet, Cog, Filter, ArrowRight } from "@/components/icons"

export default function ProductsPage() {
  const products = [
    {
      id: "water-treatment",
      title: "Water Treatment Plants",
      description: "Advanced purification systems designed for municipal and industrial applications",
      icon: Droplet,
      features: ["Multi-stage filtration", "Capacity: 100-10,000 GPM", "Automated monitoring", "20+ year lifespan"],
      link: "/products/water-treatment",
    },
    {
      id: "machinery",
      title: "Industrial Machinery",
      description: "Robust equipment engineered for continuous operation in demanding environments",
      icon: Cog,
      features: ["Heavy-duty construction", "Minimal maintenance", "24/7 operation", "Energy efficient"],
      link: "/products/machinery",
    },
    {
      id: "filtration",
      title: "Filtration Systems",
      description: "Specialized filtration solutions for diverse industrial and commercial needs",
      icon: Filter,
      features: ["Sand filtration", "Carbon filtration", "Membrane technology", "Custom solutions"],
      link: "/products/filtration",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
              Our <span className="text-primary">Product Range</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive water treatment and industrial machinery solutions tailored to your specific needs
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => {
                const IconComponent = product.icon
                return (
                  <Link
                    key={product.id}
                    href={product.link}
                    className="group p-8 rounded-lg border border-border bg-card hover:border-primary hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our engineering team specializes in custom-built solutions tailored to your specific requirements
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
