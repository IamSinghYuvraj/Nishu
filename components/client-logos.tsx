"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/site";
import MANTRA from "@/public/MANTRA.jpg";
import BISLERI from "@/public/BISLERI.jpg";
import BAILEY from "@/public/BAILEY.jpg";
import HP from "@/public/HP-RO.png";
import MCD from "@/public/MCD.jpg";
import O2RISE from "@/public/O2RISE.jpg";
import ROYAL from "@/public/ROYAL.jpg";
import ACTIVE from "@/public/ACTIVE.jpg";
import CLOUD9 from "@/public/ClOUD9.jpg";
import MERU from "@/public/MERU-SPRING.png";

const clients = [
  { name: "Mantra", logo: MANTRA },
  { name: "Bisleri", logo: BISLERI },
  { name: "Bailey", logo: BAILEY },
  { name: "McDonald's", logo: MCD },
  { name: "O2Rise", logo: O2RISE },
  { name: "Royal", logo: ROYAL },
  { name: "Active", logo: ACTIVE },
  { name: "HP-RO", logo: HP },
  { name: "Cloud9", logo: CLOUD9 },
  { name: "Meru Spring", logo: MERU },
  { name: "Campa", logo: "/CAMPA.png" }
];

// Infinite marquee of client logos. Pure CSS: pauses on hover, and stops
// entirely for visitors who prefer reduced motion.
export function ClientLogos({ compact = false }: { compact?: boolean }) {
  const row = [...clients, ...clients];

  return (
    <section className={compact ? "border-y border-border bg-white py-8" : "bg-white py-16 md:py-20"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {compact ? (
          <p className="text-center font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Plants running for Bisleri, Bailey, Campa, McDonald&apos;s and {BUSINESS.stats.clients.toLocaleString("en-IN")}+ other clients
          </p>
        ) : (
          <div className="text-center">
            <p className="eyebrow">Clients</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-foreground">Brands that run on our plants</h2>
          </div>
        )}
      </div>

      <div
        className={`pause-on-hover relative mt-6 overflow-hidden ${compact ? "" : "md:mt-10"} [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]`}
      >
        <div className="flex w-max animate-marquee gap-5 motion-reduce:animate-none">
          {row.map((client, index) => (
            <div
              key={index}
              aria-hidden={index >= clients.length}
              className="group relative h-24 w-40 shrink-0 overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg md:h-28 md:w-48"
            >
              <Image
                src={client.logo}
                alt={index < clients.length ? `${client.name} logo` : ""}
                fill
                sizes="192px"
                className="object-contain p-3 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
