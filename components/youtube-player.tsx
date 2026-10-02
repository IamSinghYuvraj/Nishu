"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { youTubeId } from "@/lib/videos"

// Shows the YouTube thumbnail and only loads the player (from the
// privacy-enhanced youtube-nocookie domain) when the visitor clicks, so the
// videos add no weight or third-party requests to the page until wanted.
export function YouTubePlayer({ url, title }: { url: string; title: string }) {
  const [playing, setPlaying] = useState(false)
  const id = youTubeId(url)
  if (!id) return null

  return (
    <div className={`relative overflow-hidden bg-ink ${url.includes("/shorts/") ? "aspect-[9/16]" : "aspect-video"}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/50" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-secondary shadow-xl transition-transform group-hover:scale-110">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
        </button>
      )}
    </div>
  )
}
