const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    generateEtags: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                port: '',
                pathname: '/block-developers/**',
            },
        ],
    },
}

module.exports = nextConfig


