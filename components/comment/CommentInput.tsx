import React, { useState } from 'react';
import styled from 'styled-components';
import { onChange } from './hooks/onChangeHook';

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

interface CommentInputProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, name: string, content: string) => void;
  namea?: string;
  contenta?: string;
}
export default function CommentInput({ onSubmit, namea, contenta }: CommentInputProps) {
  const [name, setName] = useState(namea ?? '');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState(contenta ?? '');

  return (
    <Form onSubmit={(event) => onSubmit(event, name, content)}>
      <InputContainer>
        <Input
          name='name'
          value={name}
          onChange={(event) => onChange(event, setName)}
          placeholder='이름'
          type='text'
          maxLength={15}
        />
        <Input
          name='password'
          value={password}
          onChange={(event) => onChange(event, setPassword)}
          placeholder='비밀번호'
          type='password'
          minLength={4}
        />
      </InputContainer>
      <TextareaContainer>
        <textarea
          value={content}
          onChange={(event) => onChange(event, setContent)}
          minLength={10}
          placeholder='내용을 입력해주세요!'
        />
        <SubmmitBtn>제출</SubmmitBtn>
      </TextareaContainer>
    </Form>
  );
}
