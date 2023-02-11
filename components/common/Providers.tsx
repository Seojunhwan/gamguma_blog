import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@context';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <RecoilRoot>
      <ThemeProvider>{children}</ThemeProvider>
    </RecoilRoot>
  );
}
