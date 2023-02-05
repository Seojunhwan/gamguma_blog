import { memo as ReactMemo, PropsWithChildren, useEffect } from 'react';
import hljs from 'highlight.js';

import { cls } from '@utils';

import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));

interface Props {
  className: string;
}

function Code({ children, className: language }: PropsWithChildren<Props>) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <code className={cls(language)}>{children}</code>;
}

export default ReactMemo(Code);
