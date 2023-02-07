import Link from 'next/link';

import { cls, TAGS } from '@utils';
import { useRouter } from 'next/router';

export function CategoryNavigation() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div
      className={cls(
        'group flex flex-col items-center justify-center rounded-md py-3 ring-1 ring-gray-200 transition-all hover:ring-4 hover:ring-amber-200 active:ring-amber-300',
        category ? 'ring-2 ring-amber-200 hover:ring-amber-300' : '',
      )}
    >
      <h3 className='mb-1 text-sm font-light text-gray-500 transition-colors group-hover:font-medium group-hover:text-gray-700'>
        카테고리
      </h3>
      <ul className='text-center'>
        {TAGS.map((tag) => (
          <Link key={tag} href={`/categories/${tag.toLocaleLowerCase()}`}>
            <li
              className={cls(
                'py-1 px-6 text-sm font-medium text-gray-700 transition-colors hover:bg-amber-200 active:bg-amber-300',
                tag.toLocaleLowerCase() === category ? 'bg-amber-200 hover:bg-amber-300' : '',
              )}
            >
              <span>{tag}</span>
              <span></span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
