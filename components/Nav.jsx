import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userAPI } from "../lib/axios";
import styles from "./Nav.module.css";

function Nav() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [userProfile, setUserProfile] = useState(null); // 유저 정보 저장

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰 확인
    if (token) {
      setIsLoggedIn(true); // 로그인 상태로 설정

      // userAPI.getMyInfo 호출
      userAPI
        .getMyInfo()
        .then((response) => {
          setUserProfile(response.data); // 유저 정보 저장
        })
        .catch((error) => {
          // console.error("유저 정보 불러오기 실패:", error);
          if (error.response?.status === 401) {
            // 토큰 만료 또는 인증 실패 처리
            localStorage.removeItem("accessToken"); // 토큰 제거
            setIsLoggedIn(false); // 유효하지 않은 토큰일 경우 로그아웃 처리
          }
        });
    }
  }, []);

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.gnb}>
          <Link href="/">
            <div className={styles.logo}>
              <img src="/logo.png" alt="로고" className={styles.logoImg} />
              <div className={styles.logoTitle}>판다마켓</div>
            </div>
          </Link>
          <ul className={styles.ul}>
            <Link href="/community">
              <li
                className={`${styles.li} ${
                  router.pathname === "/community" ? styles.active : ""
                }`}
              >
                자유게시판
              </li>
            </Link>
            <Link href="/market">
              <li
                className={`${styles.li} ${
                  router.pathname === "/market" ? styles.active : ""
                }`}
              >
                중고마켓
              </li>
            </Link>
          </ul>
          {isLoggedIn && userProfile ? (
            <div className={styles.userProfile}>
              <img
                src={userProfile.image || "/user_profile.png"}
                alt="유저 프로필"
                className={styles.avatar}
              />
              {/* <div className={styles.nickName}>{userProfile.nickname}</div> */}
            </div>
          ) : (
            <Link href="/login">
              <div className={styles.login}>로그인</div>
            </Link>
          )}
        </div>
      </div>
      <div style={{ height: "70px" }}></div>
      {/* nav 뒤 채우기 */}
    </>
  );
}

export default Nav;
