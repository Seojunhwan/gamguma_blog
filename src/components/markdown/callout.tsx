import { cn } from '@/utils/cn';
import { type ReactNode } from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

export const Callout = ({ children, icon, className, ...restProps }: CalloutProps) => {
  return (
    <div
      className={cn(
        'flex rounded border border-neutral-200 bg-neutral-50 p-2 dark:border-gray-600 dark:bg-gray-400',
        className,
      )}
      {...restProps}
    >
      {icon && <span className='mr-3 flex items-center'>{icon}</span>}
      <div className='flex items-center text-sm *:m-0'>{children}</div>
    </div>
  );
};
