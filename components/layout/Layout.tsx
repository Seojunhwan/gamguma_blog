import type { ReactNode } from 'react';

import { Header, Footer } from '.';
import { aggro, pretendard } from '@styles';
import { cls } from '@utils';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <div className={cls(pretendard.variable, aggro.variable, 'flex min-h-screen flex-col')}>
        <Header />
        <main className={`mx-auto w-full max-w-5xl grow pt-[128px] font-sans`}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
