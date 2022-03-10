import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { isDarkAtom } from '../../recoil/atoms';
import { darkTheme, lightTheme } from '../../styles/theme';

interface IProps {
  children: React.ReactNode;
}
export default function SSRThemeProvider({ children }: IProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const [isMounted, setIsMounted] = useState(false);

  const body = <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }
  return body;
}
