import styles from "@/components/footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div>@codeit - 2024</div>
      <div className={styles.footermenu}>
        <Link href="/privacy" className={styles.footertext}>Privacy Policy</Link>
        <Link href="/faq"className={styles.footertext}>FAQ</Link>
      </div>
      <div className={styles.sns}>
        <Link href="https://www.facebook.com/">
          <Image 
          src="/images/facebook.png"
          width={20}
          height={20}
          alt="facebook logo"
          />
        </Link>
        <Link href="https://twitter.com/">
          <Image 
          src="/images/twitter.png"
          width={20}
          height={20}
          alt="twitter logo"
          />
        </Link>
        <Link href="https://youtube.com/">
          <Image 
          src="/images/youtube.png"
          width={20}
          height={20}
          alt="youtube logo"
          />
        </Link>
        <Link href="https://instagram.com/">
          <Image 
          src="/images/instagram.png"
          width={20}
          height={20}
          alt="instagram logo"
          />
        </Link>
      </div>
    </footer>
  )
}