import CommentSkeleton from './commentSkeleton';

export default function CommentSkeletonList() {
  return Array.from({ length: 10 }, (_, index) => index + 1).map((el) => (
    <CommentSkeleton key={el} />
  ));
}
