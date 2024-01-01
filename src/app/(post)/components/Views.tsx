import { getPostViewCountBySlug } from '@/db/post';
import { cn } from '@/utils/cn';
import type { HTMLAttributes } from 'react';

interface ViewsProps extends HTMLAttributes<HTMLSpanElement> {
  slug: string;
}

export const Views = async ({ slug, className, ...restProps }: ViewsProps) => {
  const views = await getPostViewCountBySlug(slug);
  return (
    <span className={cn('text-xs font-light text-neutral-600 dark:text-gray-1100', className)} {...restProps}>
      {views.toLocaleString()} 조회
    </span>
  );
};

const ViewsLoader = () => {
  return <span className='inline-block h-4 w-12 animate-pulse rounded-sm bg-neutral-100 dark:bg-gray-400' />;
};

Views.Loader = ViewsLoader;
