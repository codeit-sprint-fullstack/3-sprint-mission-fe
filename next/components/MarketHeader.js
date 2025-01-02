import styles from './MarketHeader.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MarketHeader() {
  return(
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
          <div>
            <Link href="/">
              <Image 
              width={153} 
              height={53} 
              src="/images/logo.png"  
              alt="로고이미지"/>
            </Link>          
          </div>
          <Link href="/board" 
          className={styles.boardText}>
            자유게시판
          </Link>
          <Link href="/market" 
          className={styles.marketText}>
            중고마켓
          </Link>
        </div>
        <Link href="/login">
          <button className={styles.loginBtn}>
            로그인
          </button>
        </Link>
      </div>
    </>
  )
}