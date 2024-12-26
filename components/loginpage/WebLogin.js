import styles from '@/css/login.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function WebLogin() {
    return (
        <div className={styles.WebLoginMain}>
            <div className={styles.WebLoginTitle}>간편 로그인하기</div>
            <div className={styles.WebLoginIcon}>
                <Link href="https://www.google.com" >
                    <Image
                        width={42}
                        height={42}
                        src="/images/google.png"
                        alt="Google"
                    />
                </Link>
                <Link href="https://www.kakaocorp.com/page" >
                    <Image
                        width={42}
                        height={42}
                        src="/images/kakao.png"
                        alt="Kakao"
                    />
                </Link>
            </div>
        </div>
    );
}