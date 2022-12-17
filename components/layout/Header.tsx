import Link from 'next/link';
import React from 'react';

import { useDarkMode } from '@hooks';

export default function Header() {
  const { toggleTheme } = useDarkMode();

  return (
    <header className='fixed top-0 z-10 w-full py-6 backdrop-blur-sm'>
      <div className='mx-auto flex w-full max-w-5xl items-center justify-between px-4'>
        <div className='max-w-[20%] basis-1/5'>
          <span onClick={toggleTheme}>햄버거</span>
        </div>
        <div className='space-x-2'>
          {/* TODO: <Image src=''/> */}
          <Link href='/'>감구마</Link>
        </div>
        <div className='max-w-[20%] basis-1/5'>
          <input
            className='w-full border-none outline-none focus:border-none focus:outline-none'
            type='text'
          />
        </div>
      </div>
    </header>
  );
}
