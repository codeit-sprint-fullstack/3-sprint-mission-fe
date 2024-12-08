import { useEffect, useState } from "react";
import styles from "../styles/PostList.module.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts") // API 경로
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className={styles["post-list"]}>
      <h2 className={styles.title}>게시글</h2>
      <div className={styles["posts-container"]}>
        {posts.map((post) => (
          <div key={post.id} className={styles["post-card"]}>
            <h3>{post.title}</h3>
            <p>{post.likes} 좋아요</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostList;
