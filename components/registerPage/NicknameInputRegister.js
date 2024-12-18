import styles from '@/css/register.module.css';

export default function NicknameInputRegister() {

    return (
        <div className={styles.NicknameInputRegisterMain}>
            <div className={styles.NicknameInputRegisterTitle}>
                닉네임
            </div>
            <input className={styles.NicknameInputRegistertArea}
                placeholder='닉네임을 입력해주세요'
            />
        </div>
    );
}
