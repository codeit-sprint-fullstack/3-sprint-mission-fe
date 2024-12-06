import styles from "@/components/Article.module.css"
import Dropdown from "@/components/DropdownBox"
import axios from "@/lib/axios";
import Link from "next/link";
import PostListCard from "./postListCard";
import { useState, useEffect } from "react";

export default function Post() {

  const [order, setOrder] = useState("createdAt");
  const [post, setPost] = useState([]);

  const sortedItems = Array.isArray(post)
  ? [...post].sort((a, b) => b[order] - a[order])
  : [];

  async function getPosts(order) {
    try {
      const res = await axios.get(`/board?${order}`);
      console.log("API Response:", res.data); // 응답 확인
      const posts = res.data.results || res.data || [];
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

  return(
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h1 className={styles.boardText}> 게시글</h1>
        <Link href ="/writePost">
        <button className={styles.postBtn}>글쓰기</button>
        </Link>
      </div>
      <div className={styles.inputContainer}>
        <input placeholder="검색할 상품을 입력해주세요" className={styles.searchInput}/>
        <Dropdown/>
      </div>
      <div>
        <PostListCard posts={sortedItems} />
      </div>
    </div>
  )
}