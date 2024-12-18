import styles from '@/css/login.module.css';

export default function PwInput() {

    return (
        <div className={styles.PwInputMain}>
            <div className={styles.PwInputTitle}>
                비밀번호
            </div>
            <input className={styles.PwInputArea}
                placeholder='비밀번호를 입력해주세요'
            />
        </div>
    );
}
