'use client';

import CommentForm from '@/components/articlePage/commentForm/commentForm';
import NoComment from './noComment';
import Comment from './comment';
import profileIcon from '@/public/icons/profile_icon.png';
import { useCommentsQuery } from '@/hooks/comments/useCommentsQuery';
import { WithInitialData } from '@/lib/types/params.types';

export default function CommentListClient(props: WithInitialData) {
  const { data: comments } = useCommentsQuery(props);

  return (
    <>
      <CommentForm
        id={props.id}
        variant={props.variant}
      />
      {comments?.list.length > 0 ? (
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
      ) : (
        <NoComment variant={props.variant} />
      )}
    </>
  );
}
