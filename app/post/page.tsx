import BestPost from "@/components/post/BestPost/BestPost";
import PostList from "@/components/post/PostList/PostList";

const PostPage = () => {
  return (
    <article className="mx-auto max-w-[1200px] p-4 md:p-6">
      <BestPost />
      <PostList />
    </article>
  );
};

export default PostPage;
