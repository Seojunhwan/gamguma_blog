import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ThemeChangeButton from '../ThemeChangeButton';
import React, { useEffect, useState } from 'react';
import useScrolling from '../../hooks/useScroll';
import { throttle } from '../../utils/utils';
import media from '../../styles/media';
import Modal from '../common/Modal';
import useDarkMode from '../../hooks/useDarkMode';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDark, toggleTheme } = useDarkMode();
  const isScrollingDown = useScrolling('down');
  const router = useRouter();

  const toggleModal = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (event.defaultPrevented) {
      return;
    }
    if (isModalOpen) {
      document.body.style.cssText = '';
    } else {
      document.body.style.cssText = `overflow-y: hidden`;
    }
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const updateSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    const handleResize = throttle(updateSize, 100);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Wrapper isDark={isDark} isScrollingDown={isScrollingDown}>
        <Container isScrollingDown={isScrollingDown}>
          <div>
            <Link href='/'>감구마</Link>
          </div>
          <Nav isMobile={isMobile} isScrollingDown={isScrollingDown}>
            {isMobile ? (
              <MenuModalButton isDark={isDark} isScrollingDown={isScrollingDown} onClick={toggleModal}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  id='Layer_1'
                  data-name='Layer 1'
                  viewBox='0 0 24 24'
                  width='18'
                >
                  <path d='M8.81,0H2.19A2.19,2.19,0,0,0,0,2.19V8.81A2.19,2.19,0,0,0,2.19,11H8.81A2.19,2.19,0,0,0,11,8.81V2.19A2.19,2.19,0,0,0,8.81,0ZM9,8.81A.18.18,0,0,1,8.81,9H2.19A.18.18,0,0,1,2,8.81V2.19A.18.18,0,0,1,2.19,2H8.81A.18.18,0,0,1,9,2.19Z' />
                  <path d='M21.81,0H15.19A2.19,2.19,0,0,0,13,2.19V8.81A2.19,2.19,0,0,0,15.19,11h6.62A2.19,2.19,0,0,0,24,8.81V2.19A2.19,2.19,0,0,0,21.81,0ZM22,8.81a.18.18,0,0,1-.19.19H15.19A.18.18,0,0,1,15,8.81V2.19A.18.18,0,0,1,15.19,2h6.62a.18.18,0,0,1,.19.19Z' />
                  <path d='M8.81,13H2.19A2.19,2.19,0,0,0,0,15.19v6.62A2.19,2.19,0,0,0,2.19,24H8.81A2.19,2.19,0,0,0,11,21.81V15.19A2.19,2.19,0,0,0,8.81,13ZM9,21.81a.18.18,0,0,1-.19.19H2.19A.18.18,0,0,1,2,21.81V15.19A.18.18,0,0,1,2.19,15H8.81a.18.18,0,0,1,.19.19Z' />
                  <path d='M21.81,13H15.19A2.19,2.19,0,0,0,13,15.19v6.62A2.19,2.19,0,0,0,15.19,24h6.62A2.19,2.19,0,0,0,24,21.81V15.19A2.19,2.19,0,0,0,21.81,13ZM22,21.81a.18.18,0,0,1-.19.19H15.19a.18.18,0,0,1-.19-.19V15.19a.18.18,0,0,1,.19-.19h6.62a.18.18,0,0,1,.19.19Z' />
                </svg>
              </MenuModalButton>
            ) : (
              <>
                <ThemeChangeButton isScrollingDown={isScrollingDown} />
                <Link href='/about'>
                  <span>About{router.asPath === '/about' && <Indicator layoutId='indicator' />}</span>
                </Link>
                <Link href='/dev'>
                  <span>Dev{router.asPath === '/dev' && <Indicator layoutId='indicator' />}</span>
                </Link>
                <Link href='/tags'>
                  <span>Tags{router.asPath.startsWith('/tags') && <Indicator layoutId='indicator' />}</span>
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Wrapper>
      <Modal visible={isModalOpen} toggleModal={toggleModal}>
        <MenuModalContainer onClick={(e) => e.preventDefault()}>
          <MenuModalItem onClick={toggleTheme}>
            <StyledThemeChangeButton isScrollingDown={isScrollingDown} />
            <span>Theme</span>
          </MenuModalItem>
          <MenuModalItem>
            <Link href='/about'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                version='1.1'
                x='0px'
                y='0px'
                width='24'
                viewBox='0 0 50 50'
                enableBackground='new 0 0 50 50'
                xmlSpace='preserve'
              >
                <g>
                  <path d='M25,1C11.767,1,1,11.767,1,25c0,7.091,3.094,13.472,8,17.869v0.017l0.348,0.3c0.061,0.053,0.128,0.097,0.19,0.149   c0.431,0.364,0.875,0.713,1.331,1.047c0.123,0.09,0.246,0.177,0.371,0.264c0.484,0.34,0.979,0.664,1.487,0.968   c0.085,0.051,0.172,0.099,0.257,0.148c0.557,0.324,1.126,0.629,1.71,0.908c0.006,0.003,0.012,0.005,0.018,0.008   c1.249,0.595,2.559,1.082,3.915,1.456c0.025,0.007,0.05,0.015,0.075,0.021c0.641,0.175,1.293,0.322,1.954,0.443   c0.062,0.011,0.123,0.022,0.185,0.033c0.638,0.112,1.284,0.201,1.939,0.262c0.075,0.007,0.15,0.011,0.224,0.017   C23.663,48.965,24.327,49,25,49s1.337-0.035,1.996-0.09c0.075-0.006,0.15-0.01,0.224-0.017c0.655-0.06,1.301-0.15,1.939-0.262   c0.062-0.011,0.123-0.022,0.185-0.033c0.661-0.121,1.313-0.268,1.954-0.443c0.025-0.007,0.05-0.014,0.075-0.021   c1.356-0.374,2.666-0.861,3.915-1.456c0.006-0.003,0.012-0.005,0.018-0.008c0.584-0.279,1.153-0.585,1.71-0.908   c0.086-0.05,0.172-0.097,0.257-0.148c0.509-0.304,1.004-0.629,1.487-0.968c0.124-0.087,0.248-0.174,0.371-0.264   c0.456-0.334,0.9-0.683,1.331-1.047c0.062-0.052,0.129-0.096,0.19-0.149l0.348-0.3v-0.017c4.906-4.398,8-10.778,8-17.869   C49,11.767,38.233,1,25,1z M25,25c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S29.411,25,25,25z M28,27c6.065,0,11,4.935,11,11   v3.958c-0.042,0.035-0.086,0.067-0.128,0.102c-0.395,0.321-0.8,0.626-1.214,0.918c-0.092,0.065-0.182,0.132-0.274,0.195   c-0.447,0.305-0.906,0.591-1.373,0.862c-0.085,0.05-0.171,0.099-0.257,0.148c-0.49,0.275-0.989,0.533-1.498,0.769   c-0.053,0.025-0.107,0.049-0.161,0.073c-1.661,0.755-3.411,1.302-5.212,1.626c-0.057,0.01-0.114,0.021-0.171,0.031   c-0.567,0.097-1.139,0.172-1.715,0.225c-0.079,0.007-0.159,0.012-0.239,0.018C26.175,46.97,25.589,47,25,47   s-1.175-0.03-1.758-0.077c-0.079-0.006-0.159-0.011-0.239-0.018c-0.576-0.053-1.148-0.127-1.715-0.225   c-0.057-0.01-0.114-0.02-0.171-0.031c-1.801-0.324-3.551-0.871-5.212-1.626c-0.054-0.025-0.108-0.048-0.161-0.073   c-0.509-0.236-1.008-0.494-1.498-0.769c-0.086-0.049-0.171-0.098-0.257-0.148c-0.467-0.27-0.926-0.557-1.373-0.862   c-0.093-0.063-0.183-0.13-0.274-0.195c-0.414-0.292-0.819-0.596-1.214-0.918c-0.042-0.034-0.086-0.067-0.128-0.102V38   c0-6.065,4.935-11,11-11H28z M41,40.076V38c0-6.271-4.464-11.519-10.38-12.735C33.261,23.464,35,20.431,35,17   c0-5.514-4.486-10-10-10s-10,4.486-10,10c0,3.431,1.739,6.464,4.38,8.265C13.464,26.481,9,31.729,9,38v2.076   C5.284,36.135,3,30.831,3,25C3,12.869,12.869,3,25,3s22,9.869,22,22C47,30.831,44.716,36.135,41,40.076z' />
                </g>
                <g></g>
              </svg>
              <span>About{router.asPath === '/about' && <Indicator layoutId='indicator' />}</span>
            </Link>
          </MenuModalItem>
          <MenuModalItem>
            <Link href='/dev'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='28'>
                <path d='M38.12,7H9.88A4.89,4.89,0,0,0,5,11.88V36.12A4.89,4.89,0,0,0,9.88,41H38.12A4.89,4.89,0,0,0,43,36.12V11.88A4.89,4.89,0,0,0,38.12,7ZM41,36.12A2.88,2.88,0,0,1,38.12,39H9.88A2.88,2.88,0,0,1,7,36.12V18H41ZM41,16H7V11.88A2.88,2.88,0,0,1,9.88,9H38.12A2.88,2.88,0,0,1,41,11.88Z' />
                <path d='M11.44,11.63a1,1,0,1,0,0,2A1,1,0,0,0,11.44,11.63Z' />
                <path d='M16.46,11.63a1,1,0,0,0,0,2A1,1,0,1,0,16.46,11.63Z' />
                <path d='M21.49,11.63a1,1,0,0,0,0,2A1,1,0,1,0,21.49,11.63Z' />
              </svg>
              <span>Dev{router.asPath === '/dev' && <Indicator layoutId='indicator' />}</span>
            </Link>
          </MenuModalItem>
          <MenuModalItem>
            <Link href='/tags'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='28'
                viewBox='0 0 32 32'
                version='1.1'
              >
                <g stroke='none' strokeWidth='1' fillRule='evenodd'>
                  <g>
                    <path d='M14,4 L5.99961498,4 C4.89525812,4 4,4.88743329 4,5.99961498 L4,14 L17.3809027,27.3809027 C18.1646418,28.1646418 19.433119,28.1668566 20.2115341,27.3884415 L27.3884415,20.2115341 C28.168017,19.4319586 28.1640508,18.1640508 27.3809027,17.3809027 L14,4 L14,4 Z M13.5,5 L6.00844055,5 C5.45149422,5 5,5.45699692 5,6.00844055 L5,13.5 L18.0998579,26.671163 C18.488383,27.0618028 19.1183535,27.0613199 19.5042948,26.672744 L26.6678854,19.4602516 C27.0550094,19.0704849 27.0531075,18.4413912 26.6620109,18.0535183 L13.5,5 L13.5,5 Z M9.5,12 C10.8807119,12 12,10.8807119 12,9.5 C12,8.11928806 10.8807119,7 9.5,7 C8.11928806,7 7,8.11928806 7,9.5 C7,10.8807119 8.11928806,12 9.5,12 L9.5,12 Z M9.5,11 C10.3284272,11 11,10.3284272 11,9.5 C11,8.67157283 10.3284272,8 9.5,8 C8.67157283,8 8,8.67157283 8,9.5 C8,10.3284272 8.67157283,11 9.5,11 L9.5,11 Z' />
                  </g>
                </g>
              </svg>
              <span>Tags{router.asPath.startsWith('/tags') && <Indicator layoutId='indicator' />}</span>
            </Link>
          </MenuModalItem>
          <MenuModalCloseButton onClick={toggleModal}>닫기</MenuModalCloseButton>
        </MenuModalContainer>
      </Modal>
    </>
  );
}

interface HeaderProps {
  isDark?: boolean;
  isScrollingDown: boolean;
  isMobile?: boolean;
}

const Wrapper = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background-color: ${({ theme, isScrollingDown }) => (isScrollingDown ? theme.bgColor : theme.headerColor)};
  padding: ${({ isScrollingDown }) => (isScrollingDown ? '1rem 1rem' : '1.3rem 1rem')};
  ${media.small} {
    padding: ${({ isScrollingDown }) => (isScrollingDown ? '1rem 1rem' : '2rem 1rem')};
  }
  color: ${({ isScrollingDown, isDark }) => (isDark ? 'white' : isScrollingDown ? 'black' : 'white')};
  transition-property: background-color, padding;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  &:hover {
    background-color: ${({ theme, isScrollingDown }) => (isScrollingDown ? theme.headerColor : '')};
    color: ${({ isScrollingDown, isDark }) => (isDark ? 'white' : isScrollingDown ? 'black' : 'white')};
  }
`;

const Container = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  margin: 0 auto;
  & > div {
    font-size: ${({ isScrollingDown }) => (isScrollingDown ? '2rem' : '3rem')};
    font-family: Aggro, serif;
  }
  span {
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Nav = styled.nav<HeaderProps>`
  display: ${({ isMobile }) => (isMobile ? 'block' : 'grid')};
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  font-size: ${({ isScrollingDown }) => (isScrollingDown ? '1.5rem' : '2rem')};
  gap: 1rem;
  a {
    margin: auto;
  }
  a > span {
    position: relative;
  }
`;

const Indicator = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.accentColor};
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.3rem;
`;

const MenuModalButton = styled.button<{ isScrollingDown: boolean; isDark: boolean }>`
  background-color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  svg {
    fill: ${({ isScrollingDown, isDark }) => (isDark ? 'white' : isScrollingDown ? 'black' : 'white')};
  }
`;

const MenuModalContainer = styled.div`
  display: grid;
  gap: 2rem 4rem;
  grid-template-columns: repeat(2, 8rem);
  grid-template-rows: repeat(2, 8rem) 3.5rem;
  max-width: 70rem;
  padding: 5rem 8rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.bgColor};
  box-shadow: ${({ theme }) => theme.shadow.defaultShadow};
`;

const MenuModalItem = styled.div`
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.buttonShadow};
  border-radius: 1rem;
  transition: background-color 0.2s ease-out;
  &,
  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    svg {
      fill: ${({ theme }) => theme.fontColor.contentColor};
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.headerColor};
  }
`;

const MenuModalCloseButton = styled.button`
  cursor: pointer;
  width: 100%;
  grid-column: span 2;
  background-color: inherit;
  border: none;
  border-radius: 1rem;
  color: ${({ theme }) => theme.fontColor.contentColor};
  box-shadow: ${({ theme }) => theme.shadow.buttonShadow};
  &:hover {
  }
`;

const StyledThemeChangeButton = styled(ThemeChangeButton)`
  svg {
    fill: #ffdd59;
    color: #ffdd59;
  }
`;
