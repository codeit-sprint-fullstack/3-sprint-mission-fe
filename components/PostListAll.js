import styles from "@/css/PostList.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import dayjs from "dayjs";

export default function PostListAll({ post }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${post.id}/article`);
    };

    return (
        <div className={styles.PostListContain} onClick={handleClick}>
            <div className={styles.PostList}>
                <div className={styles.PostListTop}>
                    <div className={styles.PostListTitle}>{post.content}</div>
                    <div className={styles.PostListImageBox}>
                        <Image
                            width={48}
                            height={45}
                            src="/images/bestitemimage.png"
                            alt="Best"
                        />
                    </div>
                </div>

                <div className={styles.PostListBottom}>
                    <div className={styles.PostListButton1}>
                        <div className={styles.PostListUserImage}>
                            <Image
                                width={24}
                                height={24}
                                src="/images/userIcon.png"
                                alt="User"
                            />
                        </div>
                        <div className={styles.PostListUserName}>{post.user}</div>
                        <div className={styles.PostListDate}>{dayjs(post.createdAt).format('YYYY. MM. DD')}</div>
                    </div>
                    <div className={styles.PostListButton2}>
                        <div className={styles.PostListHeartIcon}>
                            <Image
                                width={24}
                                height={24}
                                src="/images/heartIcon.png"
                                alt="Heart"
                            />
                        </div>
                        <div className={styles.PostListLikeCount}>{post.like}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}