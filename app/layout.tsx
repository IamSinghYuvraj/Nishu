import type React from "react"
import type { Metadata } from "next"
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import Icon from "@/public/nishu-icon.png"
import { SITE_URL, BUSINESS } from "@/lib/site"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema } from "@/lib/schema"
import { Analytics } from "@/components/analytics"

// Archivo's width axis gives the headings a wide, nameplate-like stance;
// Plex carries body copy and spec readouts.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" })
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex", display: "swap" })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap" })

const HOME_TITLE = "RO & Water Treatment Plant Manufacturer, Mumbai | Since 1996"
const HOME_DESCRIPTION =
  "RO plants, DM plants, water softeners and mineral water projects, built in Vasai, Mumbai since 1996. 1200+ plants installed in 45 countries. Get a quote."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Nishu Enterprises",
  },
  description: HOME_DESCRIPTION,
  // Google ignores the keywords meta tag; it is kept short and accurate so it
  // does no harm with engines that still read it. Rankings come from titles,
  // headings, body copy and links - see the targetQuery fields in lib/.
  keywords: [
    "RO plant manufacturer in Mumbai",
    "water treatment plant manufacturer",
    "industrial RO plant",
    "DM water plant",
    "industrial water softener",
    "mineral water plant",
    "packaged drinking water plant",
    "Nishu Enterprises Vasai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Nishu Enterprises",
    title: HOME_TITLE,
    description:
      `RO, DM, water softening, mineral water projects and bottling machinery. ${BUSINESS.stats.years} years, ${BUSINESS.stats.plants}+ plants installed, trusted by Bisleri, Bailey, Campa and more.`,
    images: [{ url: "/Ro-img6.jpg", width: 1200, height: 630, alt: "Industrial RO plant built by Nishu Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description:
      `RO, DM, water softening, mineral water projects and bottling machinery. ${BUSINESS.stats.years} years, ${BUSINESS.stats.plants}+ plants installed.`,
    images: ["/Ro-img6.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: Icon.src,
    apple: Icon.src
  },
}

import WhatsAppChat from "@/components/whatsapp-chat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plex.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Analytics />
        {children}
        <WhatsAppChat />
        <Footer />
      </body>
    </html>
  )
}
