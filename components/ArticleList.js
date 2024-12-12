import Article from "./Article";
import styles from "./ArticleList.module.css";
import Link from "next/link";

export default function ArticleList({ articles }) {
  return (
    <div className={styles.articleList}>
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.id}`}
          style={{ textDecoration: "none" }}
        >
          <Article article={article} />
        </Link>
      ))}
    </div>
  );
}
