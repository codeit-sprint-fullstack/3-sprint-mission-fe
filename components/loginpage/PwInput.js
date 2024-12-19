import styles from '@/css/login.module.css';

export default function PwInput({ value, setValue }) {

    return (
        <div className={styles.PwInputMain}>
            <div className={styles.PwInputTitle}>
                비밀번호
            </div>
            <input style={{
                border:
                    (value.length < 8) && value
                        ? "2px solid red" : "",
            }}
                type="password"
                className={styles.PwInputArea}
                placeholder='비밀번호를 입력해주세요'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <div
                className={styles.inputErr}
                style={{
                    display: value.length < 8 && value ? "block" : "none",
                }}
            >
                *8자 이상 입력해주세요
            </div>
        </div>
    );
}
