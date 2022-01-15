import { useEffect, useState } from 'react';
import CommentCards from './CommentCards';
import CommentWrite from './CommentWrite';

export interface IComment {
  id: number;
  author: string;
  createAt: string;
  content: string;
  password: string;
}

export default function Comments() {
  const [comments, setComments] = useState<IComment[]>([]);
  console.log('Comments Render!');
  useEffect(() => {
    //TODO: postId or postSlug 받아서 백엔드에 해당 포스트의 댓글 받아오기
    //TODO: 정상 status code 면 setComments, 비정상이면 error message 출력
    // setComments(serverData);
  }, []);

  return (
    <div>
      <CommentWrite setComments={setComments} />
      {comments && <CommentCards comments={comments} setComments={setComments} />}
    </div>
  );
}
