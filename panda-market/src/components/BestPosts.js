import styles from "../styles/Footer.module.css";
import defaultImg from "../images/default_product.png";
import Image from "next/image";

const BestPosts = () => {
  // 더미 데이터
  const posts = [
    {
      id: 1,
      title: "맥북 16인치 16기가 램, 1테라 저장용량",
      author: "총명한판다",
      likes: "9999+",
      date: "2024.04.16",
      image: "../images/default_product.png",
    },
    {
      id: 2,
      title: "아이패드 프로 11인치, 미개봉",
      author: "총명한판다",
      likes: "9999+",
      date: "2024.04.16",
      image: "/images/ipad.png",
    },
    {
      id: 3,
      title: "갤럭시 S23 울트라, 새상품",
      author: "총명한판다",
      likes: "9999+",
      date: "2024.04.16",
      image: "/images/galaxy.png",
    },
  ];

  return (
    <section className={styles.bestPosts}>
      <h2 className={styles.title}>베스트 게시글</h2>
      <div className={styles.postContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <Image
              src="/images/default_product.png" 
              alt="Default Product"
              width={100}
              height={100}
              className={styles.postImage}
            />
            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.postInfo}>
                <span className={styles.author}>{post.author}</span>
                <span className={styles.likes}>❤️ {post.likes}</span>
                <span className={styles.date}>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestPosts;