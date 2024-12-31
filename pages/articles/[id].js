import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/article.module.css";
import ArticleDetail from "@/components/articleDetail/ArticleDetail";
import Comment from "@/components/comment/Comment";
import Image from "next/image";
import Link from "next/link";
// import axios from "@/lib/axios";
import codeitAxios from "@/lib/codeitAxios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ArticleDetailPage() {
  const [article, setArticle] = useState(null);

  const router = useRouter();
  const { id } = router.query;
  const pathname = router.pathname;
  const isArticle = pathname.startsWith("/article"); // 짱신기

  async function getArticle() {
    try {
      if (!id) return console.log(`${id} does not exist`); // id가 없는 경우 실행 중단

      // const response = await axios.get(
      //   isArticle ? `/article/${id}` : `/items/${id}`
      // ); // 내 db
      const response = await codeitAxios.get(`/articles/${id}`); // 코드잇
      const article = response.data ?? {};
      setArticle(article);
    } catch (error) {
      console.error("Failed to fetch article:", error);
    }
  }

  useEffect(() => {
    if (id) {
      getArticle();
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.contents}>
            {article ? (
              <ArticleDetail article={article} />
            ) : (
              <p>Loading...</p> // 로딩 중 표시
            )}
            <Comment id={id} isArticle={isArticle} />
          </div>
          <Link href="/" style={{ textDecoration: "none" }}>
            <button className={styles.returnToArticlesBt}>
              <div>목록으로 돌아가기</div>
              <div className={styles.returnImgBox}>
                <Image fill alt="backImg" src="/imgs/ic_back.png" />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
