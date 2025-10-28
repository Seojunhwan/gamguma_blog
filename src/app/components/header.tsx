import { Link } from 'next-view-transitions';
import { HeaderItem } from './_components/header-item';

const NAV_ITEMS = [
  { title: 'about', href: '/about' },
  { title: 'photo', href: '/photo', disabled: true },
  { title: 'craft', href: '/craft', disabled: true },
];

export const Header = () => {
  return (
    <header className='mb-8 flex items-center gap-4 p-3' role='navigation'>
      <h1 className='text-lg font-semibold text-neutral-900 dark:text-gray-1200'>
        <Link href='/'>gamguma</Link>
      </h1>
      <nav className='font-medium dark:text-neutral-400'>
        <ul className='flex items-center gap-3'>
          {NAV_ITEMS.map((item) => (
            <HeaderItem key={item.title} title={item.title} href={item.href} disabled={item.disabled} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
