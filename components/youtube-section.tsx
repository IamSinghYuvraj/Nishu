import { YOUTUBE_VIDEOS, youTubeId } from "@/lib/videos"
import { YouTubePlayer } from "@/components/youtube-player"
import { BUSINESS } from "@/lib/site"

// Homepage "watch our work" block. Renders nothing until videos are added to
// lib/videos.ts.
export function YouTubeSection() {
  const videos = YOUTUBE_VIDEOS.filter((v) => youTubeId(v.url))
  if (videos.length === 0) return null

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">Watch our work</p>
        <h2 className="mt-4 text-4xl text-foreground md:text-5xl">Real plants, real installations</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          See the plants we build and commission, in our own footage.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {videos.map((v) => (
            <div key={v.url} className="overflow-hidden rounded-2xl border border-border bg-card">
              <YouTubePlayer url={v.url} title={v.title} />
              <div className="p-4">
                <h3 className="text-base font-medium leading-snug text-foreground">{v.title}</h3>
                {v.description && <p className="mt-2 text-muted-foreground">{v.description}</p>}
              </div>
            </div>
          ))}
        </div>
        {BUSINESS.social.youtube && (
          <a
            href={BUSINESS.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block font-medium text-primary hover:underline"
          >
            More on our YouTube channel
          </a>
        )}
      </div>
    </section>
  )
}
