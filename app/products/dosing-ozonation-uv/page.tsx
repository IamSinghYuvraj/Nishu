import { Navigation } from "@/components/navigation"
import { Check } from "@/components/icons"
import Link from "next/link"
import { MediaGallery, type MediaItem } from "@/components/media-gallery"

export default function DosingOzonationUVPage() {
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/Ozone_system(3).jpg", title: "Ozone System 1" },
    { type: "image", src: "/Ozone-System(1).jpg", title: "Ozone System 2" },
    { type: "image", src: "/Ozone-system(2).jpg", title: "Ozone System 3" },
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
                  These systems are an integral part of advanced water treatment, providing powerful disinfection, oxidation, and precise chemical control for the highest water quality.
                </p>
                
              </div>

              <div>
                <MediaGallery items={mediaItems} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Core Benefits</h2>
            <p className="text-lg text-muted-foreground mb-12">Clean, Safe, and Efficient Water Treatment:</p>
            
            <div className="grid gap-6">
              {coreBenefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Product Overview</h2>
            <p className="text-lg text-muted-foreground mb-12">Our targeted functionality solutions for comprehensive water treatment:</p>
            
            <div className="grid gap-8">
              {systems.map((system, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{system.name}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-muted-foreground mb-2">Primary Function</h4>
                      <p className="text-foreground">{system.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-muted-foreground mb-2">Key Features & Application</h4>
                      <p className="text-foreground">{system.features}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <section className="bg-card py-16 md:py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex gap-4 p-4 hover:bg-background rounded-lg">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <p className="text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}