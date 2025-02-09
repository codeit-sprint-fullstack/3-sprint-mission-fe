import FormatDate from "@/utils/Format";
import styles from "@/components/board/bestArticleList.module.css";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  createdAt: string;
  [key: string]: any; // 추가 속성 허용
}

interface BestArticleListProps {
  posts: Post[];
}

export default function BestArticleList({ posts }: BestArticleListProps) {
  return (
    <div className={styles.postWrapper}>
      {posts.slice(0, 3).map((post) => (
        <li key={post.id} className={styles.postContainer}>
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
                  <span className={styles.favoriteCount}>9999</span>
                </div>
              </div>
              <div>
                <span className={styles.postCreateAt}>
                  {FormatDate(post.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}