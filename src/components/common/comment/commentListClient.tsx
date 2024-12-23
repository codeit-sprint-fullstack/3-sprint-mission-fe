'use client';

import Comment from './comment';
import profileIcon from '@/public/icons/profile_icon.png';
import { useCommentsQuery } from '@/hooks/comments/useCommentsQuery';
import { WithInitialData } from '@/lib/types/params.types';

export default function CommentListClient(props: WithInitialData) {
  const { data: comments } = useCommentsQuery(props);

  return (
    <div className='mb-10'>
      {comments.list.map((comment) => (
        <Comment
          variant={props.variant}
          key={comment.id}
          id={comment.id}
          pageId={props.id}
          nickname={comment.writer.nickname}
          createdAt={comment.createdAt}
          content={comment.content}
          profileIcon={comment.writer.image || profileIcon}
        />
      ))}
    </div>
  );
}
