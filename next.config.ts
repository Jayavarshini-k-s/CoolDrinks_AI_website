import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = '';

if (isGithubActions) {
  // Trim off the 'owner/' from 'owner/repo'
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || '';
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'omqaodalyvzbrvckcumi.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jqeccltitwtjzrxxeguo.supabase.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
