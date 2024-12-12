import Image from "next/image";
import { StaticImageData } from "next/image";

import bestBadgeImage from "@/public/images/badge/img_badge.png";
import heartImage from "@/public/icons/ic_heart.svg";

type BestPostCardProps = {
  content: string;
  userNickname: string;
  heartCount: string;
  updatedAt: string;
  thumbnailImage: StaticImageData;
};

const BestPostCard = ({
  content,
  userNickname,
  heartCount,
  updatedAt,
  thumbnailImage,
}: BestPostCardProps) => {
  return (
    <li className="box-border min-w-[340px] max-w-[384px] rounded-lg bg-gray-bg_card px-6 pb-4">
      {/* 카드 헤더 */}
      <Image
        src={bestBadgeImage}
        width={102}
        height={30}
        alt="best board badge image"
        className="mb-4"
      />
      {/* 카드 본문 */}
      <div className="mb-5 flex">
        <p className="grow text-lg font-semibold xl:text-xl">{content}</p>
        <div className="h-[72px] w-[72px] shrink-0 rounded-lg border border-gray-light bg-white p-3">
          <Image
            src={thumbnailImage}
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
          <span className="text-gray-dark">{userNickname}</span>
          <div className="flex gap-1">
            <Image src={heartImage} width={16} height={16} alt="heart" />

            <span className="text-gray-heart_number">{heartCount}</span>
          </div>
        </div>
        <div className="text-gray">{updatedAt}</div>
      </div>
    </li>
  );
};

export default BestPostCard;
