"use client";

import Image from "next/image";
import {
  Beaker,
  Factory,
  Truck,
  Building2,
  HardHat,
  Leaf,
  Hammer,
  Warehouse,
} from "lucide-react";

import AnimatedSection from "@/components/animation";
import ContactUs from "@/components/contactus";
import { Navigation } from "@/components/navigation";
import { BUSINESS } from "@/lib/site";
import { TrustBar } from "@/components/trust-bar";

const industries = [
  {
    name: "Pharmaceutical",
    icon: Beaker,
    image: "/pharma-industry.jpg",
    description: "Ultra-pure water systems for pharmaceutical manufacturing",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    image: "/manufacturing-industry.jpeg",
    description: "Industrial water treatment for manufacturing processes",
  },
  {
    name: "Food & Beverage",
    icon: Truck,
    image: "/food-beverage-industry.jpeg",
    description: "Safe water solutions for food processing",
  },
  {
    name: "Commercial",
    icon: Building2,
    image: "/commercial-industry.jpeg",
    description: "Water treatment for commercial buildings",
  },
  {
    name: "Power Generation",
    icon: HardHat,
    image: "/power-generation-industry.jpg",
    description: "Boiler feed water and cooling systems",
  },
  {
    name: "Agriculture",
    icon: Leaf,
    image: "/agriculture-industry.jpeg",
    description: "Irrigation and hydroponics water treatment",
  },
  {
    name: "Construction",
    icon: Hammer,
    image: "/construction-industry.jpeg",
    description: "Water solutions for construction projects",
  },
  {
    name: "Warehousing",
    icon: Warehouse,
    image: "/ss-storage-tanks(4).jpg",
    description: "Water management for storage facilities",
  },
];

const turnkeyProjects = [
  {
    title: "Industries / Plants / Manufacturing Units",
    description:
      "Customized water treatment solutions for industrial and manufacturing needs.",
    icon: Factory,
  },
  {
    title: "Packaged Mineral Water Manufacturers",
    description: "Advanced purification systems for mineral water production.",
    icon: Beaker,
  },
  {
    title: "Builders / Real Estate Developers",
    description:
      "Water treatment solutions for residential and commercial projects.",
    icon: Building2,
  },
  {
    title: "Housing Societies / Complexes / Townships",
    description: "Reliable water treatment for large residential communities.",
    icon: Building2,
  },
  {
    title:
      "Municipality / Government Water / Waste Water / Sewage Management Departments",
    description:
      "Comprehensive solutions for public water and sewage management.",
    icon: HardHat,
  },
  {
    title:
      "Hotels / Retail / Laundries / Swimming Pools / Parks / Hospitals / Commercial / Corporates",
    description:
      "Tailored water treatment systems for diverse commercial sectors.",
    icon: Building2,
  },
];

const applications = [
  {
    title: "Battery Water: Two Bed DM Unit",
    description: "Demineralized water systems for battery manufacturing.",
    icon: Factory,
  },
  {
    title: "Pharma Industries: Two Bed + Mixed Bed DM Unit",
    description: "Advanced water treatment for pharmaceutical production.",
    icon: Beaker,
  },
  {
    title: "Pathology Lab: Two Bed + Mixed Bed DM Unit (RO)",
    description: "Pure water systems for medical and pathology labs.",
    icon: Beaker,
  },
  {
    title: "Medical Dialysis: DM or RO Unit",
    description: "Water treatment for medical dialysis applications.",
    icon: Beaker,
  },
  {
    title: "Mineral Water: Filtration or RO Unit",
    description: "Purification systems for mineral water production.",
    icon: Beaker,
  },
  {
    title: "Cooling Tower: Softening Plant / Filter Unit",
    description: "Water treatment for cooling tower systems.",
    icon: Factory,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="overflow-x-hidden">
        <section className="on-dark page-hero py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="animate-fade-in-up">
                <p className="eyebrow">Our story · Since {BUSINESS.foundingYear}</p>
                <h1 className="mt-4 text-4xl text-foreground text-balance md:text-6xl">
                  {BUSINESS.stats.years} Years of Water Treatment Engineering
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-foreground/90">
                  Nishu Enterprises, established in 1996 in Vasai, Mumbai, is a professionally managed company engaged in manufacturing, supplying, exporting, and servicing a wide range of water treatment solutions.
                </p>
              </div>

              <div className="animate-fade-in-up [animation-delay:150ms]">
                <div className="group relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/30">
                    <Image
                      src={"/Ro-img6.jpg"}
                      alt="Nishu Enterprises RO plant installation"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="zoom-img object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 -left-3 rounded-2xl bg-lime px-5 py-4 text-ink shadow-xl sm:-left-6">
                    <p className="font-mono text-xs uppercase tracking-[0.14em]">Established</p>
                    <p className="readout text-4xl">{BUSINESS.foundingYear}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
            <AnimatedSection>
              <p className="eyebrow">Who we are</p>
              <h2 className="mt-3 text-3xl text-foreground md:text-4xl">Plants, parts and the service behind them</h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
                <p>
                  Our offerings include modern Water Treatment Plants, Reverse Osmosis (RO) Units, Demineralized Water Plants, Water Softening Units, Ozonation Systems, Desalination Plants, and complete Mineral Water Projects.
                </p>
                <p>
                  We also provide comprehensive spare parts and equipment for Water Treatment Plants, such as all types of cartridges and filters, membranes (BW, SW, UF, NF), resins, filter media (sand and carbon), pressure gauges and switches, SS fittings, and essential water treatment chemicals including antiscalants, Gramacid, and citric acid.
                </p>
                <p>
                  Over the years, we have strengthened our expertise by adopting cutting-edge technology and building a skilled team of professionals. Today, our solutions serve a wide customer base across diverse industries, including the Pharmaceutical and Food & Beverage Industry.
                </p>
                <p className="rounded-r-xl border-l-4 border-secondary bg-white px-6 py-5 font-medium text-foreground shadow-sm">
                  The company is driven by a philosophy of innovation and excellence, with a strong focus on turnkey project execution and a total system approach, ensuring reliability, efficiency, and customer satisfaction.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="eyebrow">Industries</p>
              <h2 className="mt-3 text-3xl text-foreground md:text-4xl">Industries We Serve</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Our water treatment solutions cater to diverse industrial needs,
                providing customized systems for various sectors
              </p>
            </AnimatedSection>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <AnimatedSection key={industry.name} delay={index * 70}>
                  <div className="group relative h-72 overflow-hidden rounded-2xl bg-ink">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="zoom-img object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent transition-all duration-500 group-hover:via-ink/75" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 text-lime backdrop-blur-sm transition-all duration-300 group-hover:bg-lime group-hover:text-ink">
                        <industry.icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-3 text-xl text-white">{industry.name}</h3>
                      <p className="mt-1 text-sm text-white/85">{industry.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="eyebrow">Turnkey projects</p>
              <h2 className="mt-3 text-3xl text-foreground md:text-4xl">We Undertake Turnkey Projects For</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Providing comprehensive water treatment solutions for a wide range
                of industries and applications
              </p>
            </AnimatedSection>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {turnkeyProjects.map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 70}>
                  <div className="group card-lift card-rule h-full rounded-2xl border border-border bg-card p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <project.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg text-foreground">{project.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="on-dark bg-ink py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="eyebrow">Applications</p>
              <h2 className="mt-3 text-3xl text-foreground md:text-4xl">Applications for Water Treatment Plants</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Specialized water treatment solutions for various applications
              </p>
            </AnimatedSection>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {applications.map((application, index) => {
                const [use, unit] = application.title.split(": ");
                return (
                  <AnimatedSection key={application.title} delay={index * 70}>
                    <div className="group card-rule h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-bright/50 hover:bg-accent">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-lime transition-all duration-300 group-hover:scale-110 group-hover:bg-lime group-hover:text-ink">
                        <application.icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 text-xl text-foreground">{use}</h3>
                      {unit && <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-lime">{unit}</p>}
                      <p className="mt-3 leading-relaxed text-muted-foreground">{application.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <ContactUs />
      </div>
    </>
  );
}
