import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Craft | 감구마 개발블로그',
  alternates: {
    canonical: '/craft',
  },
  openGraph: {
    url: '/craft',
  },
};

export default function CraftPage() {
  return <div className='dark:text-neutral-300'>뚝딱뚝딱</div>;
}
