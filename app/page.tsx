import { Navigation } from "@/components/navigation"
import AnimatedSection from "@/components/animation";
import Link from "next/link"
import { ArrowRight, Droplet, Cog, Shield, CheckCircle, Globe, Users, Award } from "@/components/icons"
import { ClientLogos } from "@/components/client-logos"
import { Industries } from "@/components/industries"
import ContactUs from "@/components/contactus"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="relative bg-linear-to-br from-primary/5 to-secondary/10 border-b border-border py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
                  Pure Water,
                  <span className="text-secondary"> Advanced Solutions</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Nishu Enterprises delivers cutting-edge water treatment plants and industrial machinery to clients
                  worldwide. Over 20 years of excellence in engineering and innovation.
                </p>
                <div className="flex gap-4 flex-wrap items-center mb-6">
                  <Link
                    href="/products/water-treatment"
                    className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 font-medium flex items-center gap-2 group hover:-translate-y-1 hover:shadow-lg"
                  >
                    Explore Products
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:-translate-y-1 hover:shadow-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
                <Link
                  href="/about"
                  className="text-secondary hover:text-secondary/80 transition-all duration-300 font-medium flex items-center gap-2 group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
          <section className="py-12 bg-linear-to-r from-primary/5 to-secondary/5 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-2">200+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-2">15+</h3>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-2">500+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
                Why Choose Nishu Enterprises
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                We combine innovation, reliability, and customer commitment to deliver water treatment solutions that
                exceed expectations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-8 rounded-lg border border-border bg-card hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 group transition-all duration-300">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-all duration-300">
                    <Droplet className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Purification Excellence</h3>
                  <p className="text-muted-foreground">
                    Advanced filtration and treatment technologies that ensure highest water quality standards for
                    industrial and municipal applications.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-lg border border-border bg-card hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 group transition-all duration-300">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-all duration-300">
                    <Cog className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Engineered for Durability</h3>
                  <p className="text-muted-foreground">
                    Robust machinery designed for continuous operation in demanding industrial environments with minimal
                    maintenance requirements.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-lg border border-border bg-card hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 group transition-all duration-300">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-all duration-300">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Environmental Responsibility</h3>
                  <p className="text-muted-foreground">
                    Committed to sustainable practices and eco-friendly solutions that protect our planet for future
                    generations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Welcome Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Welcome to Nishu Enterprises
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nishu Enterprises, established in 1996, is a professionally managed company engaged in manufacturing,
                  supplying, exporting, and servicing a wide range of water treatment solutions.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8 rounded-lg border border-border bg-card">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Our Offerings</h3>
                  <p className="text-muted-foreground">
                    Our offerings include modern Water Treatment Plants, Reverse Osmosis (RO) Units, Demineralized Water
                    Plants, Water Softening Units, Ozonation Systems, Desalination Plants, and complete Mineral Water
                    Projects.
                  </p>
                </div>
                <div className="p-8 rounded-lg border border-border bg-card">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Comprehensive Spares</h3>
                  <p className="text-muted-foreground">
                    We also provide comprehensive spare parts and equipment for Water Treatment Plants, such as all types
                    of cartridges and filters, membranes (BW, SW, UF, NF), resins, filter media (sand and carbon),
                    pressure gauges and switches, SS fittings, and essential water treatment chemicals including
                    antiscalants, Gramacid, and citric acid.
                  </p>
                </div>
                <div className="p-8 rounded-lg border border-border bg-card md:col-span-2 lg:col-span-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Our Expertise</h3>
                  <p className="text-muted-foreground">
                    Over the years, we have strengthened our expertise by adopting cutting-edge technology and building a
                    skilled team of professionals. Today, our solutions serve a wide customer base across diverse
                    industries, including the Pharmaceutical and Food & Beverage Industry.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The company is driven by a philosophy of innovation and excellence, with a strong focus on turnkey
                  project execution and a total system approach, ensuring reliability, efficiency, and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Quality Assurance Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Quality Assurance</h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Quality is of paramount importance to us and pivotal to our success in the industry. Our products
                    boast of durability, quality and dependability and aptly meet the variegated demands of our clients.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    In order to provide the clients with a qualitative range, we test each & every product manufactured by
                    us on the basis of certain pre-defined parameters. Requisite tests are carried out at our
                    state-of-the-art lab by a dexterous team of quality controllers.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Further, we make it a point to see that all the services that we offer to the clients are rendered
                    using quality material and advanced technology.
                  </p>
                </div>
                <div className="bg-linear-to-br from-secondary/10 to-secondary/5 rounded-lg p-8 md:p-12 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg animate-pulse-glow">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-foreground font-medium">Rigorous Testing Standards</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-foreground font-medium">State-of-the-Art Laboratory</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-foreground font-medium">Expert Quality Controllers</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-foreground font-medium">Premium Material & Advanced Technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Industries We Serve Section */}
        <AnimatedSection>
          <Industries />
        </AnimatedSection>

        {/* Client Logos Section */}
        <AnimatedSection>
          <ClientLogos />
        </AnimatedSection>

        {/* Client Satisfaction Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24 bg-linear-to-b from-secondary/5 to-primary/5 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                              <div className="order-2 md:order-1 bg-linear-to-bl from-secondary/10 to-secondary/5 rounded-lg p-8 md:p-12 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg animate-pulse-glow-reverse">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-foreground font-medium">Faultless Product Delivery</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-foreground font-medium">Client-Centric Approach</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-foreground font-medium">Timely Deliveries</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-foreground font-medium">Cost-Effective Solutions</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 animate-fade-in-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Client Satisfaction</h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    We toil to provide our clients with what they need and leave no stone unturned to exceed their
                    expectations. Be it the water treatment plant or a spare part, every product manufactured by us is
                    tested for quality.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We ensure that only a faultless range is delivered at the clients' end. Further, we make it a point to
                    ensure that all our services are rendered as per the clients' requirements.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Timely deliveries, cost-effective products and client-centric approach are some of the factors that
                    have helped us achieve client contentment and muster a huge clientele across the world.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Infrastructure Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">State-of-the-Art Infrastructure</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Equipped with cutting-edge technology and experienced professionals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Advanced Purification Systems",
                    desc: "Designed & developed advanced purification systems using latest technology",
                  },
                  {
                    title: "Reverse Osmosis",
                    desc: "Complete RO systems for industrial and municipal applications",
                  },
                  {
                    title: "Ultra Filtration",
                    desc: "Membrane process technology for precision water treatment",
                  },
                  {
                    title: "Water Softening",
                    desc: "De-mineralization and softening plant systems",
                  },
                  {
                    title: "Chemical Dosing",
                    desc: "Automated chemical dosing systems for treatment optimization",
                  },
                  {
                    title: "UV & Ionization",
                    desc: "Ultraviolet and ionization technology for disinfection",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-all">
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-secondary to-secondary/60" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Working Methodology Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24 bg-primary/5 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Our Working Methodology</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Simple, crystal-clear, and results-driven approach to deliver customized water treatment solutions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Understand", desc: "We analyze what clients exactly want" },
                  { step: "02", title: "Analyze", desc: "We examine their water source thoroughly" },
                  { step: "03", title: "Design", desc: "We engineer the perfect plant system" },
                  { step: "04", title: "Deliver", desc: "We produce advanced purification systems" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative p-8 rounded-lg border border-border bg-card hover:border-secondary/50 transition-all duration-300 group"
                  >
                    {/* Connector line between steps */}
                    {idx < 3 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-0.5 bg-linear-to-r from-secondary to-secondary/30" />
                    )}
                    <div className="text-4xl font-bold text-secondary/30 mb-4 group-hover:text-secondary/50 transition-all">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
.
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-lg text-muted-foreground mt-12 max-w-3xl mx-auto">
                Our ability to draw on all available techniques has helped us cater to the variegated needs of our clients
                and surpass our industry counterparts.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection>
          <section className="bg-primary/5 py-16 md:py-24 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center hover:scale-105 transition-all duration-300">
                  <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">20+</h3>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center hover:scale-105 transition-all duration-300">
                  <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">500+</h3>
                  <p className="text-muted-foreground">Installations Worldwide</p>
                </div>
                <div className="text-center hover:scale-105 transition-all duration-300">
                  <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">150+</h3>
                  <p className="text-muted-foreground">Trained Professionals</p>
                </div>
                <div className="text-center hover:scale-105 transition-all duration-300">
                  <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA removed — ContactUs is rendered globally in layout.tsx */}
      </main>
              <ContactUs />
      
    </div>
  )
}
