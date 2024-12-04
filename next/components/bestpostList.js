import styles from "@/components/bestpostList.module.css"
import Image from "next/image"
import Link from "next/link"

export default function BestPostList({ posts }) {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.bestWrapper}>
        <Image
          src="/images/ic_medal.png"
          width={16}
          height={16}
          alt="Medal"
        />
        <span className={styles.bestText}>Best</span>
      </div>
      <div className={styles.titleContainer}>
        {posts?.map((post) => (
          <li key={post.id}>
            <div>
              <Link href={`/post/${post.id}`}>
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
                <div>
                  <span className={styles.postNickname}>총명한 판다</span>
                </div>
                <div>
                  <Image
                    src="/images/icon.png"
                    width={13.4}
                    height={11.65}
                    alt="Heart Icon"
                    className={styles.heartIcon}
                  />
                  <span className={styles.postFavoriteCount}>
                    {post.favoriteCount}
                  </span>
                </div>
              </div>
              <div>
                <span className={styles.postCreateAt}>{post.createAt}</span>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}