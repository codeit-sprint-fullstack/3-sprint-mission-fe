import styles from '@/css/register.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function PwInputRegister({ value, setValue, confirmValue, setConfirmValue }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [reIsPasswordVisible, setReIsPasswordVisible] = useState(false);

    const handlePasswordToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handlePasswordToggle1 = () => {
        setReIsPasswordVisible(!reIsPasswordVisible);
    };

    return (
        <>
            <div className={styles.PwInputRegisterMain}>
                <div className={styles.PwInputRegisterTitle}>
                    비밀번호
                </div>
                <input
                    style={{
                        border: (value.length < 8) && value ? "2px solid red" : "",
                    }}
                    type={isPasswordVisible ? "text" : "password"}
                    className={styles.PwInputRegisterArea}
                    placeholder="비밀번호를 입력해주세요"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <span
                    className={styles.passwordTypeChange}
                    onClick={handlePasswordToggle}
                >
                    <Image
                        width={24}
                        height={24}
                        src={
                            isPasswordVisible
                                ? `/images/passwordIcon2.svg`
                                : `/images/passwordIcon1.svg`
                        }
                        alt="passwordChangeIcon"
                        className={styles.passwordicon}
                    />
                </span>
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
                <div className={styles.PwInputContainer}>
                    <input
                        style={{
                            border: (value !== confirmValue) && confirmValue ? "2px solid red" : "",
                        }}
                        type={reIsPasswordVisible ? "text" : "password"}
                        className={styles.PwInputRegisterArea}
                        placeholder="비밀번호를 다시 한 번 입력해주세요"
                        value={confirmValue}
                        onChange={(e) => setConfirmValue(e.target.value)}
                    />
                    <span
                        className={styles.passwordTypeChange}
                        onClick={handlePasswordToggle1}
                    >
                        <Image
                            width={24}
                            height={24}
                            src={
                                reIsPasswordVisible
                                    ? `/images/passwordIcon2.svg`
                                    : `/images/passwordIcon1.svg`
                            }
                            alt="passwordChangeIcon"
                            className={styles.passwordicon}
                        />
                    </span>
                </div>
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
