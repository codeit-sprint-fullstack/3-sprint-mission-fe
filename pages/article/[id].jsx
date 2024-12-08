import { useRouter } from "next/router";
import { articleAPI } from "@/lib/axios";
import styles from "./[id].module.css";

// 서버에서 데이터 가져오기
export async function getServerSideProps(context) {
  const { id } = context.params; // URL에서 ID 가져오기
  try {
    const response = await articleAPI.getArticleById(id);

    if (!response.data) {
      return {
        notFound: true, // 404로 리디렉션
      };
    }

    return {
      props: {
        article: response.data, // 데이터 전달
      },
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      notFound: true,
    };
  }
}

export default function ArticleDetail({ article, error }) {
  const router = useRouter();

  // 로딩 상태 처리
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // 에러 처리
  if (error) {
    return <div>오류가 발생했습니다: {error}</div>;
  }

  // 상세 데이터 렌더링
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <button onClick={() => router.push("/community")}>목록으로</button>
    </div>
  );
}
