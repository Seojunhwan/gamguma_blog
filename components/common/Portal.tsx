import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  selector: string;
}

export default function Portal({ children, selector }: Props) {
  const ref = useRef<Element | null>(null);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setIsMount(true);
  }, [selector]);
  return isMount && ref.current ? createPortal(children, ref.current) : null;
}
