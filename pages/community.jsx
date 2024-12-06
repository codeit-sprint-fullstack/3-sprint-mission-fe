import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Community.module.css";
import ArticleList from "@/components/ArticleList";

function Community() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [finalKeyword, setFinalKeyword] = useState("");

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    if (e.target.value === "") {
      setFinalKeyword("");
    }
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };

  const handleSearchSubmit = () => {
    setFinalKeyword(searchKeyword);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.bestArticle}>
          <div className={styles.title}>베스트 게시글</div>
          <div>{/* <BestProductList /> */}</div>
        </div>
        <div className={styles.articles}>
          <div className={styles.topBar}>
            <div className={styles.title}>게시글</div>
            <Link href="/">
              <div className={styles.post}>글쓰기</div>
            </Link>
          </div>
          <div className={styles.toolBox}>
            <div className={styles.searchBox}>
              <input
                className={styles.search}
                type="search"
                placeholder="검색할 키워드를 입력해주세요"
                value={searchKeyword}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
              />
              <img
                className={styles.searchLogo}
                src="search.png"
                alt="search"
              />
            </div>
            <div>
              <label htmlFor="order"></label>
              <select
                className={styles.select}
                name="order"
                id="order"
                value={orderBy}
                onChange={handleOrderChange}
              >
                <option value="recent">최신순</option>
                <option value="likes">좋아요순</option>
              </select>
            </div>
          </div>
          <div>
            <ArticleList keyword={finalKeyword} orderBy={orderBy} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
