"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, ChevronDown } from "@/components/icons"

export function Footer() {
  const [productsOpen, setProductsOpen] = useState(false)

  const products = [
    { title: "Reverse Osmosis Plant (RO)", link: "/products/reverse-osmosis" },
    { title: "Demineralized Plant (DM)", link: "/products/demineralized" },
    { title: "Water Softening Plant", link: "/products/water-softening" },
    { title: "Membrane Housing", link: "/products/membrane-housing" },
    { title: "Specially Fabricated SS & MS Vessel/Tanks", link: "/products/fabricated-vessels" },
    { title: "Complete Mineral Water Project", link: "/products/mineral-water-project" },
    { title: "Dosing, Ozonation & UV Systems", link: "/products/dosing-ozonation-uv" },
    { title: "Rinsing Filling Capping Machine (RFC)", link: "/products/rfc" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Image src="/nishu-logo.png" alt="Nishu Enterprises" width={250} height={250} className="rounded-md" />
            </h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Established in 1996, manufacturing water treatment plants and spare parts with innovation and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="hover:text-secondary transition-all duration-300 flex items-center gap-1 group"
                >
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {/* Products Dropdown */}
                {productsOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-primary/90 rounded-lg border border-secondary/30 py-2 z-50">
                    {products.map((product, idx) => (
                      <Link
                        key={idx}
                        href={product.link}
                        className="block px-4 py-2 hover:bg-secondary/20 transition-colors text-sm"
                        onClick={() => setProductsOpen(false)}
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-sm mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>
                  gala no.5 bld no.6,parsvanath ind estate bhutpada vasai east Vasai - 401208, Palghar, Maharashtra, India
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <a href="tel:+918048611863" className="hover:text-secondary transition-all duration-300">
                  9820142424
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <a href="mailto:info@nishuenterprises.com" className="hover:text-secondary transition-all duration-300">
                  nishudbj@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-sm mb-4">Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8948818652284!2d72.8611239!3d19.4169473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9811b5a8405%3A0x8d1f9ec7ec39b6c6!2sNISHU%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1762612705634!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>&copy; 2025 Nishu Enterprises. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-all duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
