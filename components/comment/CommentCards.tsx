import React, { useState } from 'react';
import styled from 'styled-components';
import { dateFormatter } from '../../utils/utils';
import CommentEditModal from './CommentEditModal';

const Container = styled.div`
  margin-top: 5rem;
  width: 100%;
`;

const Comment = styled.div`
  padding: 1rem 0rem;
  position: relative;
  &:not(&:last-child) {
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CommentHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
  time {
    font-size: 1.4rem;
    color: #bcbcbc;
  }
`;

const CommentEditButton = styled.button`
  border: none;
  background-color: inherit;
  color: white;
  cursor: pointer;
`;

interface IComment {
  id: number;
  author: string;
  createAt: string;
  content: string;
}

interface CommentCardsProps {
  comments: IComment[];
}

interface IHandleSetVisible {
  (author?: string, id?: number, content?: string): void;
}

interface Itest {
  author: string;
  id: number;
  content: string;
}

export default function CommentCards({ comments }: CommentCardsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<Itest>({ author: '', id: 0, content: '' });
  const handleSetVisible: IHandleSetVisible = (author, id, content) => {
    if (author && id && content) {
      setModalInfo({ author, content, id });
    }
    setIsModalOpen((prev) => !prev);
  };
  return (
    <Container>
      {comments &&
        comments.map((item) => (
          <Comment key={item.id}>
            <CommentHeader>
              <CommentHeaderInfo>
                <span>{item.author}</span>
                <time dateTime={item.createAt}>{dateFormatter(item.createAt)}</time>
              </CommentHeaderInfo>
              <CommentEditButton onClick={() => handleSetVisible(item.author, item.id, item.content)}>
                수정 / 삭제
              </CommentEditButton>
            </CommentHeader>
            <p>{item.content}</p>
          </Comment>
        ))}
      {/* TODO: 이름, Content, ID */}
      {isModalOpen && (
        <CommentEditModal
          name={modalInfo.author}
          content={modalInfo.content}
          handleSetVisible={handleSetVisible}
        />
      )}
    </Container>
  );
}
