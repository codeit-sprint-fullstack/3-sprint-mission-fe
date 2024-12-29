import { useState, useEffect } from "react";
import { getArticleId } from "@/lib/pandaMarketApiService";

export default function useArticleId(articleId) {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!articleId) return;

    const fetchArticle = async () => {
      setIsLoading(true); 
      setHasError(false);

      try {
        const articleDetail = await getArticleId(articleId);
        if (!articleDetail) return;
        setArticle(articleDetail);
      } catch (error) {
        console.log("Error fetching article:");
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  return { article, isLoading, hasError };
}
