import styles from '@/css/BestItemList.module.css';
import Image from 'next/image';
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function BestItemList({ post }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${post.id}`);
    };
    return (
        <>
            {/* get으로 불러온 데이터 중에 좋아요 수 많은거 상위 3개 불러오기  컴포넌트로 만들어서 불러오기*/}
            <div className={styles.BestItemListContain} onClick={handleClick}>
                <div className={styles.BestItemList}>
                    <Image
                        width={102}
                        height={30}
                        src="/images/BestImage.png" alt="Best" />
                    <div className={styles.BestItemListText1}>
                        <div className={styles.BestItemListText11}>{post.content}</div>
                        <div className={styles.BestItemImageBox}>
                            <Image
                                width={48}
                                height={45}
                                src="/images/bestitemimage.png" alt="Best" />
                        </div>
                    </div>
                    <div className={styles.BestItemListText2}>
                        <div className={styles.BestItemListText22}>
                            <div>{post.user}</div>
                            <div>♡</div>
                            <div>{post.like}</div>
                        </div>
                        <div>
                            <div>{dayjs(post.createdAt).format('YYYY. MM. DD')}</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}