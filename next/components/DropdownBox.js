import styles from "@/components/DropdownBox.module.css";
import axios from "@/lib/axios";
import PostListCard from "./postListCard";
import { useState, useEffect } from "react";

export default function Dropdown() {
  const [currentValue, setCurrentValue] = useState("최신순");
  const [order, setOrder] = useState("createAt");
  const [post, setPost] = useState([]);

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.value);
    if (e.target.value === "최신순") {
      setOrder("createAt");
    } else if (e.target.value === "좋아요 순") {
      setOrder("favoriteCount");
    }
  };

  const sortedItems = Array.isArray(post) ? post.sort((a, b) => b[order] - a[order]) : [];

  async function getPosts() {
    const res = await axios.get("/board");
    return res.data; // 데이터를 반환
  }

  const handleLoad = async () => {
    try {
      const posts = await getPosts();
      setPost(posts);
    } catch (err) {
      console.error("Failed Fetching:", err);
    }
  };

  useEffect(() => {
    handleLoad();
  }, [order]); // order가 변경될 때마다 로드

  return (
    <div className={styles.sort}>
      <select className={styles.sortBtn} onChange={handleOnChangeSelectValue} value={currentValue}>
        <option className={styles.option}>최신순</option>
        <option className={styles.option}>좋아요순</option>
      </select>
      <div>
        <PostListCard posts={sortedItems} />
      </div>
    </div>
  );
}
