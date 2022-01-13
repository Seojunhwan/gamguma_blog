import React, { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';

const Container = styled.div`
  margin-top: 10rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: 0.3rem;
  outline: none;
`;

const TextareaContainer = styled.div`
  display: flex;
  textarea {
    width: 100%;
    resize: none;
    height: 15rem;
    outline: none;
    padding: 1rem;
    border: none;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;

const SubmmitBtn = styled.button`
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: white;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  width: 10%;
  transition: all 0.2s ease-in;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 10rem;
    border-left: 1px solid #808e9b;
  }
  &:hover {
    background-color: #0be881;
  }
  &:active {
    background-color: #8efcc9;
  }
`;

interface IComment {
  id: number;
  author: string;
  createAt: string;
  content: string;
}

interface IProps {
  setComments: React.Dispatch<SetStateAction<IComment[]>>;
}

export default function CommentWrite({ setComments }: IProps) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>, name: string, content: string) => {
    event.preventDefault();
    setComments((prev) => [
      {
        id: Date.now(),
        author: name,
        createAt: '2020-02-02 12:32',
        content,
      },
      ...prev,
    ]);
  };

  return (
    <Container>
      <CommentInput onSubmit={onSubmit} />
    </Container>
  );
}
