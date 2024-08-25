import { usePreservedCallback } from '@/hooks/usePrerservedCallback';
import { useEffect } from 'react';

export function useInterval(fn: () => void, interval: number) {
  const callback = usePreservedCallback(fn);

  useEffect(() => {
    const timerId = setInterval(callback, interval);

    return () => clearInterval(timerId);
  }, [interval, callback]);
}
