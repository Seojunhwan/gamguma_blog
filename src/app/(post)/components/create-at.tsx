'use client';

import { getRelativeDate } from '@/utils/date';

export function CreatedAt({ createdAt }: { createdAt: string }) {
  return (
    <time
      dateTime={createdAt}
      className='whitespace-nowrap text-xs font-light text-neutral-600 dark:text-gray-1100'
    >
      {getRelativeDate(createdAt)}
    </time>
  );
}
