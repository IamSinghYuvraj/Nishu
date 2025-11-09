import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Statistics } from "@/components/statistics"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Droplets, Factory, Utensils, Hospital, Home, Leaf, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "@/components/icons"
import { MethodologySteps } from "@/components/methodology-steps"
import InfrastructureCards from "@/components/infrastructure-cards"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-primary/5 to-secondary/10 border-b border-border py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4">
                About Our Company
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
                About <span className="text-secondary">Nishu Enterprises</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Nearly three decades of excellence in water treatment innovation and industrial solutions serving clients worldwide.
                We combine cutting-edge technology with sustainable practices to deliver pure, reliable water solutions.
              </p>
              <div className="flex gap-4 flex-wrap items-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 font-medium flex items-center gap-2 group hover:-translate-y-1 hover:shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Statistics />

        {/* Company Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4">
                  Our Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our <span className="text-secondary">Legacy</span> of Excellence
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Established in 1996, Nishu Enterprise has grown from a local provider to a globally recognized name in water treatment solutions. 
                    Our journey is marked by innovation, quality, and an unwavering commitment to excellence.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Headquartered in Mumbai, Maharashtra, we've expanded our operations to serve clients across multiple 
                    industries with cutting-edge water treatment technologies and sustainable solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-all">
                      <div className="text-3xl font-bold text-secondary mb-2">29+</div>
                      <p className="text-muted-foreground">Years of Experience</p>
                    </div>
                    <div className="p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-all">
                      <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                      <p className="text-muted-foreground">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 bg-linear-to-br from-secondary/20 to-primary/20 rounded-2xl -z-10 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-background rounded-xl overflow-hidden border border-border">
                    <img
                      src="/industrial-water-treatment-control-panel.jpg"
                      alt="Nishu Enterprises Facility"
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">Our Manufacturing Facility</h3>
                      <p className="text-muted-foreground">
                        State-of-the-art manufacturing unit equipped with the latest technology and staffed by experienced professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 md:py-24 bg-linear-to-r from-primary/5 to-secondary/5 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Industries We <span className="text-secondary">Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Delivering cutting-edge water treatment solutions across diverse sectors with customized approaches for each industry's unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-secondary/50 group">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Hospital className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ultra-pure water systems for hospitals and medical facilities with strict quality standards.</p>
                </CardContent>
              </Card>

              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-secondary/50 group">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Factory className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Manufacturing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom water treatment solutions for manufacturing and processing plants.</p>
                </CardContent>
              </Card>

              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-secondary/50 group">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Home className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Residential</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Home water purification and softening systems for healthier living.</p>
                </CardContent>
              </Card>

              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-secondary/50 group">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Leaf className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Agriculture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Irrigation water treatment and management solutions for optimal crop growth.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 transition-colors duration-300"
              >
                Explore All Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our <span className="text-secondary">Applications</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive water treatment solutions tailored to your specific needs, ensuring the highest quality and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="group relative overflow-hidden h-full hover:shadow-lg transition-all duration-300 border-border hover:border-secondary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Droplets className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">DM Plants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    De-mineralized water treatment using ion exchange technology for industrial applications, ensuring high-purity water for critical processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden h-full hover:shadow-lg transition-all duration-300 border-border hover:border-secondary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Reverse Osmosis Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced membrane technology for superior water purification, removing up to 99% of dissolved salts and impurities from water.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Working Methodology */}
        <section className="py-16 md:py-24 bg-linear-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Working <span className="text-secondary">Methodology</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a systematic approach to deliver customized water treatment solutions that meet your specific requirements and industry standards.
              </p>
            </div>

            <MethodologySteps />
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full mb-4">
                Our Facilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                State-of-the-Art <span className="text-secondary">Infrastructure</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Equipped with cutting-edge technology and staffed by experienced professionals, our infrastructure enables us to deliver superior water treatment solutions.
              </p>
            </div>

            <InfrastructureCards />
          </div>
        </section>

 
      </main>
    </div>
  )
}
