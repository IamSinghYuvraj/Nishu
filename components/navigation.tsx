"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "@/components/icons"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/nishu_logo.png"
              alt="Nishu Enterprises"
              width={200}
              height={200}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-secondary transition-all duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary transition-all duration-300 relative group">
                Products
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-all duration-300" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/products/water-treatment"
                  className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-secondary-foreground first:rounded-t-lg transition-all duration-300"
                >
                  Water Treatment Plants
                </Link>
                <Link
                  href="/products/machinery"
                  className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  Industrial Machinery
                </Link>
                <Link
                  href="/products/filtration"
                  className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-secondary-foreground last:rounded-b-lg transition-all duration-300"
                >
                  Filtration Systems
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-secondary transition-all duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-secondary transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden md:block px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:-translate-y-1 hover:shadow-lg hover:bg-secondary/90 transition-all duration-300 font-medium text-sm"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium hover:text-secondary transition-all duration-300"
            >
              Home
            </Link>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full text-left px-4 py-2 text-sm font-medium hover:text-secondary transition-all duration-300 flex items-center justify-between"
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
            </button>
            {isProductsOpen && (
              <div className="pl-4">
                <Link
                  href="/products/water-treatment"
                  className="block px-4 py-2 text-sm hover:text-secondary transition-all duration-300"
                >
                  Water Treatment Plants
                </Link>
                <Link
                  href="/products/machinery"
                  className="block px-4 py-2 text-sm hover:text-secondary transition-all duration-300"
                >
                  Industrial Machinery
                </Link>
                <Link
                  href="/products/filtration"
                  className="block px-4 py-2 text-sm hover:text-secondary transition-all duration-300"
                >
                  Filtration Systems
                </Link>
              </div>
            )}
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-medium hover:text-secondary transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium hover:text-secondary transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
