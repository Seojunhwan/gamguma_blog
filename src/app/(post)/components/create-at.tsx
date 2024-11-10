'use client';

import { Suspense } from 'react';
import { getRelativeDate } from '@/utils/date';

export function CreatedAt({ createdAt }: { createdAt: string }) {
  return (
    <Suspense fallback={<span className='w-4 animate-pulse'></span>}>
      <time
        dateTime={createdAt}
        className='whitespace-nowrap text-xs font-light text-neutral-600 dark:text-gray-1100'
      >
        {getRelativeDate(createdAt)}
      </time>
    </Suspense>
  );
}
