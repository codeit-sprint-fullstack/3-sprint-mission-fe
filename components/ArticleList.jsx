import { useState, useEffect } from "react";
import { articleAPI } from "@/lib/axios";
import Article from "./Article";
import Link from "next/link";
import styles from "./ArticleList.module.css";

function ArticleList({ orderBy = "recent", keyword = "" }) {
  const [articles, setArticles] = useState([]); // 게시글 목록
  const [loading, setLoading] = useState(true); // 첫 로딩 상태
  const [loadingMore, setLoadingMore] = useState(false); // 더보기 로딩 상태
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const [totalCount, setTotalCount] = useState(0); // 전체 게시글 수

  const pageSize = 3; // 한 페이지에 표시할 게시글 수

  // 게시글 가져오기
  const fetchArticles = async (isLoadMore = false) => {
    if (!isLoadMore) setLoading(true); // 첫 로딩일 경우만 로딩 상태 설정
    else setLoadingMore(true); // "더보기" 클릭 시 로딩 상태 설정

    try {
      const response = await articleAPI.getArticles({
        page,
        pageSize,
        orderBy,
        keyword,
      });
      const newArticles = response.data.list;
      const total = response.data.totalCount;

      // 기존 데이터에 새 데이터 추가 또는 덮어쓰기
      setArticles((prevArticles) =>
        isLoadMore ? [...prevArticles, ...newArticles] : newArticles
      );
      setTotalCount(total); // 전체 게시글 수 업데이트
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      if (!isLoadMore) setLoading(false); // 첫 로딩 상태 해제
      else setLoadingMore(false); // "더보기" 로딩 상태 해제
    }
  };

  // 검색 키워드 또는 정렬 방식 변경 시 초기화
  useEffect(() => {
    setPage(1); // 페이지 번호 초기화
    fetchArticles(false); // 새로운 조건으로 데이터 가져오기
  }, [keyword, orderBy]);

  // 더보기 클릭 핸들러
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // 페이지 번호 증가
  };

  useEffect(() => {
    if (page > 1) {
      fetchArticles(true); // 추가 데이터 가져오기
    }
  }, [page]);

  // 더보기 버튼 표시 여부
  const hasMore = page * pageSize < totalCount;

  if (loading) {
    return <div className={styles.noResult}>로딩중...</div>;
  }

  if (articles.length === 0) {
    return <div className={styles.noResult}>검색 결과가 없습니다.</div>;
  }

  return (
    <div className={styles.articleList}>
      {articles.map((article) => (
        <Link href={`/article/${article.id}`} key={article.id}>
          <Article article={article} />
        </Link>
      ))}
      {hasMore && ( // 더 가져올 데이터가 있으면 "더보기" 버튼 표시
        <div
          className={styles.loadMoreButton}
          onClick={handleLoadMore}
          disabled={loadingMore}
        >
          {loadingMore ? "불러오는 중..." : "더보기"}
        </div>
      )}
    </div>
  );
}

export default ArticleList;
