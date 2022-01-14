import React, { useEffect } from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 100rem;
  padding: 3rem;
  background-color: #2e3135;
  border-radius: 1rem;
  z-index: 1;
  overflow: hidden;
  animation: modal-bg-slow 0.3s ease-in-out;
  @keyframes modal-bg-slow {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0rem);
    }
  }
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  div {
    position: relative;
    &::before,
    &::after {
      content: '';
      width: 2rem;
      height: 0.2rem;
      position: absolute;
      border-radius: 4px;
      background-color: black;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;

interface CommentEditModalProps {
  handleSetVisible: () => void;
  name: string;
  content: string;
}
interface IOnSubmit {
  (event: React.FormEvent<HTMLFormElement>, name: string, content: string): void;
}

export default function CommentEditModal({ handleSetVisible, name, content }: CommentEditModalProps) {
  const onSubmit: IOnSubmit = (event, name, content) => {
    event.preventDefault();
  };
  return (
    <Overlay onClick={handleSetVisible}>
      <Container onClick={(event) => event.stopPropagation()}>
        <CommentInput onSubmit={onSubmit} initialContent={content} initialName={name} />
        <Button onClick={handleSetVisible}>X</Button>
      </Container>
    </Overlay>
  );
}
