import styles from "@/styles/components/CommunityFeed/ArticleSearchInput.module.css"

function ArticleSearchInput() {
  return (
    <input 
      className={styles.articleSearchInput}
      type="text"
      placeholder="검색할 상품을 입력해주세요"
    />
    )
}

export default ArticleSearchInput;
