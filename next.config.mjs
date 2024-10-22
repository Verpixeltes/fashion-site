import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
    webpack(config, options) {
        return config;
    }
});

export default nextConfig;