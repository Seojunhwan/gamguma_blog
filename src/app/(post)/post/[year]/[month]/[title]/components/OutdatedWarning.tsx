import { Callout } from '@/components/markdown/callout';
import { getDifferenceDate } from '@/utils/date';
import { unstable_noStore as noStore } from 'next/cache';

function getDiffDay(date: Date | string) {
  noStore();
  return getDifferenceDate(new Date(), date);
}

export function OutdatedWarning({ createdAt }: { createdAt: string }) {
  const { diffDay } = getDiffDay(createdAt);

  if (diffDay < 365) {
    return null;
  }

  return (
    <Callout icon={'⚠️'} className='-mt-2 mb-8'>
      <p className='text-sm text-gray-500 dark:text-gray-1200'>
        이 글은 <strong>{diffDay}일</strong> 전에 작성되었습니다.
        <br />
        최신 정보가 아닐 수 있습니다.
      </p>
    </Callout>
  );
}
