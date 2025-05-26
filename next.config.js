/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
   async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://api.tenkaistudio.com/auth/discord',
        permanent: true,
      },
    ]
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev','localhost', '100.112.239.73'],
}
