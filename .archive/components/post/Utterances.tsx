import { useEffect, useRef } from 'react';

export function Utterances() {
  const utterances = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof utterances.current === null) return;
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.setAttribute('repo', 'Seojunhwan/gamguma_blog');
    scriptElem.setAttribute('issue-term', 'title');
    scriptElem.setAttribute('theme', 'github-light');
    scriptElem.setAttribute('label', 'blog-comment');
    scriptElem.crossOrigin = 'anonymous';
    utterances.current?.appendChild(scriptElem);
  }, []);

  return <section ref={utterances} className='mt-2 [&>utterances]:w-full' />;
}
