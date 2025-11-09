"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, X } from "@/components/icons"
import Image from "next/image"

export interface MediaItem {
  type: "image" | "video"
  src: string
  title?: string
}

interface MediaGalleryProps {
  items: MediaItem[]
}

export function MediaGallery({ items }: MediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const currentItem = items[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = ""
    if (url.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(new URL(url).search)
      videoId = urlParams.get("v") || ""
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
    }
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <div className="space-y-6">
      {/* Main Media Display */}
      <div className="relative bg-card rounded-xl border border-border overflow-hidden group">
        <div className="relative w-full h-96 bg-muted">
          {currentItem.type === "image" ? (
            <>
              <Image
                src={currentItem.src || "/placeholder.svg"}
                alt={currentItem.title || "Product image"}
                fill
                className={`object-contain transition-transform duration-300`}
              />
            </>
          ) : (
            <iframe
              src={getYouTubeEmbedUrl(currentItem.src)}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-secondary/90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-secondary/90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {items.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all duration-300 overflow-hidden hover:border-secondary ${
                idx === currentIndex ? "border-secondary" : "border-border"
              }`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={`Thumbnail ${idx + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-secondary"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Info */}
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground text-sm">
          {currentIndex + 1} of {items.length}
        </p>
        
      </div>
    </div>
  )
}
