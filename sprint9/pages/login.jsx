import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/pages/login.module.css";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
                src="/images/logo/panda-market-logo.png" alt="판다마켓 로고"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
        </div>
        <div class={styles.inputContentBox}>
          <h1 class={styles.titleText}>이메일</h1>
          <label for="emailInput"></label>
          <input class={styles.inputBox} id="emailInput" type="email" name="email" placeholder="이메일을 입력해주세요" />
        </div>

        <div class={styles.inputContentBox}>
          <h1 class={styles.titleText}>비밀번호</h1>
          <label for="passwordInuput"></label>
          <input
            class={styles.inputBox}
            id="box1" type={passwordVisible ? "passwordInuput" : "password"} name="password" placeholder="비밀번호를 입력해주세요" />
          <button
            onClick={() => {
              setPasswordVisible(!passwordVisible);
            }}
            class={passwordVisible ? styles.inputPasswordVisibleIcon : styles.inputPasswordInvisibleIcon}
          >

          </button>
        </div>

        <button class={styles.loginButton}>
          로그인
        </button>

        <div class={styles.simpleLoginBox}>
          <h2 class={styles.simpleLogintTitle}>간편 로그인하기</h2>
          <div class={styles.socialLogoImgBox}>

            <div
              className={styles.socialLogoImg}
              style={{
                position: "relative",
              }}>
              <Link href="https://www.google.com">
                <Image
                  src="/images/social/google-logo.png"
                  alt="구글 아이콘 이미지"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>

            <div
              className={styles.socialLogoImg}
              style={{
                position: "relative",
              }}>
              <Link href="https://www.kakaocorp.com/page">
                <Image
                  src="/images/social/kakao-logo.png"
                  alt="카카오 아이콘 이미지"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>

        <div class={styles.signIncontainer}>
          <div class={styles.signInBox}>
            <h3 className={styles.signInTitle}>
              판다마켓이 처음이신가요?
            </h3>
            <Link href="/signIn">
              <h3 className={styles.signInLink}>회원가입</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;