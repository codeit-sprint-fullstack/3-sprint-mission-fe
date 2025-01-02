import styles from '@/css/register.module.css';

export default function IdInputRegister({ value, setValue }) {

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <div className={styles.IdInputRegisterMain}>
                <div className={styles.IdInputRegisterTitle}>
                    이메일
                </div>
                <input className={styles.IdInputRegistertArea}
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
