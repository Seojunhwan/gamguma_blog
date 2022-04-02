import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../recoil/atoms';

const useDarkMode = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleTheme = () => {
    setIsDark(isDark ? false : true);
    localStorage.setItem('isDark', JSON.stringify(isDark ? false : true));
  };

  return { isDark, toggleTheme };
};

export default useDarkMode;
