import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/css/Header.module.css';

export default function Header() {
    const [nickname, setNickname] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const user = localStorage.getItem('user');

        // 'accessToken'과 'user'가 존재하면 로그인된 상태로 처리
        if (accessToken && user) {
            const parsedUser = JSON.parse(user);
            setNickname(parsedUser.nickname);  // 사용자 닉네임 상태 설정
        } else {
            setNickname(null);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');  // accessToken 삭제
        localStorage.removeItem('user');  // 사용자 정보 삭제
        setNickname(null);  // 상태 초기화
        window.location.reload();  // 페이지 새로고침
    };

    return (
        <div className={styles.headerContain}>
            <div className={styles.header1}>
                <div className={styles.header2}>
                    <Link href="/">
                        <Image
                            width={153}
                            height={51}
                            src="/images/PandaLogo.png"
                            alt="Panda Market Logo"
                        />
                    </Link>

                    <div className={styles.headerText}>
                        <p><Link href="/" className={styles.headerText1}>자유게시판</Link></p>
                        <p><Link href="#" className={styles.headerText2}>중고마켓</Link></p>
                    </div>

                    {nickname ? (
                        <div className={styles.userContainer}>
                            <div className={styles.userArea}>
                                <Image
                                    width={40}
                                    height={40}
                                    src="/images/userIcon.png"
                                    alt="userIcon"
                                />
                                <div className={styles.nickname}>{nickname} 님</div>
                            </div>
                            <div onClick={handleLogout} className={styles.logoutButton}>
                                로그아웃
                            </div>
                        </div>
                    ) : (
                        <Link href='/login' className={styles.button}>로그인</Link>
                    )}
                </div>
            </div>
        </div>
    );
}
