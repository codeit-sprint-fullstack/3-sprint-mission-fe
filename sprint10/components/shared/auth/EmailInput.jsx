import { useState } from "react";
import styles from "@/styles/pages/Auth.module.css";

function EmailInput({ setValues }) {
  const [value, setValue] = useState('');
  const [validMessage, setValidMessage] = useState('');

  const handleBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
      setValues((prev) => ({
        ...prev,
        email: ''
      }))
      setValidMessage('이메일을 입력해주세요');
      setTimeout(() => {
        setValidMessage('');
      }, 2000);

    } else if (!emailRegex.test(value)) {
      setValidMessage('유효한 이메일 형식을 입력해주세요');
      setValues((prev) => ({
        ...prev,
        email: '',
      }))
    } else if (emailRegex.test(value)) {
      setValues((prev) => ({
        ...prev,
        email: value,
      }))
      setValidMessage('');
    } else {
      setValidMessage('');
    }
  };

  return (
    <div className={styles.inputContentBox}>
      <h1 className={styles.titleText}>이메일</h1>
      <label htmlFor="emailInput"></label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        className={!validMessage ? styles.inputBox : styles.inputBoxValid}
        id="emailInput"
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요"
      />
      {validMessage && <p className={styles.validMessage}>{validMessage}</p>}
    </div>
  );
}

export default EmailInput;
