import { useRouter } from 'next/router';
import styles from '@/css/Write.module.css';

export default function WriteButton() {
    const router = useRouter();

    const handleWriteClick = () => {
        router.push('/articleWrite');
    };

    return (
        <div className={styles.Write}>
            <div className={styles.Article}>게시글</div>
            <div
                className={styles.WriteButton}
                onClick={handleWriteClick}
            >
                글쓰기
            </div>
        </div>
    );
}