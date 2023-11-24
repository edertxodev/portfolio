/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
     */
    unoptimized: true,
  },
  /** Deployment */
  output: 'export',
  basePath: 'portfolio',
}

module.exports = nextConfig
