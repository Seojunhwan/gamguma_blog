import { useState } from 'react';
import styled from 'styled-components';

interface ITocProps {
  content: string;
}

interface IItemProps {
  depth: number;
  isSelected: boolean;
}

const Container = styled.div`
  position: fixed;
  right: 0;
  border-left: 1px solid white;
  max-width: 24rem;
  margin-right: 2rem;
  ul {
    display: flex;
    flex-direction: column;
  }
`;

const Item = styled.li<IItemProps>`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.5rem;
  padding-left: ${(props) => `${props.depth}rem`};
  color: ${(props) => (props.isSelected ? '#FAF7FF' : '#BCBCBC')};
  transform: ${(props) => props.isSelected && 'scale(1.05)'};
  transform-origin: left;
  transition: all 0.3s;
`;

export default function Toc({ content }: ITocProps) {
  const titles = content.split('\n').filter((t) => t.startsWith('#'));
  const result = titles.map((item) => {
    const depth = item.match(/#/g)?.length;
    return {
      title: item.substr(item.indexOf(' ')).trim().replace('\\', ''),
      depth,
    };
  });
  const [isSelected, setIsSelected] = useState('');
  return (
    <Container>
      <ul>
        {result.map((item) => (
          <Item
            onClick={() => setIsSelected(item.title)}
            isSelected={isSelected === item.title}
            depth={item.depth ?? 0}
            key={item.title}
          >
            {item.title}
          </Item>
        ))}
      </ul>
    </Container>
  );
}
