import CommonBtn from "@/components/common/button/CommonBtn";
import PostListTitle from "./PostListTitle";
import Image from "next/image";
import profileIcon from "@/public/icons/ic_profile.png";
import heartIcon from "@/public/icons/ic_heart.svg";
import searchIcon from "@/public/icons/ic_search.svg";
import sortButton from "@/public/images/btn_sort.png";

const PostList = () => {
  const content = "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?";
  const userName = "총명한판다";
  const updateAt = "2024. 04. 16";
  const likeCount = "9999+";
  return (
    <section className="max- box-border">
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
        <li className="mb-6 h-[140px] border-b-[1px] border-gray-footer_text bg-gray-bg_list pb-6">
          <div className="h-[88px]">
            <p className="text-xl font-semibold text-black">{content}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-sm">
              <Image
                src={profileIcon}
                alt="profile image"
                height={24}
                width={24}
              />
              <span className="text-gray-dark">{userName}</span>
              <span className="text-gray">{updateAt}</span>
            </div>
            <div className="flex gap-2 text-base">
              <Image src={heartIcon} alt="heart" height={24} width={24} />
              <span className="text-gray-heart_number">{likeCount}</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PostList;
