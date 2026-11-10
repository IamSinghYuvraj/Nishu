"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

// Wraps a PostArt illustration and pauses its CSS animations while it is off
// screen, so a page with many animated cards (the blog index) only animates
// the ones the reader can see.
export function PostArtFrame({
  label,
  compact,
  className = "",
  children,
}: {
  label: string
  compact?: boolean
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "100px",
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      className={`post-art ${compact ? "compact" : ""} ${inView ? "" : "paused"} ${className}`}
    >
      {children}
    </div>
  )
}
