import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import Icon from "@/public/nishu-icon.png"
import { SITE_URL } from "@/lib/site"
import { JsonLd } from "@/components/json-ld"
import { organizationSchema, websiteSchema } from "@/lib/schema"
import { Analytics } from "@/components/analytics"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nishu Enterprises | Water Treatment Plant Manufacturer in India",
    template: "%s | Nishu Enterprises",
  },
  description:
    "Water treatment plant manufacturer since 1996: RO plants, DM plants, water softeners, mineral water projects, ozone/UV systems and RFC bottling machines. 1200+ plants, 45 countries. Vasai, Mumbai.",
  keywords: [
    "water treatment plant manufacturer",
    "RO plant manufacturer India",
    "DM plant supplier",
    "industrial water softener",
    "mineral water plant project",
    "RFC machine manufacturer",
    "Nishu Enterprises Vasai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Nishu Enterprises",
    title: "Nishu Enterprises | Water Treatment Plant Manufacturer in India",
    description:
      "RO, DM, water softening, mineral water projects and bottling machinery. 30 years, 1200+ plants installed, trusted by Bisleri, Bailey, Campa and more.",
    images: [{ url: "/Ro-img6.jpg", width: 1200, height: 630, alt: "Nishu Enterprises water treatment plant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishu Enterprises | Water Treatment Plant Manufacturer in India",
    description:
      "RO, DM, water softening, mineral water projects and bottling machinery. 30 years, 1200+ plants installed.",
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
    <html lang="en">
      <body className={`font-sans antialiased`}>
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
