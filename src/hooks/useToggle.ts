'use client';

import { useCallback, useState } from 'react';

export function useToggle(initialState: boolean) {
  const [value, setValue] = useState(initialState);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle, setValue] as const;
}
