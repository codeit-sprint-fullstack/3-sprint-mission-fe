import styles from "@/styles/pages/CommunityFeed.module.css"

function CommunityFeed() {
  return (
    <div className="communityFeedBody">
      <h1 className="communityFeedTitle">베스트 게시글</h1>
      {/* 베스트 게시글 컴포넌트 */}
      <div className="articlePostHeader">
        <h1 className="communityFeedTitle">게시글</h1>
        <button className="toArticlePostButton">글쓰기</button>
      </div>
      {/* 게시글 컴포넌트 */}
    </div>
  )
}

export default CommunityFeed;