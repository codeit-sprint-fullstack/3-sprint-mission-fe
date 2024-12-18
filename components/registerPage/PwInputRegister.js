import styles from '@/css/register.module.css';

export default function PwInputRegister() {

    return (
        <>
            <div className={styles.PwInputRegisterMain}>
                <div className={styles.PwInputRegisterTitle}>
                    비밀번호
                </div>
                <input className={styles.PwInputRegisterArea}
                    placeholder='비밀번호를 입력해주세요'
                />
            </div>


            <div className={styles.PwInputRegisterMain}>
                <div className={styles.PwInputRegisterTitle}>
                    비밀번호 확인
                </div>
                <input className={styles.PwInputRegisterArea}
                    placeholder='비밀번호를 다시 한 번 입력해주세요'
                />
            </div>
        </>
    );
}
