import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/pages/Auth.module.css";
import SimpleLoginBox from "@/components/shared/SimpleLoginBox";
import EmailInput from "@/components/shared/auth/EmailInput";
import PasswordInput from "@/components/shared/auth/PasswordInput";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleRegister = () => {
    if (values.email !== "" && values.password !== "") {
      // Post Login
      console.log(values);
    };
  };


  return (
    <div className={styles.loginContainerBox}>
      <div class={styles.loginContainer}>
        <div class={styles.pandaLogoImgBox}>
          <Link href="/">
            <div
              className={styles.pandaLogoImg}
              style={{
                position: "relative",
              }}
            >
              <Image
                src="/images/logo/panda-market-logo.png"
                alt="판다마켓 로고"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
        </div>

        <EmailInput setValues={setValues} />
        <PasswordInput setValues={setValues} />

        <button
          onClick={handleRegister}
          class={`
            ${styles.registerButton}
            ${values.email !== "" && values.password !== "" ?
              styles.activeButton : null
            }
            `}>
          로그인
        </button>

        <SimpleLoginBox />

        <div class={styles.signIncontainer}>
          <div class={styles.signInBox}>
            <h3 className={styles.signInTitle}>
              판다마켓이 처음이신가요?
            </h3>
            <Link href="/signIn">
              <h3 className={styles.anotherLink}>
                회원가입
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;