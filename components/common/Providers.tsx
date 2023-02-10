import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
