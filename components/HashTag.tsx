import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  gap: 1rem;
`;

const HashTagItem = styled.li`
  font-size: 1.3rem;
  padding: 0.5rem;
  min-width: 5rem;
  border-radius: 1rem;
  text-align: center;
  background-color: #ff8a6599;
  cursor: pointer;
  &:hover {
    background-color: #ff8a65;
  }
  span {
  }
`;

interface IType {
  hashTags: string[];
  articleId?: string;
}

export default function HashTag({ hashTags, articleId }: IType) {
  return (
    <Wrapper>
      {hashTags.map((hashTag) => (
        <HashTagItem key={`${articleId}${hashTag}`}>
          <span>{hashTag}</span>
        </HashTagItem>
      ))}
    </Wrapper>
  );
}
