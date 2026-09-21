"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
];

export function ProductsGrid() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="bg-linear-to-br from-secondary/5 to-secondary/10 border-b border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our complete range of water treatment plants, components and
              bottling machinery, manufactured and supplied since 1996.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, idx) => (
                <AnimatedSection key={product.href} delay={idx * 75}>
                  <Link href={product.href} className="group block h-full">
                    <Card className="h-full overflow-hidden transition-transform hover:scale-105 border-0 shadow-lg relative bg-white">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-2">
                          <span>{product.title}</span>
                          <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardContent>
                    </Card>
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
