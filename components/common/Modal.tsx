import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Portal from './Portal';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface Props {
  children: React.ReactNode;
  visible: boolean;
  toggleModal: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Modal({ children, visible, toggleModal }: Props) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  if (!animate && !localVisible) return null;
  return (
    <Portal selector='#modal'>
      <Overlay disappear={!visible} onClick={toggleModal}>
        {children}
      </Overlay>
    </Portal>
  );
}

const Overlay = styled.div<{ disappear: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;

  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-name: ${({ disappear }) => (disappear ? fadeOut : '')};
`;
