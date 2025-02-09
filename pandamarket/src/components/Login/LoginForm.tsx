import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "@/lib/axios";
import styles from "@/components/Login/LoginForm.module.css";
import useValidate from "@/hooks/useValidate";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

type ValidationValues = Record<string, string>;

export default function LoginForm(){
  const router = useRouter();
  const { values, setValues, errors, validate } = useValidate({
    email: "",
    password: "",
    nickname: ""
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const { accessToken, setAccessToken } = useAuth();

  useEffect(() => {
    if (accessToken) {
      router.push("/items");
    }
  }, [accessToken, router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value as ValidationValues[typeof name], // 타입 변환 추가
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      setModalMessage("로그인에 실패했습니다.");
      setIsModalVisible(true);
      return;
    }

    const { email, password } = values;

    try {
      const response = await axios.post(
        "/auth/signIn",
        { email, password },
        {
          withCredentials: true,
        }
      );

      const { accessToken: token } = response.data;
      setAccessToken(token);

      setModalMessage("로그인에 성공했습니다!");
      setIsModalVisible(true);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "로그인에 실패했습니다. 다시 시도해주세요.";
      setModalMessage(errorMessage);
      setIsModalVisible(true);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleModalAction = () => {
    setIsModalVisible(false);
    setModalMessage("");
    if (modalMessage.includes("성공")) {
      router.push("/items");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div>
        <Link href="/main" className={styles.logoLink}>
          <Image
            width={396}
            height={132}
            src="/images/panda.png"
            alt="Panda Market Logo"
          />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputSection}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해 주세요"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            style={{
              border: errors.email ? "1px solid #f74747" : "none",
            }}
            required
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
        <div className={styles.inputSection}>
          <label htmlFor="password">비밀번호</label>
          <div className={styles.inputWrapper}>
            <input
              id="password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="비밀번호를 입력해 주세요"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              style={{
                border: errors.password ? "1px solid #f74747" : "none",
              }}
              required
            />
            <button
              className={styles.passwordToggleBtn}
              type="button"
              aria-label="비밀번호 보기"
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
          {errors.password && <div className={styles.error}>{errors.password}</div>}
        </div>
        <button type="submit" className={styles.loginBtn}>
          로그인
        </button>
      </form>

      {isModalVisible && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <p className={styles.modalText}>{modalMessage}</p>
            <button onClick={handleModalAction} className={styles.closeModalBtn}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};