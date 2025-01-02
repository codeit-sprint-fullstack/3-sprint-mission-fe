type AllProductsSkeletonProps = {
  pageSize: number;
};

const AllProductsSkeleton = ({ pageSize }: AllProductsSkeletonProps) => {
  return (
    <section>
      <div className="mb-4 hidden items-center justify-between md:flex">
        <h2 className="whitespace-nowrap text-xl font-bold">판매 중인 상품</h2>
        <div className="flex gap-4">
          <div className="h-10 w-64 animate-pulse rounded bg-gray-200" />
          <div className="h-10 w-32 animate-pulse rounded bg-gray-200" />
          <div className="h-10 w-32 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 py-5 md:grid-cols-3 xl:grid-cols-5">
        {[...Array(pageSize)].map((_, index) => (
          <div
            key={index}
            className="aspect-square w-full animate-pulse rounded bg-gray-200"
          />
        ))}
      </div>
    </section>
  );
};

export default AllProductsSkeleton;
