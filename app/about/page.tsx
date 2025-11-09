import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import IndustryCard from "@/components/industry-card"
import MethodologySteps from "@/components/methodology-steps"
import InfrastructureCards from "@/components/infrastructure-cards"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
              About <span className="text-secondary">Nishu Enterprises</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Nearly three decades of excellence in water treatment innovation and industrial solutions serving clients
              worldwide
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our <span className="text-secondary">Legacy</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Established in the year 1996, we, Nishu Enterprise, are engaged in manufacturing, trading, retailing,
                  wholesaling and services providing on an array of Water Treatment Plants and Spare Parts. This quality
                  and innovative range is manufactured at our facility located at Mumbai (Maharashtra, India).
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our range is acknowledged for feasible design, user friendly operation, reliable function and easy
                  maintenance. We offer our clients DM Plant (ion Exchange Technology), Dosing System, Activated Carbon
                  Filter, Sand Filtration and Softening Plant.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With the aid of latest technology, we are able to manufacture O2 Generator, Ozone Water Treatment
                  System, Reverse Osmosis System, UV Systems and Micron Filtration System. Our products have enabled us
                  to cater to clients spread across worldwide.
                </p>
              </div>
              <div className="bg-linear-to-br from-secondary/10 to-accent/10 rounded-lg p-8 h-96 flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-4">29+</div>
                  <p className="text-lg text-muted-foreground">Years of Excellence Since 1996</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Industries We <span className="text-secondary">Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Quality is of paramount importance to us and pivotal to our success in the industry. Our products boast
                of durability, quality and dependability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <IndustryCard
                icon="🏭"
                title="Pharmaceutical & Chemical"
                description="Manufacturing facilities requiring precision purification systems and waste water treatment with regulatory compliance"
              />
              <IndustryCard
                icon="🍎"
                title="Food & Beverage"
                description="Mineral & bottled water technologies, high-purity water systems for production and processing units"
              />
              <IndustryCard
                icon="🏥"
                title="Healthcare & Diagnostics"
                description="Specialized water treatment systems for medical facilities and laboratory operations"
              />
              <IndustryCard
                icon="⚡"
                title="Power Generation"
                description="Industrial cooling systems and process water treatment for thermal and power plants"
              />
              <IndustryCard
                icon="🌾"
                title="Agriculture & Irrigation"
                description="Customized water softening and de-mineralization solutions for agricultural applications"
              />
              <IndustryCard
                icon="🏢"
                title="Commercial & Hospitality"
                description="Building water treatment, softening plants, and waste water management systems"
              />
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our <span className="text-secondary">Applications</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We toil to provide our clients with what they need. Every product is tested for quality and delivered
                with timely service and cost-effective solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="group p-8 rounded-lg border border-border bg-background hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-secondary/80 transition-colors">
                    DM Plants
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    De-mineralized water treatment using ion exchange technology for industrial applications
                  </p>
                </div>
              </div>

              <div className="group p-8 rounded-lg border border-border bg-background hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-secondary/80 transition-colors">
                    Reverse Osmosis Systems
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Advanced membrane technology for superior water purification and mineral water treatment
                  </p>
                </div>
              </div>

              <div className="group p-8 rounded-lg border border-border bg-background hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-secondary/80 transition-colors">
                    UV & Ozonation
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    O2 generators and Ozone water treatment systems for chemical-free disinfection
                  </p>
                </div>
              </div>

              <div className="group p-8 rounded-lg border border-border bg-background hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-secondary/80 transition-colors">
                    Specialty Filtration
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Micron filtration, ultra filtration, and activated carbon systems for precision needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Working Methodology */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Working <span className="text-secondary">Methodology</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our ability to draw on all available techniques has helped us cater to variegated client needs and
                surpass industry counterparts.
              </p>
            </div>

            <MethodologySteps />
          </div>
        </section>

        {/* Infrastructure */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                State-of-the-Art <span className="text-secondary">Infrastructure</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We have a state-of-the-art infrastructure that is installed with the requisite machines & equipment,
                which are taken care of experienced professionals. Making optimal utilization of the resources at their
                disposal, our experts toil to design & develop advanced purification systems.
              </p>
            </div>

            <InfrastructureCards />
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">29+</h3>
                <p className="text-muted-foreground">Years Since 1996</p>
              </div>
              <div className="text-center hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">45+</h3>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="text-center hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">150+</h3>
                <p className="text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">Partner With Us</h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Nishu Enterprises for their water treatment and industrial
              needs
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-secondary-foreground text-secondary rounded-lg hover:bg-secondary-foreground/90 transition-all duration-300 font-medium hover:-translate-y-1 hover:shadow-lg"
            >
              Get a Quote
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
