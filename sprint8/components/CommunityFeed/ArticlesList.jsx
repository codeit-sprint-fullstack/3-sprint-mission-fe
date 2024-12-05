import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/CommunityFeed/Articles.module.css";
import ArticleSearchInput from "@/components/CommunityFeed/ArticleSearchInput";
import DropdownList from "@/components/CommunityFeed/DropdownList"

function ArticlesList() {
  const ArticlesArr = [1, 2, 3, 4]

  return (
    <div style={{
      width: "1200px",
    }}>
      <div className={styles.searchSortBox}>
        <ArticleSearchInput />
        <DropdownList />
      </div>
      <div className={styles.articlesListBody}>
        {ArticlesArr.map((article, index) => {
          return (
            <Link
              key={index}
              href={`/ArticleDetail/${article.id}`}
              passHref
            >
              <div className={styles.article}>
                <div className={styles.articleContent}>
                  <h2 className={styles.articleTitle}>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</h2>
                  <Image
                    src="/images/default/FE_default_Img.png"
                    alt="베스트 게시글 이미지"
                    width={72}
                    height={72}
                  />
                </div>
                <div className={styles.articleInfoBox}>
                  <div className={styles.articleInfoLeft}>
                    <Image
                      src="/images/icons/ic_profile.png"
                      alt="프로필 이미지"
                      width={24}
                      height={24}
                    />
                    <span className={styles.nickname}>총명한판다</span>
                    <div className={styles.articleCreateDate}>2024. 12. 16</div>
                  </div>
                  <div className={styles.articleInfoRight}>
                    <Image
                      src="/images/icons/heart.png"
                      alt="하트 이미지"
                      width={13.75}
                      height={13}
                    />
                    <div className={styles.articleLikeNum}>9999+</div>
                  </div>
                </div>
              </div>
            </Link >
          )
        })}
      </div>
    </div>
  )
}

export default ArticlesList;
