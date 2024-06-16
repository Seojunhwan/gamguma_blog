import { useEffect, useMemo, useRef } from 'react';

export function usePreservedCallback<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}
