import { cn } from '@//utils/cn';
import Link from 'next/link';

export const Header = () => {
  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-30 bg-opacity-95 backdrop-blur-[1px] transition-all duration-300 ease-in-out md:m-4',
      )}
    >
      <div
        className={cn(
          'relative mx-auto max-w-6xl overflow-hidden bg-white py-4',
          // isScrollTop ? 'transition-all md:rounded-xl md:shadow-lg' : '',
        )}
      >
        <div className='mx-auto flex h-full w-full items-center justify-between px-4'>
          <div className='space-x-2 text-center'>
            <Link href='/'>
              <h1 className='font-aggro relative text-3xl font-medium text-gray-800'>
                감구마
                <span className='absolute -right-2 bottom-1 inline-block aspect-square h-2 w-2 rounded-full bg-[#867459] shadow-sm' />
              </h1>
            </Link>
          </div>

          <div className='max-w-[20%] basis-1/5'></div>
        </div>
      </div>
    </header>
  );
};
