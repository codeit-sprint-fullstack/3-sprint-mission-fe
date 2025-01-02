import CommentSkeleton from './commentSkeleton';

export default function CommentSkeletonList() {
  return Array.from({ length: 10 }, (el) => el).map((_) => <CommentSkeleton />);
}
