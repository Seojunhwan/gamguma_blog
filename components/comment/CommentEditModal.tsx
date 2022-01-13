import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
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
  width: 100%;
  padding: 3rem;
  ${media.small} {
    width: 70%;
    padding: 5rem;
  }
  background-color: #2e3135;
  border-radius: 1rem;
`;

const Button = styled.button``;

interface CommentEditModalProps {
  handleSetVisible: () => void;
}
interface onSubmitProps {
  (event: React.FormEvent<HTMLFormElement>, name: string, content: string): void;
}

export default function CommentEditModal({ handleSetVisible }: CommentEditModalProps) {
  const onSubmit: onSubmitProps = (event, name, content) => {
    // 아이디, 비밀번호 검증
    // 해당 코멘트 아이디 확인 후 코멘트 콘텐츠 수정
  };
  const router = useRouter();
  return (
    <Overlay>
      <Container>
        <CommentInput onSubmit={onSubmit} />
        <Button onClick={handleSetVisible}>취소</Button>
      </Container>
    </Overlay>
  );
}
