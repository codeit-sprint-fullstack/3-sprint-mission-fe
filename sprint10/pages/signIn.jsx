import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pages/Auth.module.css";
import SimpleLoginBox from "@/components/shared/SimpleLoginBox";
import EmailInput from "@/components/shared/auth/EmailInput";
import PasswordInput from "@/components/shared/auth/PasswordInput";
import NicknameInput from "@/components/shared/auth/NicknameInput";
import CheckPasswordInput from "@/components/shared/auth/CheckPasswordInput";


function SignIn() {
  const [passwordValue, setPasswordValue] = useState("");
  const [values, setValues] = useState({
    email: "",
    nickname: "",
    password: "",
  });


  const handleRegister = () => {
    if (
      values.email !== "" &&
      values.nickname !== "" &&
      values.password !== ""
    ) {
      // Post SignUp
      console.log(values);
    };
  };

  return (
    <div className={styles.signInContainerBox}>
      <div class={styles.signInContainer}>
        <div class={styles.pandaLogoImgBox}>
          <Link href="/">
            <div
              className={styles.pandaLogoImg}
              style={{
                position: "relative",
              }}
            >
              <Image
                src="/images/logo/panda-market-logo.png" alt="판다마켓 로고"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
        </div>
        <EmailInput setValues={setValues} />

        <NicknameInput setValues={setValues} />

        <PasswordInput
          setPasswordValue={setPasswordValue}
        />

        <CheckPasswordInput
          setValues={setValues}
          passwordValue={passwordValue}
        />

        <button
          onClick={handleRegister}
          class={`
            ${styles.registerButton}
            ${values.email !== "" && values.password !== "" ?
              styles.activeButton : null
            }
            `}>  
          회원가입
        </button>

        <SimpleLoginBox />

        <div class={styles.signIncontainer}>
          <div class={styles.signInBox}>
            <h3 className={styles.signInTitle}>
              이미 회원이신가요?
            </h3>
            <Link href="/login">
              <h3 className={styles.anotherLink}>로그인</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
