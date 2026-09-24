"use client"

import { useEffect, useRef, useState } from "react"

// Counts from 0 to `value` the first time it scrolls into view. Renders the
// final number on the server and for reduced-motion visitors.
export function CountUp({ value, suffix = "", duration = 1400 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const rect = node.getBoundingClientRect()
    // Already on screen at load (e.g. the hero): leave the final number.
    if (rect.top < window.innerHeight && rect.bottom > 0) return

    setShown(0)
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setShown(Math.round(value * eased))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span ref={ref}>
      {shown.toLocaleString("en-IN")}
      {suffix}
    </span>
  )
}
