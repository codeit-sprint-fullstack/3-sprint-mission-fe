import styles from '@/css/login.module.css';

export default function LoginButton({ handleLogin }) {

    return (
        <div>
            <div
                onClick={handleLogin}
                className={styles.loginButton}>
                로그인
            </div>
        </div>
    );
}
