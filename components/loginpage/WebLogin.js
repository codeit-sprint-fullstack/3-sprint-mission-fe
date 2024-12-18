import styles from '@/css/login.module.css';
import Image from 'next/image';

export default function WebLogin() {
    return (
        <div className={styles.WebLoginMain}>
            <div className={styles.WebLoginTitle}>간편 로그인하기</div>
            <div className={styles.WebLoginIcon}>
                <Image
                    width={42}
                    height={42}
                    src="/images/google.png"
                    alt="Best"
                />
                <Image
                    width={42}
                    height={42}
                    src="/images/kakao.png"
                    alt="Best"
                />
            </div>
        </div>
    );
}
