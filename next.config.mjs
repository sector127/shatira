/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.idgesg.net",
                port: '',
            }
        ]
    }
};

export default nextConfig;
