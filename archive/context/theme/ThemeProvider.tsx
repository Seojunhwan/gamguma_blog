import { useCallback, useEffect, useState } from 'react';

import { ThemeContext } from './';

import type { Theme } from './';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const theme = localStorage.getItem('theme') as Theme;
    return theme || 'light';
  });

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleDarkModePreference = (e: MediaQueryListEvent) => {
      const persistedTheme = localStorage.getItem('theme') as Theme;
      if (persistedTheme) return;

      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    darkModePreference.addEventListener('change', handleDarkModePreference);

    return () => darkModePreference.removeEventListener('change', handleDarkModePreference);
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
