
import styles from './bestArticle.module.css';
import BestPostList from './bestArticleList';
import axios from '@/lib/axios';
import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  createdAt: string;
  [key: string]: any; // 추가적인 속성을 허용
}

export default function BestArticle() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    try {
      const res = await axios.get<{ results: Post[] } | Post[]>("/articles");
      console.log("API Response:", res.data); // 응답 확인

      // API 응답이 배열인지 확인
      const posts = Array.isArray(res.data) ? res.data : res.data.results || [];
      setPosts(posts);
    } catch (err) {
      console.error("Failed Fetching:", err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.bestText}>베스트 게시글</h1>
      </div>
      <div>
        <BestPostList posts={posts} />
      </div>
    </div>
  );
}