import CommentSkeleton from './commentSkeleton';

export default function CommentSkeletonList() {
  return (
    <>
      {Array.from({ length: 10 }, () => 0).map((el, index) => (
        <CommentSkeleton key={el + index} />
      ))}
    </>
  );
}
