import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import type { PropsWithChildren } from 'react';

interface Props {
  selector: string;
}

export function Portal({ children, selector }: PropsWithChildren<Props>) {
  const ref = useRef<Element | null>(null);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setIsMount(true);
  }, [selector]);

  return isMount && ref.current ? createPortal(children, ref.current) : null;
}
