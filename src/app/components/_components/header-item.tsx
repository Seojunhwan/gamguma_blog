'use client';

import { cn } from '@/utils/cn';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

interface HeaderItemProps {
  title: string;
  href: string;
  disabled?: boolean;
}

export const HeaderItem = ({ title, href, disabled }: HeaderItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (disabled) {
    return (
      <li className='cursor-not-allowed'>
        <span className='text-neutral-400 line-through dark:text-gray-1200'>{title}</span>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'hover:text-neutral-600 dark:hover:text-gray-1200',
          isActive && 'text-neutral-600 dark:text-gray-1200',
        )}
      >
        {title}
      </Link>
    </li>
  );
};
