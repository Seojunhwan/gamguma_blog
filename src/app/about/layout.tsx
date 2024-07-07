import { Header, Footer } from '@/app/components';
import { type PropsWithChildren } from 'react';

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto flex min-h-dvh max-w-2xl flex-col'>
      <main className='mx-auto w-full max-w-screen-lg grow pb-10 pt-16 sm:px-0 sm:pb-14 sm:pt-20'>
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
}
