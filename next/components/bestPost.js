import styles from './bestPost.module.css';
import BestPostList from './bestpostList';
import axios from '@/lib/axios';
import { useState, useEffect } from 'react';

export default function BestPost(){
  
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const res = await axios.get('/board');
    const posts = res.data.results ?? [];
    setPosts(posts.list);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.bestText}>
          베스트 게시글
        </h1>
      </div>
      <div>
        <BestPostList posts={posts}/>
      </div>
    </div>
  )
}