import Link from "next/link";
import BestPostCard from "./BestPostCard";
import { bestPostsData } from "@/mock/bestPostData";

const BestPostContent = () => {
  return (
    <div className="overflow-x-auto">
      <ul className="flex gap-6 pb-4">
        {bestPostsData.map((post) => (
          <Link href={`/post/${post.id}`} key={post.id}>
            <BestPostCard
              content={post.title}
              userNickname={post.userNickname}
              heartCount={post.heartCount}
              updatedAt={post.createdAt}
              thumbnailImage={post.thumbnailImage}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BestPostContent;
