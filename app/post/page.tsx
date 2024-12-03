import BestPost from "@/components/post/BestPost/BestPost";
import PostList from "@/components/post/PostList/PostList";

const PostPage = () => {
  return (
    <main className="mx-auto max-w-[1200px] p-4 md:p-6">
      <BestPost />
      <PostList />
    </main>
  );
};

export default PostPage;
