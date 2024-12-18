import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/css/Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerContain}>
            <div className={styles.header1}>
                <div className={styles.header2}>
                    <Link href="/" ><Image
                        width={153}
                        height={51}
                        src="/images/PandaLogo.png" alt="Panda Market Logo" /></Link>

                    <div className={styles.headerText}>
                        <p><Link href="/" className={styles.headerText1}>자유게시판</Link></p>
                        <p><Link href="#" className={styles.headerText2}>중고마켓</Link></p>
                    </div>

                    <Link href='/login' className={styles.button}>로그인</Link>
                </div>
            </div>
        </div >
    );
}
