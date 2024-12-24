type BestProductSkeletonProps = {
  pageSize: number;
};

const BestProductSkeleton = ({ pageSize }: BestProductSkeletonProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">베스트 상품</h2>
      <div className="flex gap-6">
        {[...Array(pageSize)].map((_, index) => (
          <div
            key={index}
            className="aspect-square w-full max-w-[280px] animate-pulse rounded bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
};

export default BestProductSkeleton;
