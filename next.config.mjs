/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process';

const nextConfig = {
  images : { 
    domains : ['bodyhack.live'] 
  },
  output: 'export',
  basePath: '/experience',
  images:{
    unoptimized: true,
  },
};

export default withNextVideo(nextConfig);


