import { ThemeProvider } from '@context';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
