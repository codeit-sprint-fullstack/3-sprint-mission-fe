import BestPost from "@/components/post/BestPost/BestPost";
import PostList from "@/components/post/PostList/PostList";

const PostPage = () => {
  return (
    <article className="mx-auto min-w-[325px] max-w-[1200px]">
      <BestPost />
      <PostList />
    </article>
  );
};

export default PostPage;
