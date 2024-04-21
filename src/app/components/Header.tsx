import Link from 'next/link';

export const Header = () => {
  return (
    <header className='mb-8 flex items-center gap-2'>
      <h1 className='p-3 text-lg font-semibold text-neutral-900 dark:text-gray-1200'>
        <Link href='/'>gamguma</Link>
      </h1>
      <nav>
        <ul className='flex gap-2'>
          <li>
            <Link href='/about'>about</Link>
          </li>
          <li>
            <Link href='/photo'>photo</Link>
          </li>
          <li>
            <Link href='/craft'>craft</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
