"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import CommonBtn from "@/components/common/button/CommonBtn";
import AllArticleCard from "./AllArticleCard";

import searchIcon from "@/public/icons/ic_search.svg";
import sortButton from "@/public/images/btn_sort.png";
import { getArticleList } from "@/services/articleApi";
import { ArticleListResponse } from "@/types/articles";

const AllArticles = () => {
  const [sortOrder, setSortOrder] = useState<"recent" | "like">("recent");

  const { data: articles, isLoading } = useQuery<ArticleListResponse>({
    queryKey: ["AllArticles"],
    queryFn: () => getArticleList(1, 10, sortOrder, ""),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 10,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="box-border">
      {/* 게시글 헤더 */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-bold text-custom-black md:text-xl">
          게시글
        </h1>
        <Link href={"/articles/create"}>
          <CommonBtn>글쓰기</CommonBtn>
        </Link>
      </div>

      {/* 게시글 검색 관련 */}
      <div className="mb-6 flex justify-center gap-3">
        <label className="flex h-[42px] grow gap-1 rounded-xl bg-gray-light px-4">
          <Image src={searchIcon} alt="search icon" height={24} width={24} />
          <input
            type="text"
            className="w-full bg-gray-light text-base focus:outline-none"
            placeholder="검색할 상품을 입력해주세요"
          />
        </label>
        <div className="w-[42px] shrink-0 sm:w-[130px]">
          <Image
            src={sortButton}
            alt="sort button"
            height={42}
            width={42}
            className="block sm:hidden"
          />

          <select
            name="sortOrder"
            id="sortOrder"
            className="hidden h-[42px] w-[130px] rounded-xl border border-gray-footer_text px-3 sm:block"
            onChange={(e) => setSortOrder(e.target.value as "recent" | "like")}
          >
            <option value="recent">최신순</option>
            <option value="likes">좋아요 순</option>
          </select>
        </div>
      </div>

      {/* 게시글 리스트 */}
      <ul>
        {articles?.list?.map((article) => (
          <AllArticleCard key={article.id} article={article} />
        ))}
      </ul>
    </section>
  );
};

export default AllArticles;
