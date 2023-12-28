/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: 'http://localhost:8000',
        MAPBOX_ACCESS_TOKEN:'pk.eyJ1Ijoic2hhaHNhdSIsImEiOiJjbHFwM2NpNzQzYXhmMnFtZTdrODY3MHhnIn0.fYnaaZqagnhOt8m58mgUMw'
    }
}

module.exports = nextConfig
