import styles from "@/components/Login/SimpleLogin.module.css"
import Link from "next/link"
import Image from "next/image"

export default function SimpleLogin() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.simpleLoginContainer}>
        <h3>간편 로그인하기</h3>
        <div className={styles.socialLinkContainer}>
          <Link href="https://www.google.com" target="_blank">
            <Image
              width={42} height={42}
              src="/images/google.png"
              alt="Google Login"
            />
          </Link>
          <Link href="https://www.kakaocorp.com/page/" target="_blank">
            <Image  
              width={42} height={42}
              src="/images/kakaotalk.png"
              alt="Kakao Login"
            />
          </Link>
        </div>
      </div>
      <div className={styles.moveToLogin}>
        판다마켓이 처음이신가요?
        <Link href="/signin" className={styles.signin}> 회원가입</Link>
      </div>
    </div>
  )
}