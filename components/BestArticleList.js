import styles from "./BestArticleList.module.css";
import BestArticle from "./BestArticle.js";
import Link from "next/link";

function BestArticleList({ bestArticles }) {
  return (
    <div className={styles.bestArticleList}>
      {bestArticles.map((article) => (
        <Link
          href={`/article/${article.id}`}
          style={{ textDecoration: "none" }}
          key={article.id}
        >
          <BestArticle title={article.title} />
        </Link>
      ))}
    </div>
  );
}

export default BestArticleList;
