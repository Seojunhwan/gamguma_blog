import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSetRecoilState } from 'recoil';

import type { ReactNode } from 'react';

import { Header, Footer } from '.';
import { isDarkAtom } from '@recoil/atoms';
import { aggro, pretendard } from '@styles';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const setIsDark = useSetRecoilState(isDarkAtom);

  useEffect(() => {
    const persistTheme = localStorage.getItem('theme');
    if (typeof persistTheme === 'string' && persistTheme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  return (
    <>
      <div className={`${pretendard.variable} ${aggro.variable} flex min-h-screen flex-col`}>
        <Header />
        <main className={`mx-auto w-full max-w-5xl grow pt-[128px] font-sans`}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
