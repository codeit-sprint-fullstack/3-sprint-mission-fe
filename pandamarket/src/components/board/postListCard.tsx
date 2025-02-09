import FormatDate from "@/utils/Format";
import styles from "@/components/board/postListCard.module.css";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  createdAt: string;
  [key: string]: any; // 추가적인 속성 허용
}

interface PostListCardProps {
  posts: Post[];
}

export default function PostListCard({ posts }: PostListCardProps) {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.titleContainer}>
        {posts.map((post) => (
          <li key={post.id} className={styles.contentWrapper}>
            <div className={styles.firstSection}>
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
              <div>
                <Image
                  width={24}
                  height={24}
                  src="/images/userImg.png"
                  alt="UserImage"
                  className={styles.userImage}
                />
                <span className={styles.postNickname}>총명한 판다</span>
                <span className={styles.postCreateAt}>
                  {FormatDate(post.createdAt)} {/* 날짜 형식 변환 */}
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
