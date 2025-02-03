import { ArticleCreateResponse } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";
import { formattedDate } from "@/utils/formattedDate";
import HeartIcon from "@/components/SVG/HeartIcon";
import profileIcon from "@/public/icons/ic_profile.png";
import { DEFAULT_IMAGE } from "@/utils/defaultImage";

type AllArticleCardProps = {
  article: ArticleCreateResponse;
};

const AllArticleCard = ({
  article: { id, createdAt, image, likeCount, title, writer },
}: AllArticleCardProps) => {
  return (
    <Link href={`/articles/${id}`}>
      <li
        key={id}
        className="mb-6 h-[140px] border-b-[1px] border-gray-footer_text bg-gray-bg_list pb-6"
      >
        {/* 게시글 카드 관련 내용 */}
        <div className="flex h-[88px]">
          <p className="grow text-xl font-semibold text-black">{title}</p>
          <div className="h-[72px] w-[72px] shrink-0 rounded-lg border border-gray-light bg-white p-3">
            <Image
              src={image ?? DEFAULT_IMAGE}
              alt="post thumbnail image"
              height={48}
              width={48}
            />
          </div>
        </div>
        {/* 게시글 카드 관련 정보 */}
        <div className="flex justify-between">
          <div className="flex gap-2 text-sm">
            <Image
              src={profileIcon}
              alt="profile image"
              height={24}
              width={24}
            />
            <span className="text-gray-dark">{writer.nickname}</span>
            <span className="text-gray">{formattedDate(createdAt)}</span>
          </div>
          <div className="flex gap-2 text-base">
            <HeartIcon size={24} />
            <span className="text-gray-heart_number">{likeCount}</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default AllArticleCard;
