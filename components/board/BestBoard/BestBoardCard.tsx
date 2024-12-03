import Image from "next/image";

import bestBadgeImage from "@/public/images/badge/img_badge.png";
import laptopImage from "@/public/images/laptop.png";
import heartImage from "@/public/images/ic_heart.svg";

const BestBoardCard = () => {
  const updateAt = "2024. 04. 16";
  const name = "총명한판다";
  const heartCount = "9999+";
  return (
    <div className="box-border min-w-[340px] rounded-lg bg-gray-bg_card px-6 pb-4">
      {/* 카드 헤더 */}
      <Image
        src={bestBadgeImage}
        width={102}
        height={30}
        alt="best board badge image"
        className="mb-4"
      />
      {/* 카드 본문 */}
      <div className="mb-5 flex gap-8">
        <p className="text-lg xl:text-xl">
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </p>
        <div>
          <Image
            src={laptopImage}
            height={48}
            width={48}
            alt="best-board-thumbnail-image"
            className="object-cover"
          />
        </div>
      </div>
      {/* 카드 푸터 */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-2">
          <span className="text-gray-dark">{name}</span>
          <div className="flex gap-1">
            <Image src={heartImage} width={16} height={16} alt="heart" />

            <span className="text-gray-heart_number">{heartCount}</span>
          </div>
        </div>
        <div className="text-gray">{updateAt}</div>
      </div>
    </div>
  );
};

export default BestBoardCard;
