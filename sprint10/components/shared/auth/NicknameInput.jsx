import { useEffect, useState } from "react";
import styles from "@/styles/pages/Auth.module.css";

function NicknameInput({setValues}) {
  const [value, setValue] = useState('');
  const [onValidBox, setOnValidBox] = useState(false);

  const handleOnBlur = () => {
    if (value === '') {
      setValues((prev) => ({
        ...prev,
        nickname: ''
      }))
      setOnValidBox(true);
      setTimeout(() => {
        setOnValidBox(false);
      }, 2000);
    } else {
      setValues((prev) => ({
        ...prev,
        nickname: value
      }))
      setOnValidBox(false);
    }
  }

  return (
    <div class={styles.inputContentBox}>
      <h1 class={styles.titleText}>닉네임</h1>
      <label for="nicknameInput"></label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleOnBlur}
        class={onValidBox ?
          styles.inputBoxValid :
          styles.inputBox}
        id="nicknameInput"
        type="text"
        name="nickname"
        placeholder="닉네임을 입력해주세요" />
      {onValidBox &&
        <p className={styles.validMessage}>
          닉네임을 입력해주세요
        </p>}
    </div>
  )
}

export default NicknameInput;
