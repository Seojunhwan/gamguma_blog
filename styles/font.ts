import localFont from '@next/font/local';
import { Fira_Code } from '@next/font/google';

export const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-Thin.subset.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-Light.subset.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-Regular.subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-Bold.subset.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard/woff2-subset/Pretendard-Black.subset.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const aggro = localFont({
  src: [
    {
      path: './fonts/Aggro/Aggro-M.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-aggro',
  display: 'swap',
});

export const firaCode = Fira_Code({
  variable: '--font-fira-code',
  display: 'swap',
});
