import { memo as ReactMemo, useEffect } from 'react';
import Prism from 'prismjs';
import { cls } from '@utils';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-c';
// import 'prismjs/components/prism-tsx';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className: string;
}

function Code({ children, className: language }: Props) {
  useEffect(() => {
    if (typeof window !== undefined) {
      Prism.highlightAll();
    }
  }, []);

  return <code className={cls(language)}>{children}</code>;
}

export default ReactMemo(Code);
