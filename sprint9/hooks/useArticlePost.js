import { getArticles, postArticle } from "@/lib/pandaMarketApiService";
import { useRouter } from "next/router";

function useArticlePost(title, content, setTitle, setContent) {
  const router = useRouter();

  const postHandler = async () => {
    try {
      if (title !== "" && content !== "") {
        const response = await postArticle(title, content);

        setTitle('');
        setContent('');
      }
      // 게시물 등록하면서 이동위해 최신 게시글 id를 받아오기
      const toMoveArticle = await getArticles(0, 1, 'recent');
      const toMoveArticleID = toMoveArticle.article[0].id;

      router.push(`/article-detail/${toMoveArticleID}`);
    } catch (error) {
      console.error("Error posting article:", error);
    }
  }
  return {postHandler}
}

export default useArticlePost;