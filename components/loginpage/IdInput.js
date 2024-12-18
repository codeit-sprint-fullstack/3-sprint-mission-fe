import styles from '@/css/login.module.css';

export default function IdInput() {

    return (
        <div className={styles.IdInputMain}>
            <div className={styles.IdInputTitle}>
                이메일
            </div>
            <input className={styles.IdInputArea}
                placeholder='이메일을 입력해주세요'
            />
        </div>
    );
}
