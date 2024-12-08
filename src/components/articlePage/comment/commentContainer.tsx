import { CommentResponse } from '@/services/api/types/article';
import Comment from './comment';
import profileIcon from '@/public/icons/profile_icon.png';

export default function CommentContainer({
  data,
}: {
  data: CommentResponse[];
}) {
  return (
    <div className='mb-10'>
      {data.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          articleId={comment.articleId}
          nickname='똑똑한판다'
          createdAt={comment.createdAt}
          content={comment.content}
          profileIcon={profileIcon}
        />
      ))}
    </div>
  );
}
