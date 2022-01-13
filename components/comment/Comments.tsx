import { useEffect, useState } from 'react';
import CommentCards from './CommentCards';
import CommentWrite from './CommentWrite';

const testComments = [
  {
    id: 0,
    author: 'junhwan',
    createAt: '2022-01-05 16:16',
    content: '안녕하세요 정말 배고프네요! 죽겠습니다~~',
  },
  {
    id: 1,
    author: 'Gamja',
    createAt: '2022-01-06 16:16',
    content: '안녕하세요 정말 배고프네요! 죽겠습니다~~ 배고파 아아아',
  },
  {
    id: 2,
    author: 'Guma',
    createAt: '2022-01-08 12:16',
    content:
      '안녕하세요 정말 배고프네요! 죽겠습니다~~ 얼른 밥줘!!안녕하세요 정말 배고프네요! 죽겠습니다~~ 얼른 밥줘!!안녕하세요 정말 배고프네요! 죽겠습니다~~ 얼른 밥줘!!안녕하세요 정말 배고프네요! 죽겠습니다~~ 얼른 밥줘!!안녕하세요 정말 배고프네요! 죽겠습니다~~ 얼른 밥줘!!안녕하세요 정말 배고프네요! 죽겠습니다~~ 얼른 밥줘!!',
  },
];

interface IComment {
  id: number;
  author: string;
  createAt: string;
  content: string;
}

export default function Comments() {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    setComments(testComments);
  }, []);

  return (
    <div>
      <CommentWrite setComments={setComments} />
      <CommentCards comments={comments} />
    </div>
  );
}
