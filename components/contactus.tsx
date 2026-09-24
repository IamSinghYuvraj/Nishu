"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "./animation";
import { BUSINESS } from "@/lib/site";
import { trackLead } from "@/lib/track";

// Closing call to action shared by every page.
const ContactUs: React.FC = () => {
  const whatsapp = `https://wa.me/${BUSINESS.phoneE164.replace("+", "")}?text=${encodeURIComponent(
    "Hello! I'm interested in your water treatment solutions.",
  )}`;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="on-dark page-hero relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 md:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="eyebrow">Get a quotation</p>
                <h2 className="mt-4 text-3xl md:text-5xl text-foreground text-balance">
                  Send us your water analysis. We&apos;ll size the plant.
                </h2>
                <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                  Tell us the source, the daily demand and what the water is for. We
                  reply with a recommended treatment train and a quotation.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between rounded-xl bg-secondary px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-secondary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/40"
                >
                  Request a quotation
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
                <a
                  href={`tel:${BUSINESS.phoneE164}`}
                  onClick={() => trackLead("phone")}
                  className="group flex items-center justify-between rounded-xl border border-border px-6 py-4 font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-card"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" /> {BUSINESS.phone}
                  </span>
                  <span className="text-sm font-normal text-muted-foreground">Call</span>
                </a>
                <a
                  href={whatsapp}
                  onClick={() => trackLead("whatsapp")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border px-6 py-4 font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[#25d366] hover:bg-card"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-[#25d366]" /> Chat on WhatsApp
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactUs;
