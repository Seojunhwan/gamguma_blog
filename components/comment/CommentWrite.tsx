import React from 'react';
import styled from 'styled-components';
import { dateToTimeFormatter } from '../../utils/utils';
import CommentInput from './CommentInput';
import { IComment } from './Comments';

interface IProps {
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

interface IOnClickCreate {
  (commentInfo: { name: string; content: string; password: string }): void;
}

export default function CommentWrite({ setComments }: IProps) {
  const onClickCreate: IOnClickCreate = (commentInfo) => {
    const { content, name, password } = commentInfo;

    //TODO: 비밀번호 validation
    //TODO: axios 백엔드 통신 후 정상 응답 확인
    //* 댓글 상태 변경 완료

    const date = new Date();
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: name,
        createAt: dateToTimeFormatter(date),
        content,
        password,
      },
    ]);
  };

  return (
    <Container>
      <CommentInput
        onSubmit={onClickCreate}
        initialContent='앗 아직 서버를 연결하지 않았어요ㅠㅠ 도움 주실 분 sjunhwan0901@gmail.com  으로 연락 부탁드립니다!'
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10rem;
`;
