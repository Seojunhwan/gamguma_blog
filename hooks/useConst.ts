import { useRef } from 'react';

export const useConst = <T extends any>(init: T) => {
  const ref = useRef<T | null>(null);
  if (ref.current === null) {
    ref.current = init;
  }
  return ref.current as T;
};
