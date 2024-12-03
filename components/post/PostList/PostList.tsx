import Image from "next/image";

import PostListTitle from "./PostListTitle";
import PostListCard from "./PostListCard";
import CommonBtn from "@/components/common/button/CommonBtn";

import searchIcon from "@/public/icons/ic_search.svg";
import sortButton from "@/public/images/btn_sort.png";

const PostList = () => {
  return (
    <section className="box-border">
      {/* 게시글 헤더 */}
      <div className="mb-6 flex items-center justify-between">
        <PostListTitle />
        <CommonBtn>글쓰기</CommonBtn>
      </div>

      {/* 게시글 검색 관련 */}
      <div className="mb-6 flex justify-center gap-3">
        <label className="flex h-[42px] grow gap-1 rounded-xl bg-gray-light px-4">
          <Image src={searchIcon} alt="search icon" height={24} width={24} />
          <input
            type="text"
            className="bg-gray-light text-base focus:outline-none"
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
            name=""
            id=""
            className="hidden h-[42px] w-[130px] rounded-xl border border-gray-footer_text px-3 sm:block"
          >
            <option value="">최신순</option>
            <option value="">인기순</option>
          </select>
        </div>
      </div>

      {/* 게시글 리스트 */}
      <ul>
        <PostListCard />
      </ul>
    </section>
  );
};

export default PostList;
