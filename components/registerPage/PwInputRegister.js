import styles from '@/css/register.module.css';

export default function PwInputRegister({ value, setValue, confirmValue, setConfirmValue }) {

    return (
        <>
            <div className={styles.PwInputRegisterMain}>
                <div className={styles.PwInputRegisterTitle}>
                    비밀번호
                </div>
                <input style={{
                    border:
                        (value.length < 8) && value
                            ? "2px solid red" : "",
                }}

                    className={styles.PwInputRegisterArea}
                    placeholder='비밀번호를 입력해주세요'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            <div
                className={styles.inputErr}
                style={{
                    display: value.length < 8 && value ? "block" : "none",
                }}
            >
                *8자 이상 입력해주세요
            </div>

            <div className={styles.PwInputRegisterMain}>
                <div className={styles.PwInputRegisterTitle}>
                    비밀번호 확인
                </div>
                <input style={{
                    border: (value !== confirmValue) && confirmValue ? "2px solid red" : "",
                }}
                    className={styles.PwInputRegisterArea}
                    placeholder='비밀번호를 다시 한 번 입력해주세요'
                    value={confirmValue}
                    onChange={(e) => setConfirmValue(e.target.value)}
                />
            </div>

            <div
                className={styles.inputErr}
                style={{
                    display:
                        (value !== confirmValue) && confirmValue ? "block" : "none",
                }}
            >
                *비밀번호가 일치하지 않습니다
            </div>
        </>
    );
}
