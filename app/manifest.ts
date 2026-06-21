import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Do Young Lee's Portfolio",
    short_name: 'DY Portfolio',
    description: 'Hello, this is the portfolio site of front developer Lee Do-young.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#424242',
    icons: [
      { src: '/favicon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/favicon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
