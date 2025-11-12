"use client"

import { useState } from "react"

interface MethodologyStep {
  number: string
  title: string
  description: string
}

export function MethodologySteps() {
  const steps: MethodologyStep[] = [
    {
      number: "01",
      title: "Understand Requirements",
      description: "We try & understand what the clients exactly want and their specific needs",
    },
    {
      number: "02",
      title: "Analyze Water Source",
      description: "Thoroughly analyze water source and devise a treatment technique accordingly",
    },
    {
      number: "03",
      title: "Engineering & Design",
      description: "Engineering the plant and producing an advanced purification system",
    },
    {
      number: "04",
      title: "Superior Solution",
      description: "Deliver a comprehensive solution that surpasses industry counterparts",
    },
  ]

  const [activeStep, setActiveStep] = useState(0)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-lg border border-border bg-card cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50"
            onMouseEnter={() => setActiveStep(index)}
          >
            <div className="absolute inset-0 bg-linear-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

            <div className="relative z-10">
              <div className="text-5xl font-bold text-secondary/20 mb-3 group-hover:text-secondary/40 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {step.description}
              </p>
            </div>

            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-secondary to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MethodologySteps
