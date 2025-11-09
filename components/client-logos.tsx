"use client"

import { useEffect, useState } from "react"

export function ClientsCarousel() {
  const [isAutoplay, setIsAutoplay] = useState(true)

  const clients = [
    { name: "Dr. Reddy's Laboratories", location: "Hyderabad, Andhra Pradesh" },
    { name: "Larsen and Tubro Limited", location: "Surat, Gujarat" },
    { name: "Galva Decoparts Private Limited", location: "Gujarat" },
  ]

  useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      // Carousel animation handled via CSS
    }, 4000)
    return () => clearInterval(timer)
  }, [isAutoplay])

  return (
    <section className="py-16 md:py-24 bg-primary/5 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Trusted Clients</h2>
          <p className="text-muted-foreground">Partnering with industry leaders across diverse sectors</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8 md:gap-12">
            {/* First set of clients */}
            {clients.map((client, idx) => (
              <div
                key={`client-1-${idx}`}
                className="shrink-0 w-full sm:w-1/2 md:w-1/3 p-6 bg-card rounded-lg border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.location}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, idx) => (
              <div
                key={`client-2-${idx}`}
                className="shrink-0 w-full sm:w-1/2 md:w-1/3 p-6 bg-card rounded-lg border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.location}</p>
              </div>
            ))}
          </div>

          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-12 h-full bg-linear-to-r from-primary/5 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
