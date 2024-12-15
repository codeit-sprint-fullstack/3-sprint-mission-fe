import axios from "@/lib/axios.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [bestArticles, setBestArticles] = useState([]);

  async function getArticles() {
    try {
      const res = await axios.get("/articles");
      const articles = res.data;

      const best = articles.filter((article) => article.isBest); // 베스트 여부 확인
      const regular = articles.filter((article) => !article.isBest);

      setBestArticles(best);
      setArticles(regular);
    } catch (error) {
      console.error("게시글이 일치하지않습니다", error);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="content">
      {/* //베스트게시글 */}
      <section className="bestArticles">
        <h2 className="bestArticleText">베스트 게시글</h2>
        <div className="bestArticleMap">
          {bestArticles.map((article) => (
            <div key={article.id} className="articleId">
              <h3 className="articleTitle">{article.title}</h3>
              <p className="articleSummary">{article.summary}</p>
              <p className="articleDate">{article.date}</p>
            </div>
          ))}
        </div>
      </section>
      {/* //게시글 */}
      <section>
        <h2 className="Articles">게시글</h2>
        <div>
          <input
            type="text"
            placeholder="검색할 상품명을 입력해주세요"
            className="SearchProduct"
          />
        </div>
        <ul className="ArticleMap">
          {articles.map((article) => (
            <li key={article.id} className="articleId">
              <div>
                <h3 className="title">{article.title}</h3>
                <p className="articleDate">{article.date}</p>
              </div>
              <div className="flex items-center">
                <p className="likes">{article.likes}+</p>
                <img
                  src={article.image}
                  alt={article.title}
                  className="productImg"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
