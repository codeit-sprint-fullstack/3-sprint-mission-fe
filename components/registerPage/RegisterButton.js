import styles from '@/css/register.module.css';
import { Modal } from '../loginpage/Modal';

export default function RegisterButton({ handleSignUp, isAlertVisible, alertMessage, setAlertVisible }) {

    const handleCloseAlert = () => {
        setAlertVisible(false);
        if (alertMessage === '회원가입 성공!') {
            window.location.href = '/';
        }
    };

    return (
        <>
            <div>
                <div
                    onClick={handleSignUp}
                    className={styles.RegisterButton}>
                    회원가입
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
