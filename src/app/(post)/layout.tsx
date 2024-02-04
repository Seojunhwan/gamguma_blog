import Link from 'next/link';
import { type PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className='mb-8'>
        <h1 className='p-3 text-lg font-semibold text-neutral-900 dark:text-gray-1200'>
          <Link href='/'>Gamguma</Link>
        </h1>
      </header>
      {children}
    </>
  );
}
