import { Building2, Droplets, Factory, Utensils, Hospital, Home, Leaf, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type IndustryCardProps = {
  title: string
  description: string
  icon: React.ReactNode
}

const IndustryCard = ({ title, description, icon }: IndustryCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-secondary/50 group">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export const Industries = () => {
  const industries = [
    {
      title: "Municipal Water",
      description: "Clean and safe drinking water solutions for cities and communities.",
      icon: <Droplets className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Industrial",
      description: "Custom water treatment solutions for manufacturing and processing plants.",
      icon: <Factory className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Healthcare",
      description: "Ultra-pure water systems for hospitals and medical facilities.",
      icon: <Hospital className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Hospitality",
      description: "Water purification systems for hotels, resorts, and restaurants.",
      icon: <Utensils className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Commercial",
      description: "Water treatment solutions for offices, malls, and commercial complexes.",
      icon: <Building2 className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Residential",
      description: "Home water purification and softening systems for healthier living.",
      icon: <Home className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Renewable Energy",
      description: "Water treatment for solar and other renewable energy plants.",
      icon: <Zap className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Agriculture",
      description: "Irrigation water treatment and management solutions.",
      icon: <Leaf className="w-6 h-6 text-secondary" />,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering cutting-edge water treatment solutions across diverse sectors with customized approaches for each industry's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
            />
          ))}
        </div>

        <div className="mt-12 bg-linear-to-r from-primary/5 to-secondary/5 border border-border rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Custom Solutions for Every Need</h3>
            <p className="text-muted-foreground mb-6">
              Don't see your industry listed? Our team specializes in developing bespoke water treatment solutions tailored to your specific requirements and challenges.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 transition-colors duration-300"
            >
              Get a Custom Solution
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
