'use client';

import { getRelativeDate } from '@/utils/date';

export function CreatedAt({ createdAt }: { createdAt: string }) {
  return (
    <time className='text-sm font-medium text-neutral-600 dark:text-gray-1100' dateTime={createdAt}>
      {getRelativeDate(createdAt)}
    </time>
  );
}
