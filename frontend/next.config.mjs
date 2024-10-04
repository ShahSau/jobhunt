/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        SALT: process.env.SALT,
    },
};

export default nextConfig;
