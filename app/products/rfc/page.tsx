import { ProductHeroActions } from "@/components/product-hero-actions"
import { RelatedProducts } from "@/components/related-products"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Check, Zap, Shield } from "@/components/icons"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"
import AnimatedSection from "@/components/animation";
import ContactUs  from "@/components/contactus";
import { TrustBar } from "@/components/trust-bar"
import { FaqSection } from "@/components/faq-section"
import { PRODUCTS } from "@/lib/site"
import { PRODUCT_FAQS } from "@/lib/product-content"

const seo = PRODUCTS.find((p) => p.slug === "rfc")!

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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
          <section className="on-dark page-hero py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <Link href="/products" className="eyebrow transition-opacity hover:opacity-80">All products</Link>
                  <h1 className="mt-4 text-4xl md:text-5xl text-balance mb-5 text-foreground">{seo.heading}</h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    We manufacture automatic rinsing, filling and capping (RFC) machines for packaged drinking water and beverage bottling lines, built for hygienic, high-speed operation and matched to the water treatment plant upstream. Manufacturing in Vasai, Mumbai since 1996.
                  </p>
                  <ProductHeroActions productName={seo.name} />
                </div>

                <div>
                  <MediaGallery items={mediaItems} />
                </div>
              </div>
            </div>
          </section>

        <TrustBar />

        {/* Specs Infographic */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Advanced RFC Technology</h2>
              <p className="text-lg text-muted-foreground mb-12">Engineered for precision, speed, and reliability in beverage production</p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="p-8 rounded-xl border border-border bg-card card-lift card-rule group">
                    <Zap className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Applications</h2>
              <p className="text-lg text-muted-foreground mb-12">Versatile solution for various bottling needs:</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="benefit-row">
                    <Shield className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p className="text-foreground">{app}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Specs */}
        <AnimatedSection>
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Technical Specifications</h2>
              <p className="text-lg text-muted-foreground mb-12">Built for high-volume production with precision engineering and food-grade materials for optimal performance.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-border bg-card card-lift card-rule group"
                  >
                    <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-2">
                      {spec.label}
                    </h3>
                    <p className="font-display text-2xl font-bold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection>
          <section className="bg-card py-16 md:py-24 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="benefit-row">
                    <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={0}>
                <div className="p-8 rounded-xl border border-border bg-card card-lift card-rule group">
                  <Zap className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">High Throughput</h3>
                  <p className="text-muted-foreground text-sm">Optimized for continuous high-speed production.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="p-8 rounded-xl border border-border bg-card card-lift card-rule group">
                  <Shield className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Robust Construction</h3>
                  <p className="text-muted-foreground text-sm">Durable SS construction built for long life and easy cleaning.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="p-8 rounded-xl border border-border bg-card card-lift card-rule group">
                  <Check className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Easy Integration</h3>
                  <p className="text-muted-foreground text-sm">Designed to integrate with existing filling lines and automation systems.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        <FaqSection faqs={PRODUCT_FAQS["rfc"] ?? []} />
        <RelatedProducts current="rfc" />
      </main>
      <ContactUs />

    </div>
  )
}
