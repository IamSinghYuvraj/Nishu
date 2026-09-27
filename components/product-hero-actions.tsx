"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { productWhatsappText, whatsappUrl } from "@/lib/site"
import { trackLead } from "@/lib/track"

// Quote + WhatsApp buttons shown in every product page hero.
export function ProductHeroActions({ productName }: { productName: string }) {
  const whatsapp = whatsappUrl(productWhatsappText(productName))
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg" variant="cta" className="group">
        <Link href="/contact">
          Request a quotation
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
      <Button asChild size="lg" variant="outline">
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackLead("whatsapp", { product: productName, location: "product-hero" })}>
          <MessageCircle className="text-[#25d366]" />
          WhatsApp your requirement
        </a>
      </Button>
    </div>
  )
}
