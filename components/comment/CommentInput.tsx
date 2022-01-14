import React, { useState } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import { onChange } from './hooks/onChangeHook';
import { useInput } from './hooks/useInput';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

const Input = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: 0.3rem;
  outline: none;
  ${media.xsmall} {
    width: 100%;
  }
  ${media.small} {
    min-width: 20rem;
    width: 20%;
  }
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

interface CommentInputProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, name: string, content: string) => void;
  initialName?: string;
  initialContent?: string;
}
export default function CommentInput({ onSubmit, initialName, initialContent }: CommentInputProps) {
  const nameValidator = (value: string) => value.length < 3;
  const passwordValidator = (value: string) => value.length < 6;
  const name = useInput(initialName ?? '', nameValidator);
  const password = useInput('', passwordValidator);
  const content = useInput(initialContent ?? '');
  return (
    <Form onSubmit={(event) => onSubmit(event, name.value, content.value)}>
      <InputContainer>
        <Input name='name' {...name} placeholder='이름' type='text' maxLength={15} />
        <Input name='password' {...password} placeholder='비밀번호' type='password' minLength={4} />
      </InputContainer>
      <TextareaContainer>
        <textarea {...content} minLength={10} placeholder='내용을 입력해주세요!' />
        <SubmmitBtn>제출</SubmmitBtn>
      </TextareaContainer>
    </Form>
  );
}
