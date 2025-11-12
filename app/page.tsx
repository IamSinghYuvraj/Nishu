"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  Shield,
  Leaf,
  Play,
  Heart,
  Clock,
  Globe,
  MapPin,
  Factory,
  Users,
  ChevronRight,
} from "lucide-react";
import { ClientLogos } from "@/components/client-logos";
import ContactUs from "@/components/contactus";
import AnimatedSectionPage from "@/components/animation";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

// Define types for the data structures
interface GlobalStat {
  icon: React.ReactNode;
  count: number;
  label: string;
}

const Home: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const globalStats: GlobalStat[] = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      count: 45,
      label: "Countries",
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      count: 1200,
      label: "Plants Installed",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      count: 3500,
      label: "Clients Worldwide",
    },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {["/Ro-img6.jpg", "/DM image 1.jpg", "/Commercial-Water-Treatment-Plant.jpg"].map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Water treatment facility ${index + 1}`}
                fill
                className="object-cover brightness-50"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-primary/40" />
        <div className="container relative flex min-h-screen items-center pt-20">
          <div className="max-w-2xl animate-slide-in pl-5">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Pure Water,
              <br />
              <span className="text-accent">Perfectly Engineered</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Leading manufacturer of water treatment and purification systems, serving industries worldwide with innovative solutions
            </p>
            <div className="mt-8 flex gap-4">
              <Button
                asChild
                size="lg"
              >
                <Link href="/products">Our Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-linear-to-br from-white via-gray-50 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Story Text */}
              <div className="flex-1">
                <div className="text-center md:text-left mb-10">
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <div className="w-16 h-1 bg-primary mx-auto md:mx-0"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nishu Enterprises, established in 1996, is a professionally managed company engaged in manufacturing, supplying, exporting, and servicing a wide range of water treatment solutions.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our offerings include modern Water Treatment Plants, Reverse Osmosis (RO) Units, Demineralized Water Plants, Water Softening Units, Ozonation Systems, Desalination Plants, and complete Mineral Water Projects.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We also provide comprehensive spare parts and equipment for Water Treatment Plants, such as all types of cartridges and filters, membranes (BW, SW, UF, NF), resins, filter media (sand and carbon), pressure gauges and switches, SS fittings, and essential water treatment chemicals including antiscalants, Gramacid, and citric acid.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Over the years, we have strengthened our expertise by adopting cutting-edge technology and building a skilled team of professionals. Today, our solutions serve a wide customer base across diverse industries, including the Pharmaceutical and Food & Beverage Industry.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The company is driven by a philosophy of innovation and excellence, with a strong focus on turnkey project execution and a total system approach, ensuring reliability, efficiency, and customer satisfaction.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/about"
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative h-96">
                  <div className="absolute -inset-4 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70"></div>
                  <Image
                    src="/Ro-img6.jpg"
                    alt="Water treatment facility"
                    fill
                    className="rounded-lg shadow-lg relative object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* Global Presence Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-linear-to-tl from-white via-primary/5 to-secondary/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-white to-transparent"></div>
          <div className="absolute -left-32 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
              <p className="text-muted-foreground">Serving clients across the world with excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {globalStats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white border border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.count}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* 6 Reasons to Choose Us Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-linear-to-br from-white via-gray-50 to-primary/10 relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-bl from-secondary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                6 Reasons to Choose Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Discover why we are the preferred choice for water treatment solutions
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: "Advanced Technology",
                  description:
                    "State-of-the-art water treatment solutions using cutting-edge technology for optimal performance",
                  color: "from-blue-500 to-purple-600",
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Quality Assurance",
                  description:
                    "Rigorous quality control and testing procedures to ensure reliable and efficient water treatment",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  icon: <Leaf className="h-8 w-8" />,
                  title: "Eco-Friendly",
                  description:
                    "Sustainable solutions that minimize environmental impact while maximizing efficiency",
                  color: "from-yellow-500 to-amber-600",
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Customer-Centric",
                  description:
                    "We prioritize customer satisfaction with personalized solutions and dedicated support",
                  color: "from-red-500 to-pink-600",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Timely Delivery",
                  description:
                    "We ensure on-time delivery of products and services to meet your project deadlines",
                  color: "from-indigo-500 to-blue-600",
                },
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Global Standards",
                  description:
                    "Our products and services meet international quality and environmental standards",
                  color: "from-purple-500 to-indigo-600",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${card.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  ></div>
                  <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="relative z-10 transition-all duration-300 group-hover:-translate-y-2">
                    <div
                      className={`inline-flex p-3 rounded-full bg-linear-to-br ${card.color} text-white shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* Featured Products Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-linear-to-tr from-muted via-muted/50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white to-transparent"></div>
          <div className="absolute -left-32 top-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-32 bottom-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="mt-4 text-muted-foreground">
                Explore our range of high-quality water treatment solutions
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Water Softeners",
                  description: "Industrial and commercial water softening systems",
                  image: "/Water-Softening-Plant.jpg",
                  href: "/products/water-softening",
                },
                {
                  title: "RO Systems",
                  description: "Advanced reverse osmosis systems",
                  image: "/ro-img11.jpeg",
                  href: "/products/reverse-osmosis",
                },
                {
                  title: "DM Plants",
                  description: "Demineralization plants for pure water",
                  image: "/DM image 3.jpeg",
                  href: "/products/demineralized",
                },
              ].map((product) => (
                <Link key={product.title} href={product.href} className="group">
                  <Card className="overflow-hidden transition-transform hover:scale-105 border-0 shadow-lg relative bg-white">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative aspect-video bg-linear-to-br from-secondary/10 to-primary/10 flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="relative">
                      <CardTitle>{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground">
                        {product.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* Featured Videos Section */}
      <AnimatedSectionPage>
        <section className="w-full py-24 bg-linear-to-bl from-white via-gray-50 to-primary/5 relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-linear-to-bl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-linear-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Featured Videos</h2>
              <p className="mt-4 text-muted-foreground">
                Watch our product demonstrations and installation guides
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "video-1",
                  title: "Complete Mineral Water Project",
                  description:
                    "Step-by-step guide to setting up a complete mineral water project",
                  thumbnail: "/Complete-Mineral-Water-Project(5).webp",
                  href: "/products/mineral-water-project",
                },
                {
                  id: "video-2",
                  title: "Ozone System",
                  description: "Explore the features and applications of our ozone systems.",
                  thumbnail: "/ozone-system(4).png",
                  href: "/products/dosing-ozonation-uv",
                },
                {
                  id: "video-3",
                  title: "Mineral Water Plant Installation",
                  description: "Complete setup and installation of mineral water production systems",
                  thumbnail: "/Mineral-Water-Plant(2).webp",
                  href: "/products/mineral-water-project",
                },
              ].map((video) => (
                <Link key={video.id} href={video.href} className="group">
                  <Card className="overflow-hidden transition-transform hover:scale-105 border-0 shadow-lg relative bg-white">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative aspect-video bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white rounded-full blur-md opacity-30 scale-125"></div>
                          <Play className="h-12 w-12 text-white relative" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="relative">
                      <CardTitle>{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground">
                        {video.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/products">View All Videos</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSectionPage>

      {/* Client Logos Section */}
      <AnimatedSectionPage>
        <ClientLogos />
      </AnimatedSectionPage>

      {/* Get a Quote Section */}
      <ContactUs />

    </>
  );
};

export default Home;
