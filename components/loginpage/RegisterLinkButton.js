import { useRouter } from 'next/router';
import styles from '@/css/login.module.css';

export default function RegisterLinkButton() {
    const router = useRouter();

    const handleRegisterClick = () => {
        router.push('/signin');
    };

    return (
        <div className={styles.RegisterLinkButtonMain}>
            <div>판다마켓이 처음이신가요?</div>
            <div className={styles.registerText} onClick={handleRegisterClick}>회원가입</div>
        </div>
    );
}