import { cn } from '@/utils/cn';
import { type ReactNode } from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  outline?: boolean;
}

export const Callout = ({ children, icon, className, outline, ...restProps }: CalloutProps) => {
  return (
    <div
      className={cn(
        'flex rounded-lg border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-800 dark:border-gray-600 dark:bg-gray-400 dark:text-neutral-200',
        outline && 'border',
        className,
      )}
      {...restProps}
    >
      {icon && <span className='mr-3 flex items-center'>{icon}</span>}
      <div className='flex items-center text-sm *:m-0'>{children}</div>
    </div>
  );
};
