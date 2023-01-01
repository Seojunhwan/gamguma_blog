import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../recoil/atoms';

export const useTheme = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const toggleTheme = () => {
    setIsDark(isDark ? false : true);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  };

  return { isDark, toggleTheme };
};
