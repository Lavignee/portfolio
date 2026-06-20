import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import AppShell from '@/components/appShell';
import '@/style/index.scss';
import 'swiper/css';

export const metadata: Metadata = {
  title: "Do Young Lee's Portfolio",
  description: 'Hello, this is the portfolio site of front developer Lee Do-young.',
  authors: [{ name: '이도영 (Do-Young Lee)' }],
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/favicon/apple-icon-180x180.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#424242',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='ko'>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
};

export default RootLayout;
