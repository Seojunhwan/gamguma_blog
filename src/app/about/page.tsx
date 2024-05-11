import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | 감구마 개발블로그',
  keywords: ['개발', '개발자', '감구마', '프론트엔드', '이력', '깃허브', 'seojunhwan'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
  },
};

export default function AboutPage() {
  return <div className='dark:text-neutral-300'>뚝딱뚝딱</div>;
}
