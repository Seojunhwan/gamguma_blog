import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 60rem;
  flex-wrap: wrap;
`;

const HashTagItem = styled.li<{ isSelected: boolean }>`
  font-size: 1.3rem;
  padding: 0.5rem;
  min-width: 5rem;
  border-radius: 1rem;
  text-align: center;
  /* background-color: #ff8a6599; */
  background-color: ${(props) => (props.isSelected ? '#ff9999' : '#ff8a6599')};
  cursor: pointer;
  &:hover {
    background-color: #ff8a65;
  }
`;

interface IType {
  hashTags: string[];
  articleId?: string;
}

export default function HashTag({ hashTags, articleId }: IType) {
  const router = useRouter();
  const {
    query: { hashTag },
  } = router;
  const [tag, setTag] = useState(hashTag ?? '');
  useEffect(() => {
    setTag(hashTag ?? '');
  }, [hashTag]);
  return (
    <Wrapper onClick={(event) => event.stopPropagation()}>
      {hashTags.map((hashTag) => (
        <Link href={{ pathname: '/post', query: { hashTag } }} key={`${articleId}${hashTag}`}>
          <a>
            <HashTagItem isSelected={hashTag === tag}>
              <span>{hashTag}</span>
            </HashTagItem>
          </a>
        </Link>
      ))}
    </Wrapper>
  );
}
