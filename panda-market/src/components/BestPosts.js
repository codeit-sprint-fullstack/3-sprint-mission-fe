import { useEffect, useState } from "react";

const BestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts") // API 경로
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="best-posts">
      <h2>베스트 게시글</h2>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.likes} 좋아요</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestPosts;
