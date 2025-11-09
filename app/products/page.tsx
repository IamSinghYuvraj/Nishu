import { Navigation } from "@/components/navigation"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ArrowRight } from "@/components/icons"

export default function ProductsIndex() {
  const products = [
    { title: "Reverse Osmosis Plant (RO)", slug: "reverse-osmosis", desc: "High-performance RO systems for potable and industrial water." },
    { title: "Demineralized Plant (DM)", slug: "demineralized", desc: "DM plants for ultra-pure water requirements." },
    { title: "Water Softening Plant", slug: "water-softening", desc: "Softening units to remove hardness and extend equipment life." },
    { title: "SS Pressure Tube", slug: "ss-pressure-tube", desc: "Stainless steel pressure tubing and assemblies." },
    { title: "Fabricated SS & MS Vessel/Tanks", slug: "fabricated-vessels", desc: "Custom fabricated vessels and tanks in SS and MS." },
    { title: "Complete Mineral Water Project", slug: "mineral-water-project", desc: "End-to-end mineral water bottling plant solutions." },
    { title: "Dosing, Ozonation & UV Systems", slug: "dosing-ozonation-uv", desc: "Chemical dosing, ozonation and UV sterilization systems." },
    { title: "Rinsing Filling Capping Machine (RFC)", slug: "rfc", desc: "Integrated RFC lines for high-speed bottling." },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our range of water treatment and bottling solutions. Click any product to learn more.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex items-center gap-2 text-secondary">Learn More <ArrowRight className="w-4 h-4" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
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
    </div>
  )
}
