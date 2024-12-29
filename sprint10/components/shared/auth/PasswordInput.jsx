import styles from "@/styles/pages/Auth.module.css";
import { useState } from "react";

function PasswordInput({ setValues = () => { }, setPasswordValue = () => { } }) {
  const [value, setValue] = useState('');
  const [validMessage, setValidMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleOnBlur = () => {
    if (value === '') {
      setValidMessage('비밀번호를 입력해주세요');
      setTimeout(() => {
        setValidMessage('');
      }, 2000);
    } else {
      setValues((prev) => ({
        ...prev,
        password: value
      }))
      setValidMessage('');
    }
  }

  return (
    <div class={styles.inputContentBox}>
      <h1 class={styles.titleText}>비밀번호</h1>
      <label for="passwordInuput"></label>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setPasswordValue(e.target.value);
        }}
        onBlur={handleOnBlur}
        class={validMessage ?
          styles.inputBoxValid :
          styles.inputBox}
        id="box1"
        type={passwordVisible ? "passwordInuput" : "password"}
        name="password"
        placeholder="비밀번호를 입력해주세요" />
      <button
        onClick={() => {
          setPasswordVisible(!passwordVisible);
        }}
        class={passwordVisible ?
          styles.inputPasswordVisibleIcon :
          styles.inputPasswordInvisibleIcon}
        style={validMessage ?
          { bottom: "32px" } : null}
      />
      {validMessage && <p className={styles.validMessage}>{validMessage}</p>}
    </div>
  )
}

export default PasswordInput;
