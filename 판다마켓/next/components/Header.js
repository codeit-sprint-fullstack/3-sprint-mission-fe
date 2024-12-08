import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// 활성화 상태에 따라 스타일 변경
const activeStyle = { color: "#3692FF", fontWeight: "700" };
const defaultColor = { color: "black" };

export function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;
  // console.log("무임이거", href);

  return (
    <Link href={href}>
      <li style={isActive ? activeStyle : defaultColor}>{children}</li>
    </Link>
  );
}

export function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header_inner}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src="/img/logo.png" // public 폴더 내 이미지 경로
                alt="Logo Image"
                width={150} // 고정 너비
                height={50} // 고정 높이
              />
            </div>
          </Link>
          <ul className={styles.nav_container}>
            <NavLink href="/freeboard/List" children="자유게시판"></NavLink>

            <NavLink href="/usedmarket/PostList" children="중고마켓"></NavLink>
          </ul>
          <button className={styles.login}>로그인</button>
        </div>
      </div>
    </div>
  );
}
