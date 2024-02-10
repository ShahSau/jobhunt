/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        // API_URL: 'http://localhost:8000',
        API_URL: 'https://jobhunt-backend-225281cb5b3a.herokuapp.com',
        MAPBOX_ACCESS_TOKEN:'pk.eyJ1Ijoic2hhaHNhdSIsImEiOiJjbHFwM2NpNzQzYXhmMnFtZTdrODY3MHhnIn0.fYnaaZqagnhOt8m58mgUMw',
        CLOUD_NAME: 'dp1u4h5qd',
        PRESET_KEY: 'jvfetvq7',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
}

module.exports = nextConfig
