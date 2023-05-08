import Link from 'next/link';
import { memo } from 'react';

import { usePagination } from '@hooks';
import { cls } from '@utils';

interface Props {
  paginationLength: number;
  currentPage: number;
}

function _Pagination({ paginationLength, currentPage }: Props) {
  const { pages, isFirstPage, isLastPage, previousPage, nextPage } = usePagination(
    currentPage,
    paginationLength,
  );

  return (
    <div className='flex justify-center space-x-2'>
      {!isFirstPage && (
        <Link href={previousPage}>
          <span className='flex aspect-square h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-gray-200 hover:ring-2 hover:ring-gray-200 hover:ring-offset-2'>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </span>
        </Link>
      )}

      {pages.map((page) => (
        <Link key={page} href={page === 1 ? '/' : `/page/${page}`}>
          <span
            className={cls(
              'flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-sm font-medium transition-all',
              page === currentPage
                ? 'bg-amber-300 hover:bg-amber-400 hover:ring-2 hover:ring-amber-400 hover:ring-offset-2'
                : 'hover:bg-gray-200 hover:ring-2 hover:ring-gray-200 hover:ring-offset-2',
            )}
          >
            {page}
          </span>
        </Link>
      ))}

      {!isLastPage && (
        <Link href={nextPage}>
          <span className='flex aspect-square h-10 w-10 items-center justify-center rounded-md transition-all hover:bg-gray-200 hover:ring-2 hover:ring-gray-200 hover:ring-offset-2'>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
}

export const Pagination = memo(_Pagination);
