import styles from './bestArticle.module.css';
import BestPostList from './bestArticleList';
import axios from '@/lib/axios';
import { useState, useEffect } from 'react';

export default function BestArticle() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const res = await axios.get('/articles');
      console.log("API Response:", res.data); // 응답 확인
      const posts = res.data.results || res.data || [];
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