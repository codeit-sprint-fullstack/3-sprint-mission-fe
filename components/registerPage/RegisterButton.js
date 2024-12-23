import styles from '@/css/register.module.css';

export default function RegisterButton({ handleSignUp }) {

    return (
        <div>
            <div
                onClick={handleSignUp}
                className={styles.RegisterButton}>
                회원가입
            </div>
        </div>
    );
}
