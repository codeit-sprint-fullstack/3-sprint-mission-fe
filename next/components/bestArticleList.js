import styles from "@/components/bestArticleList.module.css"
import Image from "next/image"
import Link from "next/link"

export default function BestPostList({ posts }) {
  
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };


  return (
    <div className={styles.postWrapper}>
      {posts.slice(0, 3).map((post) => (
        <li key = {post.id} className={styles.postContainer}>
          <div className={styles.bestWrapper}>
            <Image
              src="/images/ic_medal.png"
              width={16}
              height={16}
              alt="Medal"
            />
            <span className={styles.bestText}>Best</span>
        </div>
        <div className={styles.contentWrapper}>
            <div className={styles.titleContainer}>
              <Link href={`/posts/${post.id}`}>
                <h1 className={styles.postTitle}>{post.title}</h1>
              </Link>
            <div>
              <Image
                width={72}
                height={72}
                src="/images/img_default.png"
                alt="게시물 이미지"
                className={styles.postImage}
               />
             </div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.userContainer}>
                <div>
                  <span className={styles.postNickname}>총명한 판다</span>
                </div>
                <div className={styles.heartPart}>
                  <Image
                    src="/images/icon.png"
                    width={13.4}
                    height={11.65}
                    alt="Heart Icon"
                    className={styles.heartIcon}
                  />
                  <span className={styles.favoriteCount}>
                    9999
                  </span>
                </div>
              </div>
              <div>
                <span className={styles.postCreateAt}>
                  {formatDate(post.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}