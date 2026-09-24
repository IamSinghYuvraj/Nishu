"use client";

import WhatsAppIcon from "@/public/whatsapp.png";
import Image from "next/image";
import { trackLead } from "@/lib/track";

export default function WhatsAppChat() {
  const whatsappNumber = "+919820142424";
  const message = "Hello! I'm interested in your water treatment solutions.";

  const handleWhatsAppClick = () => {
    trackLead("whatsapp");
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
