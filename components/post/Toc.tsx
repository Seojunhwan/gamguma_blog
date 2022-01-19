import { useState } from 'react';
import styled from 'styled-components';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import media from '../../styles/media';

interface ITocProps {
  content: string;
}

interface IItemProps {
  depth: number;
  isSelected: boolean;
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

const Item = styled.li<IItemProps>`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.5rem;
  padding-left: ${(props) => (props.depth ? `${props.depth}rem` : '0rem')};
  background-color: ${(props) => (props.isSelected ? props.theme.accentColor : 'inherit')};
  border-radius: 0.5rem;
  transform: ${(props) => props.isSelected && 'scale(1.05)'};
  transform-origin: left;
  transition: all 0.3s;
`;

export default function Toc({ content }: ITocProps) {
  const [activeId, setActiveId] = useState('');
  useIntersectionObserver(setActiveId, content);
  const titles = content.split('\n').filter((t) => t.startsWith('#'));
  const result = titles.map((item) => {
    const depth = item.match(/#/g)?.length;
    return {
      title: item.substr(item.indexOf(' ')).trim().replace('\\', ''),
      depth,
    };
  });
  const convertTextToId = (title: string) => {
    return title.toLowerCase().replace(/[?.]/gi, '').replace(/\s/g, '-');
  };
  const onValid = (title: string) => {
    if (convertTextToId(title) === activeId) {
      return true;
    }
    return false;
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
