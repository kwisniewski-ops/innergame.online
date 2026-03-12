/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deploy to Vercel, Netlify, or any CDN with zero config
  // Remove `output: 'export'` if you want server-side features (ISR, API routes)
  // output: 'export',

  images: {
    // When using static export, switch to unoptimized: true
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Ready for Sanity CMS images
      },
    ],
  },
}

module.exports = nextConfig
