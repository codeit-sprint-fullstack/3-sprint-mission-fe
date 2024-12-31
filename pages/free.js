import Header from "@/components/Header.js";
import Footer from "@/components/Footer";
import styles from "@/styles/free.module.css";
import BestArticleList from "@/components/free/BestArticleList.js";
import ArticleList from "@/components/free/ArticleList";
import OrderDropDown from "@/components/OrderDropDown";
import Link from "next/link";
import { useState, useEffect } from "react";
// import axios from "@/lib/axios";
import codeitAxios from "@/lib/codeitAxios";

export default function Home() {
  const [search, setSearch] = useState("");
  const [bestArticles, setBestArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  const options = [
    { label: "최신순", value: "recent" },
    { label: "좋아요순", value: "like" },
  ];
  const [order, setOrder] = useState(options[0]);
  const orderValue = order.value;

  async function getBestArticles() {
    // const response = await axios.get("/articles?limit=3&order=new"); // 내 db
    const response = await codeitAxios.get("/articles?pageSize=3&orderBy=like");
    const articles = response.data.list ?? [];
    console.log(articles);
    setBestArticles(articles);
  }
  async function getArticlesByOrder() {
    // const response = await axios.get(`/articles?order=${order}`); // 내 db
    const response = await codeitAxios.get(`/articles?orderBy=${orderValue}`);
    const articles = response.data.list ?? [];
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
