import { Navigation } from "@/components/navigation"
import { Check, Zap } from "@/components/icons"
import Link from "next/link"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function DosingOzonationUVPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/Ozone_system(3).jpg", title: "Ozone System 1" },
    { type: "image", src: "/Ozone-system(2).jpg", title: "Ozone System 3" },
    { type: "image", src: "/ozone-system(5).JPG.jpeg", title: "Ozone System 5" },
  ]

  const specs = [
    { label: "Dosing Flow Range", value: "0.1 to 500 LPH" },
    { label: "Ozone Capacity", value: "1 to 100 g/hr" },
    { label: "UV Dose", value: "30-40 mJ/cm²" },
  ]

  const systems = [
    {
      name: "Dosing Systems",
      description: "Precise, controlled injection of chemicals into the water stream.",
      features: "Skid-mounted packages with diaphragm pumps (0.1 LPH – 500 LPH) for adding antiscalant, chlorine, coagulants, or pH correction agents."
    },
    {
      name: "Ozonation Systems",
      description: "On-site generation of ozone for powerful oxidation and disinfection.",
      features: "Used in high-demand applications like packaged drinking water, swimming pools, and the food & beverage industry, featuring SS/FRP contact tanks."
    },
    {
      name: "UV Systems",
      description: "Final, chemical-free disinfection using high-intensity ultraviolet light.",
      features: "Reliable pathogen elimination (UV Dose: 30-40 mJ/cm²) in projects requiring final assurance, such as RO, DM, mineral water, and beverage production."
    }
  ]

  const coreBenefits = [
    "Powerful Disinfection: Achieves 99.9% elimination of bacteria, viruses, and pathogens",
    "Chemical-Free: UV and Ozone methods leave no harmful residues or by-products",
    "Fast Acting: Provides rapid disinfection with immediate results",
    "Eco-Friendly: Utilizes environmentally safe treatment methods"
  ]

  const benefits = [
    "Complete disinfection solution",
    "Multiple treatment options",
    "High efficiency rates",
    "Environmental safety",
    "Quick treatment time",
    "Versatile applications"
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">Dosing, Ozonation & UV Systems</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Complete water treatment solutions for disinfection, oxidation, and precise chemical control
                </p>
              </div>

              <div>
                <MediaGallery items={mediaItems} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Key Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specs.map((spec, idx) => (
                <div key={idx} className="p-8 rounded-lg border border-border bg-background hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-muted-foreground mb-3 text-sm uppercase tracking-wide">{spec.label}</h3>
                  <p className="text-3xl font-bold text-secondary">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">System Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {systems.map((system, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <Zap className="w-6 h-6 text-secondary mb-3" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{system.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{system.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Core Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreBenefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-secondary/50 transition-colors">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <p className="text-sm font-medium text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card hover:border-secondary/50 transition-colors">
                  <Check className="w-6 h-6 text-secondary mb-3" />
                  <p className="text-sm font-medium text-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}