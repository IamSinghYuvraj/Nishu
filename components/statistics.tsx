import { CheckCircle, Globe, Users, Award } from "lucide-react"

type StatCardProps = {
  value: string
  label: string
  icon: React.ReactNode
}

const StatCard = ({ value, label, icon }: StatCardProps) => (
  <div className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-lg transition-all duration-300 group">
    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-4xl font-bold text-foreground mb-2">{value}</h3>
    <p className="text-muted-foreground">{label}</p>
  </div>
)

export const Statistics = () => {
  const stats = [
    {
      value: "200+",
      label: "Projects Completed",
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
    },
    {
      value: "15+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8 text-secondary" />,
    },
    {
      value: "500+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8 text-secondary" />,
    },
  ]

  return (
    <section className="py-12 bg-linear-to-r from-primary/5 to-secondary/5 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
