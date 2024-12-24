"use client";

import { getBestArticles } from "@/services/articleApi";
import { ArticleListResponse } from "@/types/articles";
import BestArticleCard from "./BestArticleCard";
import { useQuery } from "@tanstack/react-query";
import BestArticlesSkeleton from "./BestArticlesSkeleton";

const pageSize = 3; // 한 페이지에 보여줄 베스트 게시글 수 설정

const BestArticles = () => {
  const { data: articles, isLoading } = useQuery<ArticleListResponse>({
    queryKey: ["bestArticles", pageSize],
    queryFn: () => getBestArticles(pageSize),
    staleTime: 1000 * 60 * 5, //  5분 동안 데이터를 'fresh'하다고 간주
    gcTime: 1000 * 60 * 30, // 30분 동안 캐시 유지
    refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 리페치 비활성화
    refetchInterval: 1000 * 60 * 10, // 10분마다 백그라운드에서 자동 업데이트
  });

  if (isLoading) {
    return <BestArticlesSkeleton />;
  }

  return (
    <section className="mb-6">
      <h1 className="mb-4 text-lg font-bold text-custom-black md:mb-6 md:text-xl">
        베스트 게시글
      </h1>
      <div className="overflow-x-auto">
        <ul className="flex gap-6 pb-4">
          {articles?.list.map((article) => (
            <BestArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              content={article.content}
              image={article.image}
              writer={article.writer}
              likeCount={article.likeCount}
              createdAt={article.createdAt}
              updatedAt={article.updatedAt}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BestArticles;
