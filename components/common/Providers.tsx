import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
