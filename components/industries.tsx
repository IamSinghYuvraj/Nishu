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
import { INDUSTRIES } from "@/lib/industries"

// Icon per industry slug. Keep in step with INDUSTRIES in lib/industries.ts.
const ICONS: Record<string, React.ReactNode> = {
  pharmaceutical: <Pill className="w-6 h-6 text-primary" />,
  "food-beverage": <Utensils className="w-6 h-6 text-primary" />,
  "residential-societies": <House className="w-6 h-6 text-primary" />,
  hospitality: <Building2 className="w-6 h-6 text-primary" />,
  hospitals: <Stethoscope className="w-6 h-6 text-primary" />,
  manufacturing: <Factory className="w-6 h-6 text-primary" />,
  chemical: <FlaskConical className="w-6 h-6 text-primary" />,
  textile: <Shirt className="w-6 h-6 text-primary" />,
  "power-generation": <Zap className="w-6 h-6 text-primary" />,
  laboratories: <Microscope className="w-6 h-6 text-primary" />,
  "schools-offices": <School className="w-6 h-6 text-primary" />,
  construction: <HardHat className="w-6 h-6 text-primary" />,
}

// The homepage shows the first six; the rest are one click away.
const FEATURED = INDUSTRIES.slice(0, 6)

export const Industries = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl">Industries We Serve</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Water is a different problem in every sector. Each of these pages sets out how we
            approach it — and what we need from you to quote accurately.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group card-lift card-rule flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    className="zoom-img object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-xl border-4 border-white bg-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-lime">
                  {ICONS[industry.slug]}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 pt-10">
                <h3 className="text-xl text-foreground transition-colors group-hover:text-primary">{industry.name}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{industry.cardBlurb}</p>
                <span className="link-arrow mt-5 text-sm">
                  How we treat it <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-mist p-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h3 className="text-2xl text-foreground">Custom Solutions for Every Need</h3>
            <p className="mt-2 text-muted-foreground">
              Don&apos;t see your industry listed? Our team specializes in developing bespoke water treatment solutions tailored to your specific requirements and challenges.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-3 font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
            >
              All {INDUSTRIES.length} industries
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Get a Custom Solution
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
