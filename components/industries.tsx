import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  Factory,
  FlaskConical,
  HardHat,
  House,
  Microscope,
  Pill,
  School,
  Shirt,
  Stethoscope,
  Utensils,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { INDUSTRIES } from "@/lib/industries"

// Icon per industry slug. Keep in step with INDUSTRIES in lib/industries.ts.
const ICONS: Record<string, React.ReactNode> = {
  pharmaceutical: <Pill className="w-6 h-6 text-cyan-700" />,
  "food-beverage": <Utensils className="w-6 h-6 text-cyan-700" />,
  "residential-societies": <House className="w-6 h-6 text-cyan-700" />,
  hospitality: <Building2 className="w-6 h-6 text-cyan-700" />,
  hospitals: <Stethoscope className="w-6 h-6 text-cyan-700" />,
  manufacturing: <Factory className="w-6 h-6 text-cyan-700" />,
  chemical: <FlaskConical className="w-6 h-6 text-cyan-700" />,
  textile: <Shirt className="w-6 h-6 text-cyan-700" />,
  "power-generation": <Zap className="w-6 h-6 text-cyan-700" />,
  laboratories: <Microscope className="w-6 h-6 text-cyan-700" />,
  "schools-offices": <School className="w-6 h-6 text-cyan-700" />,
  construction: <HardHat className="w-6 h-6 text-cyan-700" />,
}

// The homepage shows the first six; the rest are one click away.
const FEATURED = INDUSTRIES.slice(0, 6)

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
          {FEATURED.map((industry) => (
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
                  <CardTitle className="text-xl group-hover:text-cyan-700 transition-colors">
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

        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-medium text-cyan-700 hover:underline"
          >
            See all {INDUSTRIES.length} industries we serve
            <ArrowRight className="w-4 h-4" />
          </Link>
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
