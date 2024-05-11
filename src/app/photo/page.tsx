import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo | 감구마 개발블로그',
  alternates: {
    canonical: '/photo',
  },
  openGraph: {
    url: '/photo',
  },
};

export default function PhotoPage() {
  return <div className='dark:text-neutral-300'>뚝딱뚝딱</div>;
}
