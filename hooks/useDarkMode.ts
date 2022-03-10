import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../recoil/atoms';

const useDarkMode = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  if (isDark === undefined) {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches === true) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }

  return [isDark];
};

export default useDarkMode;
