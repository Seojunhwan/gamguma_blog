import Link from 'next/link';
import React from 'react';

import { useTheme } from '@hooks';

export default function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header className='fixed top-0 z-10 w-full bg-white bg-opacity-80 py-6 backdrop-blur-[1px]'>
      <div className='mx-auto flex w-full max-w-5xl items-center justify-between px-4'>
        <div className='max-w-[20%] basis-1/5'>
          <span onClick={() => alert('만드는 중 !')}>
            <svg
              className='aspect-square h-8 w-8 cursor-pointer rounded-md stroke-gray-600 p-1 transition-shadow hover:stroke-amber-400 hover:ring-1 hover:ring-amber-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </span>
        </div>
        <div className='grow space-x-2 text-center'>
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
