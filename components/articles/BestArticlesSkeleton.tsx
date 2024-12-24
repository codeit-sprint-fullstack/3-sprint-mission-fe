const BestArticlesSkeleton = () => {
  return (
    <section className="mb-6">
      <h1 className="mb-4 text-lg font-bold text-custom-black md:mb-6 md:text-xl">
        베스트 게시글
      </h1>
      <div className="animate-pulse">
        <div className="flex gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-[169px] w-[384px] rounded bg-gray-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestArticlesSkeleton;
