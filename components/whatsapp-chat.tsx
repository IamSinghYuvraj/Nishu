"use client";

import WhatsAppIcon from "@/public/whatsapp.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DEFAULT_WHATSAPP_TEXT, whatsappUrl } from "@/lib/site";
import { trackLead } from "@/lib/track";

// `messages` maps a page path to its own prefilled WhatsApp text, so the
// first message already says which system, industry or guide the enquiry
// came from. Built in the root layout so page copy stays out of this bundle.
export default function WhatsAppChat({ messages }: { messages: Record<string, string> }) {
  const pathname = usePathname() ?? "/";

  const handleWhatsAppClick = () => {
    trackLead("whatsapp", { location: "floating-button" });
    window.open(whatsappUrl(messages[pathname] ?? DEFAULT_WHATSAPP_TEXT), "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6">
      <button
        onClick={handleWhatsAppClick}
        className="group relative grid h-16 w-16 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping-soft" aria-hidden="true" />
        <Image
          src={WhatsAppIcon}
          alt=""
          className="relative rounded-full object-cover shadow-lg shadow-black/25"
          width={64}
          height={64}
        />
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Chat with us on WhatsApp
        </span>
      </button>
    </div>
  );
}
