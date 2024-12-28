import styles from "@/styles/components/shared/SimpleLoginBox.module.css";
import Image from "next/image";
import Link from "next/link";

function SimpleLoginBox() {
  
  return (
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
            src="/Images/social/google-logo.png"
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
  )
}

export default SimpleLoginBox;
