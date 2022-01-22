import { useCallback, useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
  const [item, setItem] = useState();

  const initialize = (key: string) => {
    try {
      const item = localStorage.getItem(key);
      if (item && typeof item !== 'undefined') {
        return JSON.parse(item);
      }
      localStorage.setItem(key, initialValue);
      return initialValue;
    } catch {
      return initialValue;
    }
  };

  const setValue = useCallback(
    (value) => {
      try {
        if (typeof value === 'undefined') {
          return;
        }
        setItem(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key, setItem],
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  useEffect(() => {
    setItem(initialize(key));
  }, []);

  return { item, setValue, remove };
};
