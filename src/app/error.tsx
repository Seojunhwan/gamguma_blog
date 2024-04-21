'use client';

import { Button } from '@/components/common';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-2xl font-bold text-neutral-900 dark:text-gray-1200'>500</h1>
        <p className='text-lg text-neutral-900 dark:text-gray-1200'>무언가 잘못되었습니다.</p>
      </div>
      <Link href='/'>
        <Button className='text-neutral-950 hover:bg-neutral-100 dark:text-gray-1200 dark:hover:bg-gray-300'>
          홈으로 돌아가기
        </Button>
      </Link>
    </div>
  );
}
