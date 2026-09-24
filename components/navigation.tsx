"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, ChevronDown } from "@/components/icons"
import { ArrowRight, Phone } from "lucide-react"
import { BUSINESS, PRODUCTS } from "@/lib/site"
import { trackLead } from "@/lib/track"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", mega: true },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 8)
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu after navigating.
  useEffect(() => {
    setIsOpen(false)
    setIsProductsOpen(false)
  }, [pathname])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-white/90 shadow-[0_8px_30px_-12px_rgb(10_37_54/0.25)] backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex h-18 items-center justify-between gap-6">
          <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-[1.03]" aria-label="Nishu Enterprises home">
            <Image src="/nishu-logo-trim.png" alt="Nishu Enterprises" width={612} height={166} className="h-10 w-auto sm:h-11" priority />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-7">
            {LINKS.map((link) =>
              link.mega ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`link-underline flex items-center gap-1 py-2 text-[0.95rem] font-medium transition-colors hover:text-primary ${
                      isActive(link.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-[44rem] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-ink/20">
                      <div className="grid grid-cols-2 gap-1 p-3">
                        {PRODUCTS.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/products/${p.slug}`}
                            className="group/item flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent"
                          >
                            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-muted">
                              <Image src={p.image} alt="" fill sizes="44px" className="object-cover transition-transform duration-500 group-hover/item:scale-110" />
                            </span>
                            <span className="text-sm font-medium leading-snug text-foreground group-hover/item:text-primary">
                              {p.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/products"
                        className="link-arrow flex items-center justify-between border-t border-border bg-mist px-5 py-3 text-sm"
                      >
                        See all {PRODUCTS.length} systems side by side
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`link-underline py-2 text-[0.95rem] font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              onClick={() => trackLead("phone")}
              aria-label={`Call ${BUSINESS.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary">
                <Phone className="h-4 w-4" />
              </span>
              <span className="hidden whitespace-nowrap xl:inline">{BUSINESS.phone}</span>
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/30"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            className="lg:hidden grid h-11 w-11 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden animate-fade-in-up border-t border-border pb-6 pt-2">
            {LINKS.map((link) =>
              link.mega ? (
                <div key={link.href}>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    aria-expanded={isProductsOpen}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-foreground hover:bg-accent"
                  >
                    Products
                    <ChevronDown className={`h-5 w-5 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isProductsOpen && (
                    <div className="mb-2 ml-3 border-l-2 border-primary/30 pl-3">
                      {PRODUCTS.map((p) => (
                        <Link key={p.slug} href={`/products/${p.slug}`} className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-primary">
                          {p.name}
                        </Link>
                      ))}
                      <Link href="/products" className="link-arrow px-3 py-2 text-sm">
                        All products <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-3 py-3 text-base font-medium hover:bg-accent ${
                    isActive(link.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="mt-4 grid grid-cols-2 gap-3 px-3">
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                onClick={() => trackLead("phone")}
                className="flex items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm font-semibold text-foreground"
              >
                <Phone className="h-4 w-4" /> Call us
              </a>
              <Link href="/contact" className="flex items-center justify-center rounded-lg bg-secondary py-3 text-sm font-semibold text-secondary-foreground">
                Get a quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Reading progress */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-transparent" aria-hidden="true">
        <div
          className="h-full origin-left bg-linear-to-r from-primary via-primary to-secondary"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  )
}
