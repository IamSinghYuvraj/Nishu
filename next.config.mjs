/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Served from Vercel, which runs Next.js image optimization: originals are
    // resized and converted to AVIF/WebP per request. Do not set
    // `unoptimized: true` here - it ships every source image at full size.
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
