import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import { useInput } from './hooks/useInput';

interface CommentInputProps {
  onSubmit: (commentInfo: { name: string; content: string; password: string }) => void;
  initialName?: string;
  initialContent?: string;
  isModalOpen?: boolean;
  deleteComment?: (password: string) => void;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CommentInput({
  onSubmit,
  initialName,
  initialContent,
  isModalOpen,
  deleteComment,
  setIsModalOpen,
}: CommentInputProps) {
  const nameValidator = (value: string) => value.length < 3;
  const passwordValidator = (value: string) => value.length < 6;
  const name = useInput(initialName ?? '', nameValidator);
  const password = useInput('', passwordValidator);
  const content = useInput(initialContent ?? '');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //TODO: input validation 후  문제 있을 시 setError 로 error 메시지 설정 후 input button 에 넣어주기
    event.preventDefault();
    if (name.value.length < 3 || password.value.length < 6 || content.value.length < 10) {
      return;
    }
    const commentInfo = {
      name: name.value,
      content: content.value,
      password: password.value,
    };
    onSubmit(commentInfo);
  };

  const handleEditClick = () => {
    if (deleteComment) {
      deleteComment(password.value);
    }
  };

  const handleCancelClick = () => {
    if (setIsModalOpen) {
      setIsModalOpen(false);
    }
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <InputContainer>
        <Input name='name' {...name} placeholder='이름' type='text' maxLength={15} />
        <Input name='password' {...password} placeholder='비밀번호' type='password' minLength={4} />
      </InputContainer>
      <TextareaWrapper>
        <textarea {...content} minLength={10} placeholder='내용을 입력해주세요!' />
      </TextareaWrapper>
      <ButtonContainer>
        <SubmitButton>{isModalOpen ? '수정' : '딸깍'}</SubmitButton>
        {isModalOpen && (
          <>
            <DeleteButton onClick={handleEditClick}>삭제</DeleteButton>
            <CancelButton onClick={handleCancelClick}>취소</CancelButton>
          </>
        )}
      </ButtonContainer>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  box-shadow: ${({ theme }) => theme.shadow.defaultShadow};
  ${media.xsmall} {
    width: 100%;
  }
  ${media.small} {
    min-width: 20rem;
    width: 20%;
  }
`;

const TextareaWrapper = styled.div`
  textarea {
    width: 100%;
    resize: none;
    height: 15rem;
    outline: none;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadow.defaultShadow};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  position: relative;
  cursor: pointer;
  background-color: white;
  border: 1px solid white;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  padding: 0.5rem;
  width: 10rem;
  box-shadow: ${({ theme }) => theme.shadow.defaultShadow};
  ${media.xsmall} {
    width: 100%;
  }
  ${media.small} {
    min-width: 10rem;
    width: 15%;
  }
`;

const SubmitButton = styled(Button)`
  &:hover {
    background-color: #0be881;
  }
  &:active {
    background-color: #8efcc9;
  }
`;

const DeleteButton = styled(Button)`
  &:hover {
    background-color: #ff9999;
  }
  &:active {
    background-color: #ffcbcb;
  }
`;

const CancelButton = styled(Button)`
  &:hover {
    background-color: #c9c9c9;
  }
  &:hover {
    background-color: #a9a9a9;
  }
`;
