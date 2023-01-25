import Link from 'next/link';
import React from 'react';

import { useScrolling } from '@hooks';
import { cls } from '@utils';

export default function Header() {
  const isScrollDown = useScrolling('down');

  return (
    <header
      className={cls(
        'fixed top-0 z-10 w-full bg-white bg-opacity-95 py-6 backdrop-blur-[1px] transition-all duration-300 ease-in-out',
        isScrollDown ? 'h-16 border-b-[1px]' : 'h-32 bg-transparent',
      )}
    >
      <div className='mx-auto flex h-full w-full max-w-5xl items-center justify-between px-4 lg:px-2'>
        <div className='space-x-2 text-center'>
          {/* TODO: <Image src=''/> */}
          <Link href='/'>
            <h1 className='relative font-aggro text-3xl font-medium text-gray-800'>
              감구마
              <span className='absolute -right-2 bottom-1 inline-block aspect-square h-2 w-2 rounded-full bg-[#867459] shadow-sm' />
            </h1>
          </Link>
        </div>
        <div className='max-w-[20%] basis-1/5'>
          {/* <span onClick={() => alert('만드는 중 !')}>
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
          </span> */}
        </div>
        <div className='max-w-[20%] basis-1/5'>
          {/* <input
            className='w-full border-none outline-none focus:border-none focus:outline-none'
            type='text'
          /> */}
        </div>
      </div>
    </header>
  );
}
