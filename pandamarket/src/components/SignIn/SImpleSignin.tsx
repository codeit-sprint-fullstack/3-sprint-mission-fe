import styles from "@/components/SignIn/SimpleSignin.module.css"
import Link from "next/link";
import Image from "next/image";

export default function SimpleSignin() {
  return (
    <div className={styles.signinContainer}>
      <div className={styles.simpleSigninContainer}>
        <h3>간편 로그인하기</h3>
        <div className={styles.linkContainer}>
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
          이미 회원이신가요?
          <Link href="/login" className={styles.login}>로그인</Link>
        </div>
    </div>
  )
}