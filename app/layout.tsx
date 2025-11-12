import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ContactUs from "@/components/contactus"
import { Footer } from "@/components/footer"
import Icon from "@/public/nishu-icon.png"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nishu Enterprises - Water Treatment & Machinery Solutions",
  description: "Leading water treatment plant and machinery manufacturer serving industrial clients worldwide",
  generator: "Nishu website",
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
        {children}
        <ContactUs />
        <WhatsAppChat />
        <Footer />
      </body>
    </html>
  )
}
