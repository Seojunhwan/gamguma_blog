import { D2Coding, firaCode, pretendard } from '@/styles/font';
import '@/styles/globals.css';
import { type PropsWithChildren } from 'react';
import { Footer } from './components';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ko'>
      <body
        className={`${pretendard.variable} ${firaCode.variable} ${D2Coding.variable} min-h-dvh bg-white font-body antialiased dark:bg-[#111110]`}
      >
        <div className='mx-auto flex min-h-dvh max-w-2xl flex-col'>
          <main className='mx-auto w-full max-w-screen-lg grow pb-10 pt-16 sm:px-0 sm:pb-14 sm:pt-20'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
