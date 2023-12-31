import { D2Coding, firaCode, pretendard } from '@//styles/font';
import '@/styles/globals.css';
import { type PropsWithChildren } from 'react';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} ${firaCode.variable} ${D2Coding.variable} font-body`}>
        <Header />
        <main className='mx-auto w-full max-w-screen-lg px-2 pb-10 pt-16 sm:px-5 sm:pb-14 sm:pt-20'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
