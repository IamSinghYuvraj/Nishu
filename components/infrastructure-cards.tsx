"use client"

import { CheckCircle } from "@/components/icons"

const infrastructureItems = [
  {
    title: "Advanced Purification Systems",
    description:
      "State-of-the-art design and development of advanced water purification systems with latest technology",
  },
  {
    title: "Reverse Osmosis Technology",
    description: "Cutting-edge membrane process for superior water treatment and mineral water production",
  },
  {
    title: "Ultra Filtration Systems",
    description: "Advanced membrane filtration technology for precision water treatment applications",
  },
  {
    title: "Micron-Filtration",
    description: "High-efficiency filtration systems for specialized industrial and commercial use",
  },
  {
    title: "Water Softening & De-mineralization",
    description: "Specialized systems for removing minerals and hardness from water sources",
  },
  {
    title: "UV & Ionization Systems",
    description: "Chemical-free disinfection and purification technologies for safe water treatment",
  },
]

export default function InfrastructureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {infrastructureItems.map((item, index) => (
        <div
          key={index}
          className="group p-6 rounded-lg border border-border bg-background hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
          <div className="relative">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
