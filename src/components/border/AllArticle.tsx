"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosArticles, Article } from "@/src/utils/axios";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../shared/Dropdown";

export default function AllArticle() {
  const [selectedSort, setSelectedSort] = useState<"latest" | "like">("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: { articles = [], total = 0 } = {}, isLoading } = useQuery({
    queryKey: ["articles", selectedSort, searchTerm, pageSize],
    queryFn: () => axiosArticles(selectedSort, searchTerm, pageSize),
  });

  const handleSearch = () => {
    setSearchTerm(searchQuery);
  };

  return (
    <div className="w-[1200px] mx-auto mt-[40px]">
      <div className="flex justify-between items-center">
        <div className="text-[20px] font-bold leading-[23.87px] text-left text-[#111827]">
          게시글
        </div>
        <Link href="/articleWrite">
          <div className="w-[88px] text-[13px] h-[42px] px-[23px] py-[12px] font-[600] rounded-[8px] bg-[#3692FF] text-[#FFFFFF] cursor-pointer">
            글쓰기
          </div>
        </Link>
      </div>

      <div className="flex flex-row justify-between mt-[12px]">
        <div className="relative w-full items-center">
          <Image
            src="/search.png"
            alt="search"
            className="absolute left-[10px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            width={24}
            height={24}
            onClick={handleSearch}
          />
          <input
            className="outline-none w-[1054px] pl-[40px] h-[42px] px-[20px] py-[9px] rounded-[12px] bg-[#F3F4F6] text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF]"
            placeholder="검색할 게시글을 입력해주세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <Dropdown
          options={["최신순", "좋아요순"]}
          selectedValue={selectedSort === "latest" ? "최신순" : "좋아요순"}
          placeholder={selectedSort === "latest" ? "최신순" : "좋아요순"}
          onValueChange={(value) =>
            setSelectedSort(value === "최신순" ? "latest" : "like")
          }
          className="w-[130px] h-[42px] rounded-[12px] border border-[#E5E7EB] font-[500] text-[#1F2937] "
          buttonClassName="bg-white rounded-[12px] text-[#1F2937] "
          listClassName="bg-white rounded-[12px] border border-[#E5E7EB] text-[#1F2937] bg-[#FFFFFF]"
          itemClassName="text-center rounded-[12px] font-[500] text-[#1F2937] bg-[#ffffff]"
        />
      </div>

      {isLoading ? (
        <div className="text-center text-gray-500 mt-4">로딩 중...</div>
      ) : (
        articles.map((article) => (
          <div key={article.id} className="border-b border-[#E5E7EB] pb-4">
            <div className="flex justify-between mt-[24px]">
              <div className="text-[16px] font-[700] leading-[32px] text-left text-[#1F2937]">
                {article.title}
              </div>
              <Image
                src="/articleImage.png"
                alt="articleImage"
                width={72}
                height={72}
              />
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex items-center gap-2">
                <div className="w-[32px]">
                  <Image
                    src="/userImage.png"
                    alt="userImage"
                    width={32}
                    height={32}
                  />
                </div>

                <div className="text-[14px] font-normal leading-[24px] text-left text-[#4B5563]">
                  {article.user.nickname}
                </div>
                <div className="text-[14px] font-normal leading-[24px] text-left text-[#9CA3AF]">
                  {new Date(article.createdAt).toLocaleDateString("ko-KR")}
                </div>
              </div>

              <div className="flex flex-row items-center gap-1">
                <Image
                  src="/heartIcon.svg"
                  alt="heartIcon"
                  className="cursor-pointer pt-1"
                  width={16}
                  height={16}
                />
                <div>{article.like}</div>
              </div>
            </div>
          </div>
        ))
      )}

      {pageSize < total && (
        <div
          onClick={() => setPageSize((prev) => prev + 3)}
          className="w-[350px] h-[40px] border border-[#E5E7EB] font-[600] bg-[#E5E7EB] rounded-lg flex justify-center items-center mx-auto mt-4 cursor-pointer"
        >
          더보기
        </div>
      )}
    </div>
  );
}
