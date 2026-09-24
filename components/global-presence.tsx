"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe from "cobe"
import { MapPin } from "lucide-react"
import { BUSINESS } from "@/lib/site"
import { HOME_BASE, PLANT_COUNTRIES, type PlantCountry } from "@/lib/countries"
import { CountUp } from "@/components/count-up"

const TAU = Math.PI * 2

// cobe angles that bring a [lat, lng] to the front of the globe.
function anglesFor([lat, lng]: [number, number]): [number, number] {
  return [Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
}

// Shortest signed distance between two angles.
function angleDelta(from: number, to: number) {
  return ((((to - from) % TAU) + TAU + Math.PI) % TAU) - Math.PI
}

const REGIONS: PlantCountry["region"][] = ["Africa", "South Asia"]

const LIME: [number, number, number] = [0.78, 0.85, 0.18]
const MAGENTA: [number, number, number] = [1, 0.36, 0.66]
const CYAN: [number, number, number] = [0.22, 0.71, 0.91]

function Globe({ focus }: { focus: PlantCountry | null }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const focusRef = useRef<PlantCountry | null>(focus)
  const drag = useRef<{ x: number; y: number } | null>(null)
  const [dragging, setDragging] = useState(false)

  focusRef.current = focus

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = wrap.offsetWidth
    // Start with South Asia and East Africa in view.
    let [phi, theta] = anglesFor([8, 55])
    let visible = true
    let frame = 0

    const markers = (focused: PlantCountry | null) => [
      { location: HOME_BASE, size: 0.07, color: MAGENTA, id: "home" },
      ...PLANT_COUNTRIES.filter((c) => c.id !== "india").map((c) => ({
        location: c.location,
        size: focused?.id === c.id ? 0.1 : 0.05,
        color: focused && focused.id !== c.id ? CYAN : LIME,
        id: c.id,
      })),
    ]
    const arcs = PLANT_COUNTRIES.filter((c) => c.id !== "india").map((c) => ({
      from: HOME_BASE,
      to: c.location,
      id: `home-${c.id}`,
    }))

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi,
      theta,
      dark: 1,
      diffuse: 1.4,
      scale: 1,
      mapSamples: 20000,
      mapBrightness: 5,
      mapBaseBrightness: 0.02,
      baseColor: [0.16, 0.34, 0.45],
      markerColor: LIME,
      glowColor: [0.1, 0.35, 0.5],
      markers: markers(null),
      arcs,
      arcColor: CYAN,
      arcWidth: 0.6,
      arcHeight: 0.25,
      markerElevation: 0.02,
      opacity: 0.92,
    })

    let lastFocus: PlantCountry | null = null
    const tick = () => {
      frame = requestAnimationFrame(tick)
      if (!visible) return
      const target = focusRef.current
      if (target !== lastFocus) {
        lastFocus = target
        globe.update({ markers: markers(target) })
      }
      if (target) {
        const [tp, tt] = anglesFor(target.location)
        phi += angleDelta(phi, tp) * 0.08
        theta += (tt - theta) * 0.08
      } else if (!drag.current && !reduced) {
        phi += 0.0035
        theta += (anglesFor([8, 55])[1] - theta) * 0.02
      }
      globe.update({ phi, theta, width: width * dpr, height: width * dpr })
    }
    frame = requestAnimationFrame(tick)

    const ro = new ResizeObserver(() => {
      width = wrap.offsetWidth
    })
    ro.observe(wrap)
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    io.observe(wrap)

    // Drag to spin.
    const onMove = (e: PointerEvent) => {
      if (!drag.current) return
      phi += (e.clientX - drag.current.x) * 0.006
      theta = Math.max(-0.9, Math.min(0.9, theta + (e.clientY - drag.current.y) * 0.004))
      drag.current = { x: e.clientX, y: e.clientY }
    }
    const onUp = () => {
      drag.current = null
      setDragging(false)
    }
    const onDown = (e: PointerEvent) => {
      drag.current = { x: e.clientX, y: e.clientY }
      setDragging(true)
    }
    canvas.addEventListener("pointerdown", onDown)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)

    // Fade in once the first frame has drawn.
    requestAnimationFrame(() => (canvas.style.opacity = "1"))

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      io.disconnect()
      canvas.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      globe.destroy()
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative mx-auto aspect-square w-full max-w-[36rem]">
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full bg-cyan-bright/15 blur-3xl"
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className={`relative h-full w-full touch-pan-y opacity-0 transition-opacity duration-1000 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        aria-label={`Globe showing Nishu plants in ${PLANT_COUNTRIES.map((c) => c.name).join(", ")}`}
        role="img"
      />
    </div>
  )
}

export function GlobalPresence() {
  const [focus, setFocus] = useState<PlantCountry | null>(null)

  return (
    <section className="on-dark relative overflow-hidden bg-ink py-20 md:py-28">
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div className="relative">
          <p className="eyebrow">Global presence</p>
          <h2 className="mt-4 text-4xl text-foreground text-balance md:text-5xl">
            Built in Vasai. Running across two continents.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every plant leaves our workshop in Vasai East. Since {BUSINESS.foundingYear} they have been installed
            in {BUSINESS.stats.countries} countries. Here are some of them. Pick a country to turn the globe to it.
          </p>

          <div className="mt-8 flex items-end gap-6">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">Countries</p>
              <p className="readout mt-1 text-6xl text-lime">
                <CountUp value={BUSINESS.stats.countries} />
              </p>
            </div>
            <div className="mb-1 min-h-[3.25rem] border-l border-border pl-6" aria-live="polite">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                {focus ? "Showing" : "Home base"}
              </p>
              <p className="mt-1 flex items-center gap-2 text-xl font-semibold text-foreground">
                <MapPin className={`h-5 w-5 ${focus ? "text-lime" : "text-magenta-bright"}`} />
                {focus ? `${focus.name}${focus.city ? ` · ${focus.city}` : ""}` : "Vasai East, Mumbai"}
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6" onMouseLeave={() => setFocus(null)}>
            {REGIONS.map((region) => (
              <div key={region}>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{region}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {PLANT_COUNTRIES.filter((c) => c.region === region).map((c) => {
                    const active = focus?.id === c.id
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          onMouseEnter={() => setFocus(c)}
                          onFocus={() => setFocus(c)}
                          onBlur={() => setFocus(null)}
                          onClick={() => setFocus(c)}
                          aria-pressed={active}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                            active
                              ? "border-lime bg-lime text-ink"
                              : "border-border bg-card text-foreground hover:border-cyan-bright"
                          }`}
                        >
                          {c.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-magenta-bright" /> Our workshop, Vasai
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-lime" /> Plants installed
            </span>
            <span className="hidden sm:inline">Drag the globe to spin it.</span>
          </p>
        </div>

        <Globe focus={focus} />
      </div>
    </section>
  )
}
