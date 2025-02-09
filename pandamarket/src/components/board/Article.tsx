import styles from "@/components/board/Article.module.css";
import Dropdown from "@/components/DropdownBox";
import axios from "@/lib/axios";
import Link from "next/link";
import PostListCard from "./postListCard";
import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  createdAt: string;
  [key: string]: any; // 추가적인 속성을 허용
}

export default function Article() {
  const [order, setOrder] = useState<keyof Post>("createdAt"); // Post의 키 중 하나
  const [post, setPost] = useState<Post[]>([]);

  const sortedItems = Array.isArray(post)
    ? [...post].sort((a, b) => {
        if (typeof a[order] === "string" && typeof b[order] === "string") {
          return new Date(b[order]).getTime() - new Date(a[order]).getTime();
        }
        return 0;
      })
    : [];

  async function getPosts() {
    try {
      const res = await axios.get<{ results: Post[] } | Post[]>("/articles");
      console.log("API Response:", res.data); // 응답 확인

      // API 응답이 배열인지 확인
      const posts = Array.isArray(res.data) ? res.data : res.data.results || [];
      setPost(posts);
    } catch (err) {
      console.error("Failed Fetching:", err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log("Order changed:", order); // 정렬 기준 변경 확인
  }, [order]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h1 className={styles.boardText}> 게시글</h1>
        <Link href="/post">
          <button className={styles.postBtn}>글쓰기</button>
        </Link>
      </div>
      <div className={styles.inputContainer}>
        <input
          placeholder="검색할 상품을 입력해주세요"
          className={styles.searchInput}
        />
        <Dropdown />
      </div>
      <div>
        <PostListCard posts={sortedItems} />
      </div>
    </div>
  );
}
