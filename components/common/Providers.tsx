import { RecoilRoot } from 'recoil';
import { MDXProvider } from '@mdx-js/react';

import Code from '@components/post/Code';
import ResponsiveImage from '@components/post/ResponsiveImage';

const components = {
  code: (props: any) => <Code {...props} />,
  img: (props: any) => <ResponsiveImage {...props} />,
};

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <RecoilRoot>
      <MDXProvider components={components}>{children}</MDXProvider>
    </RecoilRoot>
  );
}
