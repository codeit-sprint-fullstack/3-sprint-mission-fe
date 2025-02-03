import { ArticleCreateResponse } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";
import HeartIcon from "../SVG/HeartIcon";
import bestBadgeImage from "@/public/images/badge/img_badge.png";
import { formattedDate } from "@/utils/formattedDate";

const BestArticleCard = ({
  id,
  title,
  image,
  writer,
  likeCount,
  createdAt,
}: ArticleCreateResponse) => {
  return (
    <Link href={`/articles/${id}`} key={id}>
      <li className="box-border min-w-[340px] max-w-[384px] rounded-lg bg-gray-bg_card px-6 pb-4 xl:h-[169px] xl:w-[384px]">
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
          <p className="grow text-lg font-semibold xl:text-xl">{title}</p>
          <div className="h-[72px] w-[72px] shrink-0 rounded-lg border border-gray-light bg-white p-3">
            <Image
              src={image}
              height={48}
              width={48}
              alt="best-board-thumbnail-image"
              className="object-cover"
            />
          </div>
        </div>
        {/* 카드 푸터 */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-dark">{writer.nickname}</span>
            <div className="flex items-center gap-1">
              <HeartIcon size={16} />

              <span className="text-gray-heart_number">{likeCount}</span>
            </div>
          </div>
          <div className="text-gray">{formattedDate(createdAt)}</div>
        </div>
      </li>
    </Link>
  );
};

export default BestArticleCard;
