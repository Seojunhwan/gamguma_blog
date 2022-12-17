import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../../recoil/atoms';
import { lightTheme } from '@styles/theme';

import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
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
      {/* TODO: ThemeProvider 제거 */}
      <ThemeProvider theme={lightTheme}>
        <Header />
        <main className='mx-auto max-w-5xl pt-24'>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
