import { firaCode, pretendard } from '@/styles/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} ${firaCode.variable}`}>{children}</body>
    </html>
  );
}
