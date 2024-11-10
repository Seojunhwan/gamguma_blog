'use client';

import { cn } from '@/utils/cn';
import { getRelativeDate } from '@/utils/date';

export function CreatedAt({ createdAt }: { createdAt: string }) {
  return (
    <time className='text-sm font-medium text-neutral-600 dark:text-gray-1100' dateTime={createdAt}>
      {getRelativeDate(createdAt)}
    </time>
  );
}

export function CreatedAtLoader({ className, createdAt }: { className?: string; createdAt: string }) {
  return (
    <time
      className={cn('h-4 w-20 rounded-md bg-neutral-200 dark:bg-gray-1000', className)}
      dateTime={createdAt}
    />
  );
}
