import styles from '@/css/register.module.css';

export default function IdInputRegister() {

    return (
        <div className={styles.IdInputRegisterMain}>
            <div className={styles.IdInputRegisterTitle}>
                이메일
            </div>
            <input className={styles.IdInputRegistertArea}
                placeholder='이메일을 입력해주세요'
            />
        </div>
    );
}
