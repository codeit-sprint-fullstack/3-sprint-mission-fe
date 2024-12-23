import styles from '@/css/register.module.css';

export default function NicknameInputRegister({ value, setValue }) {

    return (
        <div className={styles.NicknameInputRegisterMain}>
            <div className={styles.NicknameInputRegisterTitle}>
                닉네임
            </div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={styles.NicknameInputRegistertArea}
                placeholder='닉네임을 입력해주세요'
            />
        </div>
    );
}
