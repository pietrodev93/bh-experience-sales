/** @type {import('next').NextConfig} */
import { withNextVideo } from 'next-video/process';

const nextConfig = {
    images : { 
        domains : ['bodyhack.live'] 
      } 
};

export default withNextVideo(nextConfig);
