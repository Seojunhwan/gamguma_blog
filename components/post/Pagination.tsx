import Link from 'next/link';
import { memo } from 'react';

import { usePagination } from '@hooks';
import { cls } from '@utils';

interface Props {
  paginationLength: number;
  currentPage: number;
}

function Pagination({ paginationLength, currentPage }: Props) {
  const { pages, isFirstPage, isLastPage, previousPage, nextPage } = usePagination(
    currentPage,
    paginationLength,
  );

  return (
    <div className='flex justify-center space-x-2'>
      {!isFirstPage && (
        <div>
          <Link href={previousPage}>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </Link>
        </div>
      )}

      {pages.map((page) => (
        <div key={page} className={cls(page === currentPage ? 'bg-orange-500' : '')}>
          <Link href={page === 1 ? '/' : `/page/${page}`}>{page}</Link>
        </div>
      ))}

      {!isLastPage && (
        <div>
          <Link href={nextPage}>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}

export default memo(Pagination);
