"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Shield,
  Leaf,
  Play,
  Heart,
  Clock,
  Globe,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientLogos } from "@/components/client-logos";
import { Industries } from "@/components/industries";
import ContactUs from "@/components/contactus";
import AnimatedSectionPage from "@/components/animation";
import { Navigation } from "@/components/navigation";
import { TreatmentTrain } from "@/components/treatment-train";
import { GlobalPresence } from "@/components/global-presence";
import { BUSINESS, PRODUCTS } from "@/lib/site";
import { COUNTRIES_LINE, FEATURED_COUNTRIES } from "@/lib/countries";

const HERO_SLIDES = [
  { src: "/Ro-img6.jpg", alt: "Industrial RO plant installed by Nishu Enterprises", caption: "Industrial RO plant" },
  { src: "/DM image 1.jpg", alt: "Demineralization (DM) plant by Nishu Enterprises", caption: "Two-bed DM plant" },
  { src: "/Commercial-Water-Treatment-Plant.jpg", alt: "Commercial water treatment plant by Nishu Enterprises", caption: "Commercial treatment plant" },
];

const REASONS = [
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description:
      "State-of-the-art water treatment solutions using cutting-edge technology for optimal performance",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control and testing procedures to ensure reliable and efficient water treatment",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Sustainable solutions that minimize environmental impact while maximizing efficiency",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description:
      "We prioritize customer satisfaction with personalized solutions and dedicated support",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We ensure on-time delivery of products and services to meet your project deadlines",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "Our products and services meet international quality and environmental standards",
  },
];

// Homepage product showcase. The first item takes the large tile.
const FEATURED_SLUGS = [
  "reverse-osmosis",
  "demineralized",
  "water-softening",
  "mineral-water-project",
  "dosing-ozonation-uv",
  "rfc",
];
const FEATURED_BLURBS: Record<string, string> = {
  "reverse-osmosis": "Advanced reverse osmosis systems, from commercial units to 10,000+ LPH industrial plants.",
  demineralized: "Demineralization plants for pure water: boiler feed, pharma and process.",
  "water-softening": "Industrial and commercial water softening systems.",
  "mineral-water-project": "Turnkey packaged drinking water plants, raw water to sealed bottle.",
  "dosing-ozonation-uv": "Ozone generators, UV sterilisers and chemical dosing.",
  rfc: "Automatic rinsing, filling and capping for bottling lines.",
};

const VIDEOS = [
  {
    id: "video-1",
    title: "Complete Mineral Water Project",
    description: "Step-by-step guide to setting up a complete mineral water project",
    thumbnail: "/Complete-Mineral-Water-Project(5).webp",
    href: "/products/mineral-water-project",
  },
  {
    id: "video-2",
    title: "Ozone System",
    description: "Explore the features and applications of our ozone systems.",
    thumbnail: "/Ozone-system(4).png",
    href: "/products/dosing-ozonation-uv",
  },
  {
    id: "video-3",
    title: "Mineral Water Plant Installation",
    description: "Complete setup and installation of mineral water production systems",
    thumbnail: "/Mineral-Water-Plant(2).webp",
    href: "/products/mineral-water-project",
  },
];

const Home: React.FC = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slide]);


  const featured = FEATURED_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="on-dark relative isolate flex min-h-[calc(100svh-4.5rem)] w-full flex-col overflow-hidden bg-ink">
        <div className="absolute inset-0 -z-10">
          {HERO_SLIDES.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ${index === slide ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className={`object-cover transition-transform duration-[7000ms] ease-out ${index === slide ? "scale-110" : "scale-100"}`}
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/30" />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto flex w-full flex-1 items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow animate-fade-in-up">
              RO &amp; Water Treatment Plant Manufacturer · Since {BUSINESS.foundingYear}
            </p>
            <h1 className="mt-6 text-5xl text-white animate-fade-in-up [animation-delay:120ms] sm:text-6xl lg:text-[5.25rem]">
              Pure Water,
              <br />
              <span className="text-lime">Perfectly Engineered</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 animate-fade-in-up [animation-delay:240ms] md:text-xl">
              RO plants, DM plants, water softeners and complete mineral water projects, designed and built in Vasai, Mumbai since {BUSINESS.foundingYear} - with plants running in {COUNTRIES_LINE}.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:360ms]">
              <Button asChild size="lg" variant="cta" className="group">
                <Link href="/contact">
                  Get a quotation
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-ink">
                <Link href="/products">Explore products</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-4 animate-fade-in-up [animation-delay:480ms]" aria-label="Plant photos">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setSlide(i)}
                  aria-label={`Show ${s.caption}`}
                  aria-current={i === slide}
                  className="group relative h-1 w-12 overflow-hidden rounded-full bg-white/25"
                >
                  {i === slide && (
                    <span key={slide} className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-lime animate-[grow-x_6s_linear_forwards]" />
                  )}
                </button>
              ))}
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
                {HERO_SLIDES[slide].caption}
              </span>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/10 bg-ink-deep/70 backdrop-blur-md">
          <dl className="max-w-7xl mx-auto grid grid-cols-1 px-4 sm:px-6 md:grid-cols-[auto_1.3fr_1fr] lg:px-8">
            <div className="group py-6 md:py-8 md:pr-10">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/65">Established</dt>
              <dd className="readout mt-2 text-4xl text-white transition-colors duration-300 group-hover:text-lime md:text-5xl">
                {BUSINESS.foundingYear}
              </dd>
            </div>
            <div className="group border-t border-white/10 py-6 md:border-l md:border-t-0 md:py-8 md:pl-8">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/65">Plants running in</dt>
              <dd className="mt-3 text-lg font-semibold text-white md:text-2xl">
                <span className="transition-colors duration-300 group-hover:text-lime">{FEATURED_COUNTRIES.join(" · ")}</span>
                <span className="text-white/65"> &amp; many more</span>
              </dd>
            </div>
            <div className="group border-t border-white/10 py-6 md:border-l md:border-t-0 md:py-8 md:pl-8">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/65">Trusted by</dt>
              <dd className="mt-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-lime md:text-2xl">
                Bisleri · Bailey · Campa · McDonald&apos;s
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <ClientLogos compact />

      {/* How a plant works: the interactive treatment train */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionPage>
            <div className="mb-12 grid items-end gap-6 lg:grid-cols-2">
              <div>
                <p className="eyebrow">How a plant works</p>
                <h2 className="mt-4 text-4xl text-foreground text-balance md:text-5xl">
                  Follow the water through a plant
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A typical train for a packaged drinking water plant fed from a borewell. Select a
                stage to see what it takes out, and what the water reads when it leaves.
              </p>
            </div>
            <TreatmentTrain />
            <div className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
              <p>Readings are typical for a borewell feed and shown for illustration. Your water analysis decides the actual train.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/products/demineralized" className="chip-link">
                  Need boiler or pharma-grade water? DM plants
                </Link>
                <Link href="/products/mineral-water-project" className="chip-link">
                  The whole train, turnkey
                </Link>
              </div>
            </div>
          </AnimatedSectionPage>
        </div>
      </section>

      {/* Featured products: bento grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionPage>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Featured products</p>
                <h2 className="mt-4 text-4xl text-foreground md:text-5xl">Plants we design and build</h2>
                <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                  Explore our range of high-quality water treatment solutions
                </p>
              </div>
              <Link href="/products" className="link-arrow shrink-0 text-base">
                View all {PRODUCTS.length} products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSectionPage>

          <div className="grid auto-rows-[15rem] gap-4 sm:grid-cols-2 md:auto-rows-[17rem] lg:grid-cols-4">
            {featured.map((product, i) => (
              <AnimatedSectionPage
                key={product.slug}
                delay={i * 80}
                className={
                  i === 0
                    ? "sm:col-span-2 sm:row-span-2"
                    : i === 3
                      ? "sm:col-span-2"
                      : ""
                }
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl bg-ink"
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"}
                    className="zoom-img object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent transition-opacity duration-500 group-hover:from-ink group-hover:via-ink/70" />
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:bg-lime group-hover:text-ink">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className={`text-white ${i === 0 ? "text-3xl md:text-4xl" : "text-xl"}`}>{product.name}</h3>
                    <p
                      className={`mt-2 max-w-md text-sm leading-relaxed text-white/85 transition-all duration-500 ${
                        i === 0
                          ? "md:text-base"
                          : "max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100"
                      }`}
                    >
                      {FEATURED_BLURBS[product.slug]}
                    </p>
                  </div>
                </Link>
              </AnimatedSectionPage>
            ))}
            <AnimatedSectionPage delay={featured.length * 80} className="sm:col-span-2">
              <Link
                href="/products"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-lime p-6 text-ink transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em]">Also from our workshop</p>
                    <h3 className="mt-2 text-2xl md:text-3xl">All {PRODUCTS.length} products</h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-lime transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {PRODUCTS.filter((p) => !FEATURED_SLUGS.includes(p.slug)).map((p) => (
                    <li key={p.slug} className="rounded-full border border-ink/25 px-3 py-1 text-sm font-medium">
                      {p.name}
                    </li>
                  ))}
                </ul>
              </Link>
            </AnimatedSectionPage>
          </div>
        </div>
      </section>

      {/* Story + reasons: dark band */}
      <section className="on-dark relative overflow-hidden bg-ink py-20 md:py-28">
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-cyan-bright/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <AnimatedSectionPage>
              <div className="relative">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[4/5]">
                  <Image
                    src="/Ro-img6.jpg"
                    alt="Industrial reverse osmosis plant manufactured by Nishu Enterprises"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="zoom-img object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 rounded-2xl bg-lime px-6 py-5 text-ink shadow-xl sm:left-auto sm:right-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em]">Established</p>
                  <p className="readout text-5xl">{BUSINESS.foundingYear}</p>
                </div>
              </div>
            </AnimatedSectionPage>

            <AnimatedSectionPage delay={120}>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-4 text-4xl text-foreground text-balance md:text-5xl">
                Water Treatment Engineering Since {BUSINESS.foundingYear}
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-foreground">
                Nishu Enterprises, established in 1996, is a professionally managed company engaged in manufacturing, supplying, exporting, and servicing a wide range of water treatment solutions.
              </p>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Our offerings include modern Water Treatment Plants, Reverse Osmosis (RO) Units, Demineralized Water Plants, Water Softening Units, Ozonation Systems, Desalination Plants, and complete Mineral Water Projects.
                </p>
                <p>
                  We also provide comprehensive spare parts and equipment for Water Treatment Plants, such as all types of cartridges and filters, membranes (BW, SW, UF, NF), resins, filter media (sand and carbon), pressure gauges and switches, SS fittings, and essential water treatment chemicals including antiscalants, Gramacid, and citric acid.
                </p>
                <p>
                  Over the years, we have strengthened our expertise by adopting cutting-edge technology and building a skilled team of professionals. Today, our solutions serve a wide customer base across diverse industries, including the Pharmaceutical and Food & Beverage Industry.
                </p>
                <p>
                  The company is driven by a philosophy of innovation and excellence, with a strong focus on turnkey project execution and a total system approach, ensuring reliability, efficiency, and customer satisfaction.
                </p>
              </div>
              <Link href="/about" className="link-arrow mt-8 text-lime">
                Read our full story <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSectionPage>
          </div>

          <div className="mt-24">
            <AnimatedSectionPage>
              <p className="eyebrow">Why us</p>
              <h2 className="mt-4 text-3xl text-foreground md:text-4xl">6 Reasons to Choose Us</h2>
            </AnimatedSectionPage>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {REASONS.map((card, index) => (
                <AnimatedSectionPage key={card.title} delay={index * 70}>
                  <div className="card-rule group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-bright/50 hover:bg-accent">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-lime transition-all duration-300 group-hover:scale-110 group-hover:bg-lime group-hover:text-ink">
                      <card.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl text-foreground">{card.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{card.description}</p>
                  </div>
                </AnimatedSectionPage>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries - internal links into every industry page */}
      <Industries />

      {/* Countries with our plants, on a spinning globe */}
      <GlobalPresence />

      {/* Featured videos */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionPage>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Featured videos</p>
                <h2 className="mt-4 text-4xl text-foreground md:text-5xl">See our plants running</h2>
                <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                  Watch our product demonstrations and installation guides
                </p>
              </div>
            </div>
          </AnimatedSectionPage>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video, i) => (
              <AnimatedSectionPage key={video.id} delay={i * 80}>
                <Link href={video.href} className="group card-lift block h-full overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-video overflow-hidden bg-ink">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="zoom-img object-cover"
                    />
                    <div className="absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/50" />
                    <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-secondary shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white">
                      <span className="absolute inset-0 rounded-full bg-white/60 animate-ping-soft" aria-hidden="true" />
                      <Play className="relative ml-1 h-6 w-6 fill-current" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-foreground transition-colors group-hover:text-primary">{video.title}</h3>
                    <p className="mt-2 text-muted-foreground">{video.description}</p>
                  </div>
                </Link>
              </AnimatedSectionPage>
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default Home;
