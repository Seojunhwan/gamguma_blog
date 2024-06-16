import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
}

export function Section({ title, children, className, ...restProps }: SectionProps) {
  return (
    <section className={cn('flex flex-col gap-6', className)} {...restProps}>
      <h2 className='text-lg font-bold text-neutral-900 lg:text-xl dark:text-neutral-100'>{title}</h2>
      {children}
    </section>
  );
}
