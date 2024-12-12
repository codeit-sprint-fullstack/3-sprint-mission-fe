"use client";

import Image from "next/image";
import Link from "next/link";

import PostListTitle from "./PostListTitle";
import PostListCard from "./PostListCard";
import CommonBtn from "@/components/common/button/CommonBtn";

import searchIcon from "@/public/icons/ic_search.svg";
import sortButton from "@/public/images/btn_sort.png";
import { useState } from "react";

type PostListCardProps = {
  id: string;
  title: string;
  likes: number;
  createdAt: Date | string;
};

// 게시글 목데이터
const mockPosts = [
  {
    id: "1",
    title: "첫 번째 게시글",
    content: "내용 1",
    likes: 20,
    createdAt: new Date("2024-12-01"),
  },
  {
    id: "2",
    title: "두 번째 게시글",
    content: "내용 2",
    likes: 15,
    createdAt: new Date("2024-12-05"),
  },
  {
    id: "3",
    title: "세 번째 게시글",
    content: "내용 3",
    likes: 30,
    createdAt: new Date("2024-12-03"),
  },
  {
    id: "4",
    title: "네 번째 게시글",
    content: "내용 4",
    likes: 10,
    createdAt: new Date("2024-12-04"),
  },
];

const PostList = () => {
  const [sortOrder, setSortOrder] = useState("recent");

  // 정렬된 게시글 목록
  const sortedPosts = [...mockPosts].sort((a, b) => {
    if (sortOrder === "recent") {
      return b.createdAt.getTime() - a.createdAt.getTime();
    } else if (sortOrder === "likes") {
      return b.likes - a.likes;
    }
    return 0;
  });

  return (
    <section className="box-border">
      {/* 게시글 헤더 */}
      <div className="mb-6 flex items-center justify-between">
        <PostListTitle />
        <Link href={"/post/create"}>
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
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="recent">최신순</option>
            <option value="likes">좋아요 순</option>
          </select>
        </div>
      </div>

      {/* 게시글 리스트 */}
      <ul>
        {sortedPosts.map((post: PostListCardProps) => (
          <PostListCard key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default PostList;
