import localFont from '@next/font/local';
import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../../recoil/atoms';
import { lightTheme } from '@styles/theme';

import Header from './Header';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const pretendard = localFont({
  src: [
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-Thin.subset.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-Light.subset.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-Regular.subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-Bold.subset.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../styles/fonts/Pretendard/woff2-subset/Pretendard-Black.subset.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

const aggro = localFont({
  src: [
    {
      path: '../../styles/fonts/Aggro/Aggro-M.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-aggro',
});

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
        <div className={`${pretendard.variable} ${aggro.variable}`}>
          <Header />
          <main className={`mx-auto max-w-5xl pt-[128px] font-sans`}>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
