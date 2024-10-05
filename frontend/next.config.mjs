/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        SALT: process.env.SALT,
        PRESET_KEY: 'jvfetvq7',
        CLOUD_NAME: 'dp1u4h5qd',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
