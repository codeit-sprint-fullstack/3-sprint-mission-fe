'use client';

import Comment from './comment';
import profileIcon from '@/public/icons/profile_icon.png';
import { useCommentsQuery } from '@/hooks/comments/useCommentsQuery';
import { CommentListParams } from '@/lib/types/params.types';
import CommentForm from '../commentForm/commentForm';
import CommentSkeletonList from './commentSkeletonList';
import NoComment from './noComment';

export default function CommentListClient(params: CommentListParams) {
  const { data: comments, isLoading } = useCommentsQuery(params);

  return (
    <>
      <CommentForm
        id={params.id}
        variant={params.variant}
      />
      <div className='mb-10'>
        {isLoading ? (
          <CommentSkeletonList />
        ) : comments && comments.list.length > 0 ? (
          comments.list.map((comment) => (
            <Comment
              variant={params.variant}
              key={comment.id}
              id={comment.id}
              pageId={params.id}
              nickname={comment.user.nickname}
              createdAt={comment.createdAt}
              content={comment.content}
              profileIcon={comment.user.image || profileIcon}
            />
          ))
        ) : (
          <NoComment variant={params.variant} />
        )}
      </div>
    </>
  );
}
