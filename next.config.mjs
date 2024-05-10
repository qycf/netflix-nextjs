/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["image.tmdb.org"],
    },
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: "/collection/:path*",
                destination: "https://api.apibdzy.com/:path*",
            },
        ];
    },
};

export default nextConfig;
