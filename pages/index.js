import Header from "@/components/Header.js";
import Footer from "@/components/Footer";
import styles from "@/styles/index.module.css";
import BestArticleList from "@/components/BestArticleList.js";
import ArticleList from "@/components/ArticleList";
import OrderDropDown from "@/components/OrderDropDown";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import axios from "@/lib/axios";

export default function Home() {
  const [search, setSearch] = useState("");
  const [bestArticles, setBestArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  const options = ["최신순", "날짜순"];
  const [order, setOrder] = useState(options[0]);

  async function getBestArticles() {
    const response = await axios.get("/articles?limit=3&order=new");
    const articles = response.data ?? [];
    console.log(articles);
    setBestArticles(articles);
  }
  async function getArticlesByOrder() {
    const response = await axios.get(`/articles?order=${order}`);
    const articles = response.data ?? [];
    console.log(articles);
    setArticles(articles);
  }

  useEffect(() => {
    getBestArticles();
  }, []);

  useEffect(() => {
    getArticlesByOrder();
  }, [order]);

  // 검색 엔터 누르면 조회 함수
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Search triggered:", search);
      // 검색 로직 할꺼
    }
  };

  // 정렬 클릭 함수 setOrder
  const handleOrderClick = (selectedOrder) => setOrder(selectedOrder);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.bestArticleCon}>
            <div className={styles.bestBigText}>베스트 게시글</div>
            <BestArticleList bestArticles={bestArticles} />
          </div>

          <div className={styles.articleCon}>
            <div className={styles.title}>
              <div className={styles.articleBigText}>게시글</div>
              <Link href="/createArticle">
                <button className={styles.articleBt}>글쓰기</button>
              </Link>
            </div>
            <div className={styles.searchBox}>
              <input
                className={styles.searchInput}
                placeholder="검색할 상품을 입력해주세요"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <OrderDropDown
                options={options}
                order={order}
                orderChange={handleOrderClick}
              />
            </div>

            <ArticleList articles={articles} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
