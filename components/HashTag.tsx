import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface IHashTagItem {
  isHashTagMenu: boolean;
  isSelected: boolean;
}

interface IProps {
  hashTags: string[];
  articleId?: string;
  isHashTagMenu: boolean;
  hashTagCountInfo?: {
    name: string;
    count: number;
  }[];
}

export default function HashTag({ hashTags, articleId, isHashTagMenu, hashTagCountInfo }: IProps) {
  const router = useRouter();
  const {
    query: { hashTag: selectHashTag },
  } = router;
  const getHashTagCount = (hashTag: string) => {
    return `(${hashTagCountInfo?.find((tag) => tag.name === hashTag)?.count})`;
  };
  return (
    <Wrapper onClick={(event) => event.stopPropagation()}>
      {hashTags.map((hashTag) => (
        <Link href={{ pathname: '/tags', query: { hashTag } }} key={`${articleId}${hashTag}`}>
          <HashTagItem isHashTagMenu={isHashTagMenu} isSelected={hashTag === selectHashTag}>
            <span>
              {hashTag} {hashTagCountInfo && getHashTagCount(hashTag)}
            </span>
          </HashTagItem>
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 60rem;
  flex-wrap: wrap;
`;

const HashTagItem = styled.li<IHashTagItem>`
  font-size: 1.3rem;
  padding: 0.5rem;
  min-width: 5rem;
  border-radius: 0.5rem;
  text-align: center;
  color: black;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.defaultShadow};
  transition: background-color 0.3s ease-out;
  border: 1px solid
    ${({ isHashTagMenu, isSelected, theme }) =>
      isHashTagMenu ? (isSelected ? '#FCF6F5' : theme.accentColor) : '#FCF6F5'};
  background-color: ${({ isHashTagMenu, theme, isSelected }) =>
    isHashTagMenu ? (isSelected ? theme.accentColor : '#FCF6F5') : '#FCF6F5'};
  &:hover {
    background-color: ${({ theme }) => theme.accentColor};
  }
`;
