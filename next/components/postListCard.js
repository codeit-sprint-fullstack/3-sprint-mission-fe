import styles from "@/components/postListCard.module.css";
import Image from "next/image";
import Link from "next/link";

// 날짜 변환 함수
const formatDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export default function PostListCard({ posts }) {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.titleContainer}>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className={styles.contentWrapper}>
            <div className={styles.firstSection}>
              <Link href={`/posts/${post.id}`}>
                <h1 className={styles.postTitle}>
                  {post.title}
                </h1>
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
              <div>
                <Image
                  width={24}
                  height={24}
                  src="/images/userImg.png"
                  alt="UserImage"
                  className={styles.userImage}
                />
                <span className={styles.postNickname}>
                  총명한 판다
                </span>
                <span className={styles.postCreateAt}>
                  {formatDate(post.createdAt)} {/* 날짜 형식 변환 */}
                </span>
              </div>
              <div className={styles.heartPart}>
                <Image
                  width={24}
                  height={24}
                  src="/images/ic_heart.png"
                  alt="heartIcon"
                />
                <p className={styles.favoriteCount}>9999</p>
              </div>
            </div>
            <div>
              <Image
                src="/images/Vector.png"
                width={1200}
                height={1}
                alt="Vector"
                />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
