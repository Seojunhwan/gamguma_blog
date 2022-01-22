import React, { SetStateAction } from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';
import { IComment } from '../../common/types';

interface CommentEditModalProps {
  commentInfo: IComment;
  isModalOpen: boolean;
  setComments: React.Dispatch<SetStateAction<IComment[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IOnClickEdit {
  (commentInfo: { name: string; content: string; password: string }): void;
}

export default function CommentEditModal({
  commentInfo,
  isModalOpen,
  setComments,
  setIsModalOpen,
}: CommentEditModalProps) {
  const { content, author: name, id: commentId, password: passwords } = commentInfo;

  const editComment: IOnClickEdit = (commentInfo) => {
    const { content, name, password } = commentInfo;
    //TODO: 서버 통신해서 비밀번호 확인, 코멘트 수정
    //TODO: 함수명 변경 필요
    //* 서버 정상 응답확인 필요, commentsState 수정하여 코멘트 렌더링 완료
    //* 프론트에서 비밀번호 비교 x, 서버에서 비교 후 status 값 200이면 변경
    if (password !== passwords) {
      return;
    }
    setComments((oldComments) => {
      const targetIndex = oldComments.findIndex((comment) => comment.id === commentId);
      const newComment = {
        ...oldComments[targetIndex],
        author: name,
        content,
      };
      return [...oldComments.slice(0, targetIndex), newComment, ...oldComments.slice(targetIndex + 1)];
    });
    setIsModalOpen(false);
  };

  const deleteComment = (password: string) => {
    //TODO: 서버 통신해서 비밀번호 확인, 코멘트 삭제
    //* 서버 정상 응답확인 필요, commentsState 에서 해당 코멘트 삭제하여 코멘트 렌더링 완료
    //* 프론트에서 비밀번호 비교 x, 서버에서 비교 후 status 값 200이면 변경
    if (password !== passwords) {
      return;
    }
    setComments((oldComments) => {
      const targetIndex = oldComments.findIndex((comment) => comment.id === commentId);
      return [...oldComments.slice(0, targetIndex), ...oldComments.slice(targetIndex + 1)];
    });
    setIsModalOpen(false);
  };

  return (
    <Overlay onClick={() => setIsModalOpen(false)}>
      <Container onClick={(event) => event.stopPropagation()}>
        <CommentInput
          onSubmit={editComment}
          initialContent={content}
          initialName={name}
          isModalOpen={isModalOpen}
          deleteComment={deleteComment}
          setIsModalOpen={setIsModalOpen}
        />
      </Container>
    </Overlay>
  );
}

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
  padding: 2rem;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.defaultShadow};
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
