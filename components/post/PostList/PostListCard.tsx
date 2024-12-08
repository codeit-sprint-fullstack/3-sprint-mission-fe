import Image from "next/image";

import profileIcon from "@/public/icons/ic_profile.png";
import heartIcon from "@/public/icons/ic_heart.svg";
import laptopImage from "@/public/images/laptop.png";
import Link from "next/link";

type PostListCardProps = {
  post: {
    id: string;
    title: string;
    likes: number;
    createdAt: Date | string;
  };
};

const PostListCard = ({ post }: PostListCardProps) => {
  const userName = "총명한판다";

  const formattedDate =
    post.createdAt instanceof Date && post.createdAt.toLocaleDateString();

  return (
    <Link href="/post/123">
      <li
        key={post.id}
        className="mb-6 h-[140px] border-b-[1px] border-gray-footer_text bg-gray-bg_list pb-6"
      >
        {/* 게시글 카드 관련 내용 */}
        <div className="flex h-[88px]">
          <p className="grow text-xl font-semibold text-black">{post.title}</p>
          <div className="h-[72px] w-[72px] shrink-0 rounded-lg border border-gray-light bg-white p-3">
            <Image
              src={laptopImage}
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
            <span className="text-gray-dark">{userName}</span>
            <span className="text-gray">{formattedDate}</span>
          </div>
          <div className="flex gap-2 text-base">
            <Image src={heartIcon} alt="heart" height={24} width={24} />
            <span className="text-gray-heart_number">{post.likes}</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PostListCard;
