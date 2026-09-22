/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      // The contact form accepts a site drawing or spec. Client-side the file
      // is capped at 4 MB; this leaves headroom for the rest of the payload
      // while staying under Vercel's ~4.5 MB request body limit.
      bodySizeLimit: "5mb",
    },
  },
  images: {
    // Served from Vercel, which runs Next.js image optimization: originals are
    // resized and converted to AVIF/WebP per request. Do not set
    // `unoptimized: true` here - it ships every source image at full size.
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
