import Link from "next/link"
import Image from "next/image"
import { Building2, Factory, Utensils, Hospital, HardHat, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { INDUSTRIES } from "@/lib/industries"

// Icon per industry slug. Keep in step with INDUSTRIES in lib/industries.ts.
const ICONS: Record<string, React.ReactNode> = {
  pharmaceutical: <Hospital className="w-6 h-6 text-primary" />,
  "food-beverage": <Utensils className="w-6 h-6 text-primary" />,
  "power-generation": <Zap className="w-6 h-6 text-primary" />,
  manufacturing: <Factory className="w-6 h-6 text-primary" />,
  hospitality: <Building2 className="w-6 h-6 text-primary" />,
  construction: <HardHat className="w-6 h-6 text-primary" />,
}

export const Industries = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Water is a different problem in every sector. Each of these pages sets out how we
            approach it — and what we need from you to quote accurately.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group">
              <Card className="h-full overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {ICONS[industry.slug]}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{industry.cardBlurb}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-linear-to-r from-primary/5 to-primary/5 border border-border rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Custom Solutions for Every Need</h3>
            <p className="text-muted-foreground mb-6">
              Don't see your industry listed? Our team specializes in developing bespoke water treatment solutions tailored to your specific requirements and challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              Get a Custom Solution
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
