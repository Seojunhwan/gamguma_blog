import { useTheme } from '@hooks';
import styled from 'styled-components';

interface Props {
  isScrollingDown: boolean;
  className?: string;
}

export default function ThemeChangeButton({ isScrollingDown, className }: Props) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Container onClick={toggleTheme} className={className}>
      {isDark ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          height='24'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          width='24'
        >
          <circle cx='12' cy='12' r='5' />
          <line x1='12' x2='12' y1='1' y2='3' />
          <line x1='12' x2='12' y1='21' y2='23' />
          <line x1='4.22' x2='5.64' y1='4.22' y2='5.64' />
          <line x1='18.36' x2='19.78' y1='18.36' y2='19.78' />
          <line x1='1' x2='3' y1='12' y2='12' />
          <line x1='21' x2='23' y1='12' y2='12' />
          <line x1='4.22' x2='5.64' y1='19.78' y2='18.36' />
          <line x1='18.36' x2='19.78' y1='5.64' y2='4.22' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill={isScrollingDown ? 'black' : 'white'}
        >
          <path d='M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z' />
        </svg>
      )}
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  svg {
    width: 2.4rem;
  }
  svg,
  path {
    transition: all 0.2s ease;
    transition-property: fill, color;
  }
  &:hover {
    svg {
      color: #ffdd59;
      fill: #ffdd59;
      path {
      }
    }
  }
`;
function useDarkMode(): { isDark: any; toggleTheme: any } {
  throw new Error('Function not implemented.');
}
