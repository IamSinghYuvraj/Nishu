"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import ContactUs from "@/components/contactus";
import AnimatedSection from "@/components/animation";

const products = [
  {
    title: "Reverse Osmosis Plant (RO)",
    description:
      "RO systems that reduce TDS and remove impurities from brackish or saline water for commercial and industrial needs.",
    image: "/ro-img11.jpeg",
    href: "/products/reverse-osmosis",
  },
  {
    title: "Demineralized Plant (DM)",
    description:
      "Two-bed and mixed-bed DM plants delivering high-purity water for boilers, pharma and process industries.",
    image: "/DM image 1.jpg",
    href: "/products/demineralized",
  },
  {
    title: "Water Softening Plant",
    description:
      "Softeners that remove hardness-causing minerals, protecting equipment and improving efficiency.",
    image: "/Water-Softening-Plant.jpg",
    href: "/products/water-softening",
  },
  {
    title: "Membrane Housing",
    description:
      "FRP and SS membrane housings plus high-pressure pumps for reliable, cost-effective RO operation.",
    image: "/membrane-Housing(1).jpg",
    href: "/products/membrane-housing",
  },
  {
    title: "Specially Fabricated SS & MS Vessel/Tanks",
    description:
      "Custom stainless-steel and mild-steel vessels and storage tanks built for secure, high-capacity storage.",
    image: "/ss-storage-tank(5).png",
    href: "/products/fabricated-vessels",
  },
  {
    title: "Complete Mineral Water Project",
    description:
      "End-to-end turnkey packaged drinking water plants, from raw water treatment to bottling and packaging.",
    image: "/Complete-Mineral-Water-Project(5).webp",
    href: "/products/mineral-water-project",
  },
  {
    title: "Dosing, Ozonation & UV Systems",
    description:
      "Disinfection, oxidation and precise chemical dosing systems for the highest water quality.",
    image: "/Ozone_system(3).jpg",
    href: "/products/dosing-ozonation-uv",
  },
  {
    title: "Rinsing Filling Capping Machine (RFC)",
    description:
      "Automatic RFC machines for hygienic, high-speed bottling of packaged drinking water and beverages.",
    image: "/rfc(1).webp",
    href: "/products/rfc",
  },
  {
    title: "Desalination Plant",
    description:
      "Seawater and brackish water desalination plants using RO, with pre-treatment and remineralisation.",
    image: "/ro-img7.jpg",
    href: "/products/desalination",
  },
  {
    title: "RO Spares & Consumables",
    description:
      "RO membranes, ion exchange resins, cartridges, filter media, gauges, fittings and antiscalants.",
    image: "/DM image 3.jpeg",
    href: "/products/spares-consumables",
  },
  {
    title: "AMC & Plant Maintenance",
    description:
      "Annual maintenance contracts for RO, DM and softening plants, with scheduled service and genuine spares.",
    image: "/Ro-img3.jpg",
    href: "/products/amc-maintenance",
  },
];

export function ProductsGrid() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="on-dark page-hero py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Products · {products.length} systems</p>
            <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl text-balance mb-6 text-foreground">
              Water Treatment Plants &amp; Equipment
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              RO plants, DM plants, water softeners, desalination plants, mineral water
              projects and bottling machinery, plus the spares and maintenance that keep them
              running. Manufactured in Vasai, Mumbai since 1996.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, idx) => (
                <AnimatedSection key={product.href} delay={idx * 75}>
                  <Link
                    href={product.href}
                    className="group card-lift card-rule flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="zoom-img object-cover"
                      />
                      <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-lime">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-xl text-foreground transition-colors group-hover:text-primary">{product.title}</h2>
                      <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{product.description}</p>
                      <span className="link-arrow mt-5 text-sm">
                        Specifications &amp; range <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <ContactUs />
      </main>
    </div>
  );
}
