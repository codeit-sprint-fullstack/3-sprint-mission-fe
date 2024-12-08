import Head from "next/head";
import BestPosts from "../components/BestPosts";
import PostList from "../components/PostList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>판다마켓</title>
        <meta name="description" content="중고마켓과 자유게시판이 있는 판다마켓" />
      </Head>

      <main className={styles.main}>
        {/* 베스트 게시글 섹션 */}
        <section className={styles.section}>
          <h2 className={styles.title}>베스트 게시글</h2>
          <BestPosts />
        </section>

        {/* 게시글 리스트 섹션 */}
        <section className={styles.section}>
          <h2 className={styles.title}>게시글</h2>
          <PostList />
        </section>
      </main>
    </div>
  );
}
