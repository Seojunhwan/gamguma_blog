import styled from 'styled-components';
import { dateFormatter } from '../../utils/utils';
import { IComment } from '../../interfaces';

interface IProps {
  comment: IComment;
  setModalInfo: React.Dispatch<React.SetStateAction<IComment | undefined>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CommentHeader({ comment, setModalInfo, setIsModalOpen }: IProps) {
  const handleSetVisible = (comment: IComment) => {
    setModalInfo({ ...comment });
    setIsModalOpen(true);
  };
  return (
    <Container>
      <CommentHeaderInfo>
        <span>{comment.author}</span>
        <time dateTime={comment.createAt}>{dateFormatter(comment.createAt)}</time>
      </CommentHeaderInfo>
      <CommentEditButton onClick={() => handleSetVisible(comment)}>수정 / 삭제</CommentEditButton>
    </Container>
  );
}

const Container = styled.div`
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
  background-color: inherit;
  color: ${(props) => props.theme.fontColor.contentColor};
  cursor: pointer;
`;
