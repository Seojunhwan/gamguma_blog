import { Metadata } from 'next';
import { WorkExperience } from './_components/work-experience';
import { Section } from './_components/shared';

export const metadata: Metadata = {
  title: 'About | 감구마 개발블로그',
  keywords: ['개발', '개발자', '감구마', '프론트엔드', '이력', '깃허브', 'seojunhwan'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'profile',
    firstName: 'junhwan',
    lastName: 'seo',
    username: 'seojunhwan',
    gender: 'male',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <section className='px-3 dark:text-neutral-300'>
      <h2>
        안녕하세요,
        <br />
        소프트웨어 엔지니어 서준환입니다.
      </h2>

      <div className='mt-10 flex flex-col gap-8'>
        <Section title='Experience'>
          <WorkExperience />
        </Section>
        <Section title='Project'>🚧</Section>
      </div>
    </section>
  );
}
