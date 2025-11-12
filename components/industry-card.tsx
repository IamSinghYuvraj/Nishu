"use client"

import { useState } from "react"

interface IndustryCardProps {
  icon: string
  title: string
  description: string
}

export function IndustryCard({ icon, title, description }: IndustryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative p-6 rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-secondary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="text-4xl mb-4 transform transition-transform duration-500 group-hover:scale-110">{icon}</div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  )
}

export default IndustryCard
