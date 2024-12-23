import styles from "@/styles/loginPage.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import codeitAxios from "@/lib/codeitAxios";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });
  const [isFailed, setIsFailed] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isBtDisabled =
    !form.email.trim() ||
    !form.nickname.trim() ||
    !form.password.trim() ||
    !form.passwordConfirmation.trim();

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.passwordConfirmation) {
      setModalErrorMessage("비밀번호가 일치하지 않습니다.");
    }
    const { email, nickname, password, passwordConfirmation } = form;
    try {
      const res = await codeitAxios.post("/auth/signUp", {
        email,
        nickname,
        password,
        passwordConfirmation,
      });
      alert("회원가입 성공! 로그인 페이지로 이동합니다");
      console.log(res.data);
      router.push("/login");
    } catch (err) {
      if (err.response.data) {
        const errorMessage = err.response.data.message; // 서버에서 보내준 에러 message
        setModalErrorMessage(errorMessage);
      } else {
        console.error("에러 발생:", err);
        alert("예기치 못한 에러가 발생했습니다. 다시 시도해주세요.");
      }
      setIsFailed(true);
      setIsModalOpen(true);
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.loginContainer}>
          <div className={styles.pandaLogo}>
            {/* 홈페이지로 이동 */}
            <Link href="/">
              <div className={styles.logoImgBox}>
                <Image
                  fill
                  src="/imgs/panda-market-logo.png"
                  alt="pandaMarketLogo"
                />
              </div>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className={styles.formStyle}>
            <div>
              <h1 className={styles.boldText}>이메일</h1>
              <input
                className={`${styles.inputStyle} ${
                  isFailed ? styles.errorBorder : ""
                }`}
                name="email"
                value={form.email}
                type="email"
                onChange={handleChange}
                placeholder="이메일을 입력해주세요"
              />
              {isFailed ? (
                <span className={styles.errorText}>잘못된 이메일입니다.</span>
              ) : (
                ""
              )}
            </div>

            <div>
              <h1 className={styles.boldText}>닉네임</h1>
              <input
                className={`${styles.inputStyle} ${
                  isFailed ? styles.errorBorder : ""
                }`}
                name="nickname"
                value={form.nickname}
                type="text"
                onChange={handleChange}
                placeholder="닉네임을 입력해주세요"
              />
            </div>

            <div>
              <h1 className={styles.boldText}>비밀번호</h1>
              <div className={styles.inputEye}>
                <input
                  className={`${styles.inputStyle} ${
                    isFailed ? styles.errorBorder : ""
                  }`}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
                <i
                  className={styles.eyeIcon}
                  class="fa fa-solid fa-eye-slash"
                ></i>
                {isFailed ? (
                  <span className={styles.errorText}>
                    비밀번호를 8자 이상 입력해주세요.
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div>
              <h1 className={styles.boldText}>비밀번호 확인</h1>
              <div className={styles.inputEye}>
                <input
                  className={`${styles.inputStyle} ${
                    isFailed ? styles.errorBorder : ""
                  }`}
                  name="passwordConfirmation"
                  value={form.passwordConfirmation}
                  onChange={handleChange}
                  type="password"
                  placeholder="비밀번호를 다시 입력해주세요"
                />
                <i
                  className={styles.eyeIcon}
                  class="fa fa-solid fa-eye-slash"
                ></i>
                {isFailed ? (
                  <span className={styles.errorText}>
                    비밀번호가 일치하지 않습니다
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <button
              disabled={isBtDisabled}
              className={`${styles.loginBt} ${styles.loginFont} ${
                !isBtDisabled ? styles.loginBtActive : ""
              } `}
            >
              회원가입
            </button>
          </form>
          <section className={styles.simpleLogin}>
            <div className={styles.simpleLoginCon}>
              <div className={styles.simpleLogoText}>간편 로그인하기</div>
              <div className={styles.linkImgs}>
                <Link href="https://www.google.com/" target="_blank">
                  <div className={styles.smallImgBox}>
                    <Image fill src="/imgs/Component 2@2x.png" alt="google" />
                  </div>
                </Link>
                <Link href="https://www.kakaocorp.com/page/" target="_blank">
                  <div className={styles.smallImgBox}>
                    <Image fill src="/imgs/Component 3@2x.png" alt="kakao" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section className={styles.signUpQuestion}>
            이미 회원이신가요?
            <Link href="/login"> 로그인</Link>
          </section>
        </div>
      </div>

      {isModalOpen ? (
        <div className={styles.modal}>
          <div className={styles.modalPopup}>
            <div className={styles.modalContents}>
              <div className={styles.modalText}>{modalErrorMessage}</div>
              <button
                onClick={handleModalClose}
                className={`${styles.modalBt} ${styles.smallBt}`}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
