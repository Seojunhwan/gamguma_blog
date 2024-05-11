import { BASE_URL } from '@/constants/url';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo | 감구마 개발블로그',
  openGraph: {
    url: BASE_URL + '/photo',
  },
};

export default function PhotoPage() {
  return <div className='dark:text-neutral-300'>뚝딱뚝딱</div>;
}
