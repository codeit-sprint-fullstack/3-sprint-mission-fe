import BestPost from "@/components/post/BestPost/BestPost";
import PostList from "@/components/post/PostList/PostList";

const PostPage = () => {
  return (
    <article className="p-4 md:p-6">
      <div className="mx-auto min-w-[325px] max-w-[1200px]">
        <BestPost />
        <PostList />
      </div>
    </article>
  );
};

export default PostPage;
