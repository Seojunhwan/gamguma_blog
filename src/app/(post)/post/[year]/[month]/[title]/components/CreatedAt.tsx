import { getRelativeDate } from '@/utils/date';
import { unstable_noStore as noStore } from 'next/cache';

function formatDate(date: Date | string) {
  noStore();
  return getRelativeDate(date);
}

export function CreatedAt({ createdAt }: { createdAt: string }) {
  return (
    <time className='text-sm font-medium text-neutral-600 dark:text-gray-1100' dateTime={createdAt}>
      {formatDate(createdAt)}
    </time>
  );
}
