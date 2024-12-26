import styles from '@/css/login.module.css';
import { Modal } from './Modal';

export default function LoginButton({ handleLogin, isAlertVisible, alertMessage, setAlertVisible }) {
    const handleCloseAlert = () => {
        setAlertVisible(false);
        if (alertMessage === '로그인 성공!') {
            window.location.href = '/';
        }
    };

    return (
        <>
            <div>
                <div
                    onClick={handleLogin}
                    className={styles.loginButton}>
                    로그인
                </div>
            </div>
            <Modal
                message={alertMessage}
                isVisible={isAlertVisible}
                onClose={handleCloseAlert}
            />
        </>
    );
}
