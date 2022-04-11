import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  content: string;
  speed: number;
  waitTime: number;
  repeat?: boolean;
  className?: string;
  styledContent?: JSX.Element;
}

export default function TypeWriter({ content, speed, repeat, className, waitTime, styledContent }: Props) {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(-1);
  const [isWait, setIsWait] = useState(false);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex >= content.length - 1) {
          if (repeat) {
            setIsWait(true);
            setTimeout(() => {
              setIsWait(false);
              setDisplayedContent('');
              setIndex(-1);
            }, waitTime);
          }
          clearInterval(animKey);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, speed);
    return () => clearInterval(animKey);
  }, [isWait]);

  useEffect(() => {
    setDisplayedContent((prevDisplayedContent) => {
      if (index === -1) return '';
      return prevDisplayedContent + content[index];
    });
  }, [index]);

  const finishCondition = content.length - 1 === index;
  return (
    <TypingArea className={className}>
      {repeat
        ? isWait
          ? styledContent ?? displayedContent
          : displayedContent
        : finishCondition
        ? styledContent ?? displayedContent
        : displayedContent}
      <Cursor>|</Cursor>
    </TypingArea>
  );
}

const typingCursor = keyframes`
  to {
    opacity: 0;
  }
`;

const TypingArea = styled.pre``;

const Cursor = styled.span`
  animation: ${typingCursor} 0.5s infinite;
`;
