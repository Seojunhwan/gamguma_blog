import { Button } from '@/components/common';
import { Link } from 'next-view-transitions';

export default function PostPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-2xl font-bold text-neutral-900 dark:text-gray-1200'>404</h1>
        <p className='text-lg text-neutral-900 dark:text-gray-1200'>존재하지 않는 페이지 입니다.</p>
      </div>
      <Link href='/'>
        <Button variant='ghost'>홈으로 돌아가기</Button>
      </Link>
    </div>
  );
}
