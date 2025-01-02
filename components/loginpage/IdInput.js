import styles from '@/css/login.module.css';

export default function IdInput({ value, setValue }) {

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <div className={styles.IdInputMain}>
                <div className={styles.IdInputTitle}>
                    이메일
                </div>
                <input
                    className={styles.IdInputArea}
                    placeholder='이메일을 입력해주세요'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{
                        border: value && !isEmailValid(value) ? '2px solid red' : '',
                    }}
                />
            </div>
            <div
                className={styles.inputErr}
                style={{
                    display: value && !isEmailValid(value) ? "block" : "none",
                }}
            >
                *잘못된 이메일입니다.
            </div>
        </>
    );
}
