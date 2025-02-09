import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";
import styles from "@/components/Signin/SigninFrom.module.css";
import useValidate from "@/hooks/useValidate";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface SignUpValues {
  email: string;
  nickname: string;  // 타입을 string으로 제한
  password: string;
  passwordConfirmation: string;
}

export default function SigninForm() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isRePasswordVisible, setIsRePasswordVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const { values, setValues, errors, validate } = useValidate({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });

  const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true); // 클라이언트에서만 실행되도록 상태 업데이트
  }, []);

  const signUpMutation = useMutation({
    mutationFn: async (data: SignUpValues) => {
      const response = await axios.post(
        "/auth/signUp",
        data,
        { withCredentials: true }
      );
      return response.data;
    },
    onSuccess: (data: { token?: string }) => {
      if (data?.token) {
        if (isClient) {
          localStorage.setItem("authToken", data.token);
        }
        setModalMessage("회원가입이 성공적으로 완료되었습니다!");
        setIsModalVisible(true);
        setRedirectToLogin(true);
      }
    },
    onError: (error: any) => {
      if (error.response && error.response.data.message) {
        const message = error.response.data.message;
        if (message.includes("email")) {
          setModalMessage("사용 중인 이메일입니다.");
        } else if (message.includes("nickname")) {
          setModalMessage("사용 중인 닉네임입니다.");
        } else {
          setModalMessage("회원가입에 실패했습니다.");
        }
      } else {
        setModalMessage("알 수 없는 오류가 발생했습니다.");
      }
      setIsModalVisible(true);
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setIsRePasswordVisible(!isRePasswordVisible);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalMessage("");
    if (redirectToLogin) {
      router.push("/login");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const { email, nickname, password, passwordConfirmation } = values;

    if (password !== passwordConfirmation) {
      setModalMessage("비밀번호가 일치하지 않습니다.");
      setIsModalVisible(true);
      return;
    }

    signUpMutation.mutate({ email, nickname, password, passwordConfirmation });
  };

  if (!isClient) {
    // 서버 렌더링 중에는 빈 상태를 반환하여 불일치를 방지
    return null;
  }

  return (
    <div className={styles.signinContainer}>
      <div>
        <Link href="/main" className={styles.logoLink}>
          <Image
            width={396}
            height={132}
            src="/images/panda.png"
            alt="Panda Market Logo"
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputForm}>
            <label htmlFor="email">이메일</label>
            <input
              name="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
              value={values.email}
              onChange={handleChange}
              style={{
                border: errors.email ? "1px solid #f74747" : "none",
              }}
              required
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
          <div className={styles.inputForm}>
            <label htmlFor="nickname">닉네임</label>
            <input
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              value={values.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputForm}>
            <label htmlFor="password">비밀번호</label>
            <div className={styles.inputWrapper}>
              <input
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="비밀번호를 입력해 주세요"
                value={values.password}
                onChange={handleChange}
                style={{
                  border: errors.password ? "1px solid #f74747" : "none",
                }}
                required
              />
              <button
                type="button"
                aria-label="비밀번호 보기"
                className={styles.toggleBtn}
                onClick={togglePasswordVisibility}
              >
                <Image
                  width={24}
                  height={24}
                  src={
                    isPasswordVisible
                      ? "/images/btn_visibility_on.png"
                      : "/images/btn_visibility_off.png"
                  }
                  alt="비밀번호 숨김 상태 아이콘"
                />
              </button>
            </div>
            {errors.password && (
              <div className={styles.error}>{errors.password}</div>
            )}
          </div>
          <div className={styles.inputForm}>
            <label htmlFor="passwordConfirmation">비밀번호 확인</label>
            <div className={styles.inputWrapper}>
              <input
                name="passwordConfirmation"
                type={isRePasswordVisible ? "text" : "password"}
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
                value={values.passwordConfirmation}
                onChange={handleChange}
                style={{
                  border: errors.passwordConfirmation
                    ? "1px solid #f74747"
                    : "none",
                }}
                required
              />
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={toggleRePasswordVisibility}
              >
                <Image
                  width={24}
                  height={24}
                  src={
                    isRePasswordVisible
                      ? "/images/btn_visibility_on.png"
                      : "/images/btn_visibility_off.png"
                  }
                  alt="비밀번호 숨김 상태 아이콘"
                />
              </button>
            </div>
            {errors.passwordConfirmation && (
              <div className={styles.error}>
                {errors.passwordConfirmation}
              </div>
            )}
          </div>
          <button
            type="submit"
            className={styles.signinBtn}
            disabled={signUpMutation.isPending}
          >
            {signUpMutation.isPending ? "처리 중..." : "회원가입"}
          </button>
        </form>

        {isModalVisible && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <p className={styles.modalText}>{modalMessage}</p>
              <button onClick={closeModal} className={styles.closeModalBtn}>
                확인
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
