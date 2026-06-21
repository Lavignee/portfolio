import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import AppShell from '@/components/appShell';
import '@/style/index.scss';
import 'swiper/css';

const SITE_URL = 'https://ldy-fe.com';
const SITE_NAME = "Do Young Lee's Portfolio";
const SITE_DESC = 'Hello, this is the portfolio site of front developer Lee Do-young.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  authors: [{ name: '이도영 (Do-Young Lee)' }],
  creator: '이도영 (Do-Young Lee)',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESC,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESC,
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
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

// 검색엔진·SNS의 엔티티 인식을 위한 구조화 데이터(Person + WebSite).
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Do Young Lee',
      alternateName: '이도영',
      jobTitle: 'Frontend Developer',
      url: SITE_URL,
      sameAs: ['https://github.com/Lavignee'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'ko-KR',
      author: { '@id': `${SITE_URL}/#person` },
    },
  ],
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='ko'>
      <body>
        {/* 핵심 폰트 프리로드(FOUT/지연 완화). */}
        <link
          rel='preload'
          href='/fonts/NEXON-Lv2-Gothic.woff'
          as='font'
          type='font/woff'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Syncopate-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <script
          type='application/ld+json'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: 정적·신뢰 JSON-LD 구조화 데이터 주입.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
};

export default RootLayout;
