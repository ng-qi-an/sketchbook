/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa'

const withPWAconfig = withPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === "development",
  })

const nextConfig = withPWAconfig({
    reactStrictMode: false,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
});

export default nextConfig;
