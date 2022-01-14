import React, { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';

const Container = styled.div`
  margin-top: 10rem;
`;

interface IComment {
  id: number;
  author: string;
  createAt: string;
  content: string;
}

interface IProps {
  setComments: React.Dispatch<SetStateAction<IComment[]>>;
}

export default function CommentWrite({ setComments }: IProps) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>, name: string, content: string) => {
    event.preventDefault();
    setComments((prev) => [
      {
        //TODO: 날짜 바꾸기!
        id: Date.now(),
        author: name,
        createAt: '2020-02-02 12:32',
        content,
      },
      ...prev,
    ]);
  };

  return (
    <Container>
      <CommentInput onSubmit={onSubmit} />
    </Container>
  );
}
