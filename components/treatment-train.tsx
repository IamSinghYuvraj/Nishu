"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Droplets, Filter, Layers, Waves, Sun, Package } from "lucide-react"

// A typical packaged-drinking-water train fed from a borewell. The readings
// are illustrative, not a guarantee: the site's water analysis decides the
// real train, and the copy under the panel says so.
const STAGES = [
  {
    key: "raw",
    short: "Raw water",
    name: "Raw borewell water",
    Icon: Droplets,
    text: "Hard, salty and often cloudy. Every plant we build starts from a lab analysis of this water, because it decides every stage that follows.",
    removes: [],
    tds: 1200,
    hardness: 380,
    turbidity: 12,
    microbes: "Present",
    link: { href: "/contact", label: "Send us your water analysis" },
  },
  {
    key: "filtration",
    short: "Sand + carbon",
    name: "Pressure sand & activated carbon filters",
    Icon: Filter,
    text: "Sand traps suspended solids and silt; activated carbon takes out chlorine, odour and organics that would damage the RO membranes downstream.",
    removes: ["Suspended solids", "Chlorine", "Odour & colour"],
    tds: 1200,
    hardness: 380,
    turbidity: 0.8,
    microbes: "Present",
    link: { href: "/products/fabricated-vessels", label: "Filter vessels we fabricate" },
  },
  {
    key: "softener",
    short: "Softener",
    name: "Water softener",
    Icon: Layers,
    text: "Ion-exchange resin swaps calcium and magnesium for sodium, so scale never forms on the membranes, boilers or pipework.",
    removes: ["Calcium", "Magnesium", "Scale"],
    tds: 1200,
    hardness: 5,
    turbidity: 0.8,
    microbes: "Present",
    link: { href: "/products/water-softening", label: "Water softening plants" },
  },
  {
    key: "ro",
    short: "RO",
    name: "Reverse osmosis",
    Icon: Waves,
    text: "High-pressure pumps push water through thin-film membranes. Up to 95% of dissolved salts stay behind and leave with the reject stream.",
    removes: ["Dissolved salts", "Heavy metals", "Fluoride"],
    tds: 45,
    hardness: 2,
    turbidity: 0.1,
    microbes: "Reduced",
    link: { href: "/products/reverse-osmosis", label: "Industrial RO plants" },
  },
  {
    key: "disinfection",
    short: "Ozone + UV",
    name: "Ozonation & UV sterilisation",
    Icon: Sun,
    text: "Ozone and UV kill bacteria and viruses without leaving a chemical taste, so the water stays safe in the bottle.",
    removes: ["Bacteria", "Viruses"],
    tds: 45,
    hardness: 2,
    turbidity: 0.1,
    microbes: "Disinfected",
    link: { href: "/products/dosing-ozonation-uv", label: "Ozone, UV & dosing systems" },
  },
  {
    key: "bottling",
    short: "Bottling",
    name: "Rinse, fill & cap",
    Icon: Package,
    text: "The RFC machine rinses each bottle, fills it and seals it in one enclosed line, so treated water never meets open air.",
    removes: [],
    tds: 45,
    hardness: 2,
    turbidity: 0.1,
    microbes: "Sealed",
    link: { href: "/products/rfc", label: "RFC bottling machines" },
  },
]

const RAW = STAGES[0]

function Meter({ label, unit, value, max, decimals = 0 }: { label: string; unit: string; value: number; max: number; decimals?: number }) {
  const pct = Math.max(2, Math.min(100, (value / max) * 100))
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
        <span className="font-mono text-xs text-muted-foreground">{unit}</span>
      </div>
      <div className="readout mt-1 text-3xl text-lime md:text-4xl">{value.toLocaleString("en-IN", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}</div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-linear-to-r from-cyan-bright to-lime transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function TreatmentTrain() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  // Only auto-advance while the panel is on screen and untouched.
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!auto || !inView) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => setActive((i) => (i + 1) % STAGES.length), 3800)
    return () => clearInterval(id)
  }, [auto, inView])

  const choose = (i: number) => {
    setAuto(false)
    setActive(i)
  }

  const stage = STAGES[active]
  const progress = (active / (STAGES.length - 1)) * 100

  return (
    <div ref={ref} className="on-dark relative overflow-hidden rounded-3xl bg-ink shadow-2xl shadow-ink/30">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(50rem 20rem at 50% -20%, rgb(56 182 232 / 0.25), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* The pipe */}
      <div className="relative px-4 pt-10 sm:px-10 md:pt-12">
        <div className="relative">
          <div className="absolute left-[8.33%] right-[8.33%] top-7 h-2 -translate-y-1/2 rounded-full bg-white/10 md:top-9" aria-hidden="true">
            <div
              className="h-full rounded-full bg-linear-to-r from-cyan-bright to-lime transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
            <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="4 16" strokeLinecap="round" className="animate-flow" />
            </svg>
          </div>

          <ol className="relative grid grid-cols-6" role="tablist" aria-label="Stages of a water treatment plant">
            {STAGES.map((s, i) => {
              const done = i < active
              const current = i === active
              return (
                <li key={s.key} role="presentation" className="flex justify-center">
                  <button
                    role="tab"
                    aria-selected={current}
                    aria-controls="train-panel"
                    onClick={() => choose(i)}
                    onMouseEnter={() => choose(i)}
                    className="group flex flex-col items-center gap-3 text-center focus-visible:outline-offset-4"
                  >
                    <span
                      className={`relative grid h-14 w-14 place-items-center rounded-2xl border-2 transition-all duration-500 md:h-18 md:w-18 ${
                        current
                          ? "scale-110 border-lime bg-lime text-ink shadow-[0_0_0_6px_rgb(198_217_46/0.18)]"
                          : done
                            ? "border-cyan-bright bg-card text-cyan-bright"
                            : "border-white/20 bg-card text-muted-foreground group-hover:border-cyan-bright group-hover:text-foreground"
                      }`}
                    >
                      <s.Icon className="h-6 w-6 md:h-7 md:w-7" />
                    </span>
                    <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground sm:block">
                      Stage {i + 1}
                    </span>
                    <span
                      className={`-mt-2 text-[0.7rem] font-semibold leading-tight sm:text-sm ${current ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                    >
                      {s.short}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* The reading for the selected stage */}
      <div id="train-panel" role="tabpanel" className="relative mt-8 grid gap-8 border-t border-border px-6 py-8 sm:px-10 md:py-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div key={stage.key} className="animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime">
            Stage {active + 1} of {STAGES.length}
          </p>
          <h3 className="mt-2 text-2xl text-foreground md:text-3xl">{stage.name}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{stage.text}</p>
          {stage.removes.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Removed at this stage">
              {stage.removes.map((r) => (
                <li key={r} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground">
                  <span className="mr-1.5 text-magenta-bright" aria-hidden="true">✕</span>
                  {r}
                </li>
              ))}
            </ul>
          )}
          <Link href={stage.link.href} className="link-arrow mt-6 text-cyan-bright">
            {stage.link.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 rounded-2xl border border-border bg-ink-deep/60 p-5 sm:p-6">
          <Meter label="TDS" unit="mg/L" value={stage.tds} max={RAW.tds} />
          <Meter label="Hardness" unit="mg/L" value={stage.hardness} max={RAW.hardness} />
          <Meter label="Turbidity" unit="NTU" value={stage.turbidity} max={RAW.turbidity} decimals={1} />
          <div>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">Microbes</span>
            <div className={`readout mt-1 text-2xl md:text-3xl ${stage.microbes === "Present" ? "text-magenta-bright" : "text-lime"}`}>
              {stage.microbes}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
