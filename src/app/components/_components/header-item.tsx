'use client';

import { cn } from '@/utils/cn';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

interface HeaderItemProps {
  title: string;
  href: string;
}

export const HeaderItem = ({ title, href }: HeaderItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li key={title}>
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
