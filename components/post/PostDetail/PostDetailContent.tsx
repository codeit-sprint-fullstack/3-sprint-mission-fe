import Image from "next/image";

import kebabIcon from "@/public/icons/ic_kebab.png";
import profileImage from "@/public/icons/ic_profile.png";
// import heartIcon from "@/public/icons/ic_heart.svg";
// import PostAndCommentActionsDropdown from "@/components/common/dropdown/PostAndCommentActionsDropdown";
import { useState } from "react";
// import HeartButton from "@/components/common/button/HeartButton";

const title = "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?";
const content = "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?";
// const likeCount = 123;

const PostDetailContent = () => {
  const [isPostMenuOpen, setIsPostMenuOpen] = useState(false);

  const togglePostMenu = () => {
    setIsPostMenuOpen((prev) => !prev);
  };

  return (
    <section>
      <div className="mb-4 flex justify-between">
        <h1 className="text-xl font-bold text-custom-black">{title}</h1>
        <button onClick={togglePostMenu} className="relative">
          <Image
            src={kebabIcon}
            alt="더보기"
            width={24}
            height={24}
            className=""
          />
          {isPostMenuOpen && (
            <div className="absolute right-1 top-6 z-10">
              {/* <PostAndCommentActionsDropdown type="post" onDelete={() => {}} /> */}
            </div>
          )}
        </button>
      </div>
      {/* 게시글 하단 정보 */}
      <div className="relative flex items-center border-b-[1px] border-gray-footer_text pb-4">
        <Image
          src={profileImage}
          alt="프로필 이미지"
          width={40}
          height={40}
          className="mr-4"
        />
        <span className="mr-2 text-sm text-gray-dark">총명한판다</span>
        <span className="mr-8 text-sm text-gray">2024. 01. 02</span>
        <div className="border-l-2 border-gray-footer_text pl-8">
          {/* <HeartButton id={} likeCount={likeCount} isFavorite onToggleFavorite={ } size={ }isBorder /> */}
        </div>
      </div>
      <p className="mb-8 mt-6 text-lg text-gray-dark">{content}</p>
    </section>
  );
};

export default PostDetailContent;
