/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process';

const nextConfig = {
  images : { 
    domains : ['bodyhack.live'] 
  },
  output: 'export',
  basePatcj: '/experience',
  images:{
    unoptimized: true,
  },
};

export default withNextVideo(nextConfig);


