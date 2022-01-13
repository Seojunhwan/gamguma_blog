import { useState } from 'react';
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

export default function CommentCards({ comments }: CommentCardsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetVisible = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <Container>
      {comments &&
        comments.map((item) => (
          <Comment key={item.createAt}>
            <CommentHeader>
              <CommentHeaderInfo>
                <span>{item.author}</span>
                <time dateTime={item.createAt}>{dateFormatter(item.createAt)}</time>
              </CommentHeaderInfo>
              <CommentEditButton onClick={handleSetVisible}>수정 / 삭제</CommentEditButton>
            </CommentHeader>
            <p>{item.content}</p>
          </Comment>
        ))}
      {/* TODO: 이름, Content, ID */}
      {isModalOpen && <CommentEditModal handleSetVisible={handleSetVisible} />}
    </Container>
  );
}
