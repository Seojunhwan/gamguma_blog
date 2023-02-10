import { useState } from 'react';
import styled from 'styled-components';

import { media } from '@styles';
import { useIntersectionObserver } from './hooks';

interface TocProps {
  content: string;
}

interface TocItemProps {
  depth: number;
  isSelected: boolean;
}

export function Toc({ content }: TocProps) {
  const [activeId, setActiveId] = useState('');
  useIntersectionObserver(setActiveId, content);
  const titles = content.split('\n').filter((t) => t.startsWith('#') && !t.includes('include'));
  const result = titles.map((item) => {
    const depth = item.match(/#/g)?.length;
    return {
      title: item.substr(item.indexOf(' ')).trim().replace('\\', '').replace('(', '').replace(')', ''),
      depth,
    };
  });
  const convertTextToId = (title: string) => {
    return title.toLowerCase().replace(/[?.]/gi, '').replace(/\s/g, '-');
  };
  const onValid = (title: string) => {
    return convertTextToId(title) === activeId;
  };
  return (
    <Container>
      <ul>
        {result.map((item, index) => (
          <a key={item.title + index} href={`#${convertTextToId(item.title)}`}>
            <Item isSelected={onValid(item.title)} depth={item.depth ?? 0}>
              {item.title}
            </Item>
          </a>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  position: fixed;
  right: 0;
  max-width: 24rem;
  margin-top: 20vh;
  margin-right: 0.5rem;
  ul {
    display: flex;
    flex-direction: column;
  }
  ${media.xlarge} {
    display: block;
  }
  ${media.xxlarge} {
    margin-right: 20rem;
  }
`;

const Item = styled.li<TocItemProps>`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.5rem;
  padding-left: ${({ depth }) => (depth ? `${depth}rem` : '0rem')};
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.accentColor : 'inherit')};
  border-radius: 0.5rem;
  transform: ${({ isSelected }) => isSelected && 'scale(1.05)'};
  transform-origin: left;
  transition: all 0.3s;
`;
