import styles from '@/css/login.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function PwInput({ value, setValue }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePasswordToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

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
                className={styles.PwInputArea}
                placeholder='비밀번호를 입력해주세요'
                value={value}
                type={isPasswordVisible ? "text" : "password"}
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
