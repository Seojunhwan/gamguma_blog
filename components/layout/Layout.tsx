import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { useSetRecoilState } from 'recoil';

import { Header, Footer } from '.';
import { isDarkAtom } from '@recoil/atoms';

import { aggro, pretendard, lightTheme } from '@styles';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const setIsDark = useSetRecoilState(isDarkAtom);
  const router = useRouter();

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
        <div className={`${pretendard.variable} ${aggro.variable}`}>
          <Header />
          <motion.main className={`mx-auto max-w-5xl pt-[128px] font-sans`}>{children}</motion.main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
