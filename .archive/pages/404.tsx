import { useRouter } from 'next/router';

import { Empty } from '@components/lotties';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl'>존재하지 않은 페이지입니다.</h1>
      <Empty className='w-1/2 md:w-1/3' />
      <button className='rounded-md bg-amber-200 px-10 py-2 ring-1 ring-amber-200 transition-all  hover:ring-4'>
        <a onClick={() => router.back()}>뒤로가기</a>
      </button>
    </div>
  );
}
