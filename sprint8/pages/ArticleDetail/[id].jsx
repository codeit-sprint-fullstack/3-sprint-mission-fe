import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/pages/ArticleDetail.module.css";
import ArticleInfo from "@/components/ArticleDetail/ArticleInfo";
import CommentPost from "@/components/ArticleDetail/CommentPost";
import Comments from "@/components/ArticleDetail/Comments";
import NoneComments from "@/components/ArticleDetail/NoneComments";

function ArticleDetail() {
  const testArr = [1, 2, 3];

  return (
    <div className={styles.ArticleDetailBox}>
      <ArticleInfo />
      <CommentPost />
      {testArr.map((comment, index) => {
        return (
          <Comments key={index}/>
        )
      }) }
      {/* <NoneComments /> */}
      <Link href="/CommunityFeed">
        <button className={styles.toCommunityFeedButton}>
          목록으로 돌아가기
          <div className={styles.toCommunityFeedButtonImage}>
            <Image
              src="/images/icons/backArrow.png"
              alt="목록으로 돌아가기 이미지"
              width={19}
              height={16}
            />
          </div>
        </button>
      </Link>
    </div>
  )
}

export default ArticleDetail;