import { useState } from "react";
import styles from "@/styles/pages/Auth.module.css";

function CheckPasswordInput({ setValues, passwordValue }) {
  const [value, setValue] = useState('');
  const [validMessage, setValidMessage] = useState('');
  const [checkPasswordVisible, setCheckPasswordVisible] = useState(false);

  const handleOnBlur = () => {
    if (value === '') {
      setValidMessage('비밀번호를 다시 한 번 입력해주세요');
      setTimeout(() => {
        setValidMessage('');
      }, 2000);
    } else if (value !== passwordValue) {
      setValidMessage('비밀번호가 일치하지 않습니다');
      setValues((prev) => ({
        ...prev,
        password: ''
      }))
    } else if (value === passwordValue) {
      setValues((prev) => ({
        ...prev,
        password: value
      }))
      setValidMessage('');
    } else {
      setValidMessage('');
    }
  }

  return (
    <div class={styles.inputContentBox}>
      <h1 class={styles.titleText}>비밀번호 확인</h1>
      <label for="checkPasswordInput"></label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleOnBlur}
        class={validMessage ?
          styles.inputBoxValid :
          styles.inputBox}
        id="checkPasswordInput"
        type={checkPasswordVisible ?
          "text" :
          "password"}
        name="password"
        placeholder="비밀번호를 다시 한 번 입력해주세요" />
      <button
        onClick={() => {
          setCheckPasswordVisible(!checkPasswordVisible);
        }}
        class={checkPasswordVisible ?
          styles.inputPasswordVisibleIcon :
          styles.inputPasswordInvisibleIcon}
        style={validMessage ?
          { bottom: "32px" } : null}
      />
      {validMessage && <div className={styles.validMessage}>{validMessage}</div>}
    </div>
  )
}

export default CheckPasswordInput;
