import styles from "@/styles/loginPage.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import codeitAxios from "@/lib/codeitAxios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isFailed, setIsFailed] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isBtDisabled = !form.email.trim() || !form.password.trim();

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = form;
    try {
      const res = await codeitAxios.post("/auth/signIn", {
        email,
        password,
      });
      // 성공 시 로컬 스토리지에 토큰 저장장
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      //저장 후 중고마켓 이동
      const username = res.data?.user?.nickname;
      alert(`안녕하세요 ${username}님! 중고마켓으로 이동합니다`);
      console.log(res.data.accessToken);
      router.push("/items");
    } catch (err) {
      const errorMessage = err.response?.data?.message;
      if (errorMessage) {
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
                } `}
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="이메일을 입력해주세요"
              />
              {isFailed ? (
                <span className={styles.errorText}>잘못된 이메일입니다.</span>
              ) : (
                ""
              )}
            </div>
            <div>
              <h1 className={styles.boldText}>비밀번호</h1>
              <div className={styles.inputEye}>
                <input
                  className={`${styles.inputStyle} ${
                    isFailed ? styles.errorBorder : ""
                  } `}
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

            <button
              disabled={isBtDisabled}
              className={`${styles.loginBt} ${styles.loginFont} ${
                !isBtDisabled ? styles.loginBtActive : ""
              } `}
            >
              로그인
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
            판다 마켓이 처음이신가요?
            <Link href="/signin"> 회원가입</Link>
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
