import styles from "@/components/Post.module.css"
import Dropdown from "@/components/DropdownBox"
import Link from "next/link";

export default function Post() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h1 className={styles.boardText}> 게시글</h1>
        <Link href ="/writePost">
        <button className={styles.postBtn}>글쓰기</button>
        </Link>
      </div>
      <div className={styles.inputContainer}>
        <input placeholder="검색할 상품을 입력해주세요" className={styles.searchInput}/>
        <Dropdown/>
      </div>
    </div>
  )
}