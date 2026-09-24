"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "@/components/icons"
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react"
import { BUSINESS, PRODUCTS } from "@/lib/site"
import { trackLead } from "@/lib/track"

const COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/products", label: "All products" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  const socialLinks = [
    { label: "LinkedIn", href: BUSINESS.social.linkedin, Icon: Linkedin },
    { label: "Instagram", href: BUSINESS.social.instagram, Icon: Instagram },
    { label: "Facebook", href: BUSINESS.social.facebook, Icon: Facebook },
    { label: "YouTube", href: BUSINESS.social.youtube, Icon: Youtube },
  ].filter((s) => s.href)

  const linkClass = "text-muted-foreground transition-all duration-300 hover:text-lime hover:translate-x-1 inline-block"

  return (
    <footer className="on-dark relative overflow-hidden bg-ink-deep">
      <div
        className="h-1 w-full bg-linear-to-r from-cyan-bright via-secondary to-lime"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1.4fr_0.8fr_1.3fr]">
          <div>
            <Link href="/" className="inline-block rounded-xl bg-white px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5">
              <Image src="/nishu-logo-trim.png" alt="Nishu Enterprises" width={612} height={166} className="h-10 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Established in {BUSINESS.foundingYear}, manufacturing water treatment plants and spare parts in
              Vasai, Mumbai. Plants installed in {BUSINESS.stats.countries} countries.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Serving {BUSINESS.serviceAreas.slice(0, -1).join(", ")} and{" "}
              {BUSINESS.serviceAreas[BUSINESS.serviceAreas.length - 1]}.
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Nishu Enterprises on ${label}`}
                    className="rounded-full bg-card p-2.5 text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-secondary"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-lime">Products</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className={linkClass}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-lime">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-lime">Visit or call</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{BUSINESS.addressLine}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${BUSINESS.phoneE164}`}
                  onClick={() => trackLead("phone")}
                  className="font-semibold text-foreground transition-colors hover:text-lime"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  onClick={() => trackLead("email")}
                  className="font-semibold text-foreground transition-colors hover:text-lime"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <iframe
              title="Nishu Enterprises on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8948818652284!2d72.8611239!3d19.4169473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9811b5a8405%3A0x8d1f9ec7ec39b6c6!2sNISHU%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1762612705634!5m2!1sen!2sin"
              width="100%"
              height="140"
              className="mt-5 rounded-xl border border-border"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Nishu Enterprises. All rights reserved.</p>
          <p className="font-mono text-xs tracking-wider">Water is life. Treat it right.</p>
        </div>
      </div>
    </footer>
  )
}
