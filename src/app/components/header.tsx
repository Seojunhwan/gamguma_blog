import { Link } from 'next-view-transitions';

const NAV_ITEMS = [
  { title: 'about', href: '/about' },
  { title: 'photo', href: '/photo' },
  { title: 'craft', href: '/craft' },
];

export const Header = () => {
  return (
    <header className='mb-8 flex items-center gap-2'>
      <h1 className='p-3 text-lg font-semibold text-neutral-900 dark:text-gray-1200'>
        <Link href='/'>gamguma</Link>
      </h1>
      <nav className='font-medium dark:text-neutral-400'>
        <ul className='flex items-center gap-3'>
          {NAV_ITEMS.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className='hover:text-neutral-600 dark:hover:text-gray-1200'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
