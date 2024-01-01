import { D2Coding, firaCode, pretendard } from '@/styles/font';
import '@/styles/globals.css';
import { type PropsWithChildren } from 'react';
import { Footer } from './components';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ko'>
      <body
        className={`${pretendard.variable} ${firaCode.variable} ${D2Coding.variable} bg-white font-body antialiased dark:bg-[#111110]`}
      >
        <div className='mx-auto max-w-2xl '>
          <main className='mx-auto w-full max-w-screen-lg pb-10 pt-16 sm:pb-14 sm:pt-20'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
