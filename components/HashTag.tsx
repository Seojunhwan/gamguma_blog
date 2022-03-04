import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted ? (
    <Wrapper onClick={(event) => event.stopPropagation()}>
      {hashTags.map((hashTag) => (
        <Link href={{ pathname: '/tags', query: { hashTag } }} key={`${articleId}${hashTag}`}>
          <a>
            <HashTagItem isHashTagMenu={isHashTagMenu} isSelected={hashTag === selectHashTag}>
              <span>
                {hashTag} {hashTagCountInfo && getHashTagCount(hashTag)}
              </span>
            </HashTagItem>
          </a>
        </Link>
      ))}
    </Wrapper>
  ) : null;
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
  box-shadow: ${(props) => props.theme.defaultShadow};
  transition: background-color 0.3s ease-out;
  border: 1px solid
    ${(props) => (props.isHashTagMenu ? (props.isSelected ? '#FCF6F5' : props.theme.accentColor) : '#FCF6F5')};
  background-color: ${(props) =>
    props.isHashTagMenu ? (props.isSelected ? props.theme.accentColor : '#FCF6F5') : '#FCF6F5'};
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;
