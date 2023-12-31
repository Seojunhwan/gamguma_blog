import { type ReactNode } from 'react';

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='mx-auto max-w-3xl'>{children}</div>
    </>
  );
}
