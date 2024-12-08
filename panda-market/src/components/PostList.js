import { useState } from "react";
import styles from "../styles/PostList.module.css";

const PostList = () => {
  const [sortOption, setSortOption] = useState("recent"); // 정렬 옵션 상태
  const [searchText, setSearchText] = useState(""); // 검색 텍스트 상태

  const posts = [
    {
      id: 1,
      title: "맥북 16인치 16기가 램, 1테라 정도 사용이면 얼마에 팔아야하나요?",
      author: "총명한 판다",
      likes: 1,
      date: "2024.04.16",
      image: "/images/macbook.png",
    },
    {
      id: 2,
      title: "아이패드 프로 11인치, 미개봉",
      author: "총명한 판다",
      likes: 8888,
      date: "2024.04.15",
      image: "/images/ipad.png",
    },
    {
      id: 3,
      title: "갤럭시 S23 울트라, 새상품",
      author: "총명한 판다",
      likes: 7777,
      date: "2024.04.14",
      image: "/images/galaxy.png",
    },
  ];

  // 정렬 함수
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOption === "recent") {
      return new Date(b.date) - new Date(a.date); // 최신순
    } else if (sortOption === "popular") {
      return b.likes - a.likes; // 인기순
    }
    return 0;
  });

  // 검색 필터링
  const filteredPosts = sortedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className={styles.postList}>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // 검색 상태 업데이트
        />
        <button className={styles.writeButton}>글쓰기</button>
        <select
          className={styles.sortDropdown}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)} // 정렬 옵션 업데이트
        >
          <option value="recent">최신순</option>
          <option value="popular">인기순</option>
        </select>
      </div>
      <div className={styles.posts}>
        {filteredPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <img
              src={post.image || "/images/default_product.png"}
              alt={post.title}
              className={styles.postImage}
            />
            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.postInfo}>
                <span>{post.author}</span>
                <span>❤️ {post.likes}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostList;

