import { D2Coding, pretendard } from '@/styles/font';
import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { type PropsWithChildren } from 'react';

import { Footer } from './components';

import { BASE_URL } from '@/constants/url';
import { createCDNUrl } from '@/utils/url';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#111110' },
  ],
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: '감구마 | 감구마 개발블로그',
  description: '감구마의 개발 블로그',
  keywords: ['개발', '개발자', '감구마', '프론트엔드'],
  robots: 'index, follow',
  publisher: '서준환',
  authors: {
    name: '서준환',
    url: '/',
  },
  openGraph: {
    siteName: '감구마 | 감구마 개발블로그',
    type: 'website',
    url: '/',
    locale: 'ko',
    title: '감구마 | 감구마 개발블로그',
    description: '감구마의 개발 블로그',
    images: {
      url: createCDNUrl('/thumbnail/blog_thumbnail.jpeg'),
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ViewTransitions>
      <html lang='ko'>
        <body
          className={`${pretendard.variable} ${D2Coding.variable} min-h-dvh bg-white font-body antialiased dark:bg-[#111110]`}
        >
          <div className='mx-auto flex min-h-dvh max-w-2xl flex-col'>
            <main className='mx-auto w-full max-w-screen-lg grow pb-10 pt-16 sm:px-0 sm:pb-14 sm:pt-20'>
              {children}
            </main>
            <Footer />
          </div>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID as string} />
        </body>
      </html>
    </ViewTransitions>
  );
}
