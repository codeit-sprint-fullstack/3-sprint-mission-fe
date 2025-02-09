"use client";

import { Article, getAllArticles } from "@/src/utils/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function BestArticle() {
  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: getAllArticles,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>게시글을 불러오는 중 오류가 발생했습니다.</div>;

  const bestArticles = [...articles]
    .sort((a, b) => b.like - a.like)
    .slice(0, 3);

  return (
    <div className="w-[1200px] mx-auto">
      <div className="text-[20px] font-bold leading-[23.87px] text-left text-[#111827]">
        베스트 게시글
      </div>
      <div className="flex flex-row gap-[24px]">
        {bestArticles.map((article) => (
          <div
            key={article.id}
            className="w-[384px] h-[169px] px-[24px] rounded-[8px] bg-[#F9FAFB] mt-[20px]"
          >
            <Image
              src="/bestarticle.png"
              alt="bestarticle"
              width={102}
              height={30}
            />
            <div className="flex">
              <div className="w-[250px] text-[16px] font-[700] leading-[32px] text-left text-[#1F2937]">
                {article.title}
              </div>
              <Image
                src="/articleImage.png"
                alt="articleImage"
                width={72}
                height={72}
              />
            </div>
            <div className="flex justify-between mt-[24px]">
              <div className="flex flex-row gap-[8px]">
                <div>{article.user.nickname}</div>
                <div className="flex items-center gap-[4px]">
                  <div className="w-[16px]">
                    <Image
                      src="/articleheart.png"
                      alt="articleheart"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>{article.like}</div>
                </div>
              </div>
              <div>
                {new Date(article.createdAt).toLocaleDateString("ko-KR")}
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
}
