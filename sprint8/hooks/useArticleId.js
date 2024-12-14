import { useState, useEffect } from "react";
import { getArticleId } from "@/lib/pandaMarketApiService";

export default function useArticleId(articleId) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    if (!articleId) return;
    const fetchArticle = async () => {
      try {
        const articleDetail = await getArticleId(articleId);
        if (!articleDetail) return;
        setArticle(articleDetail);
        console.log("articleDetail55 : ", articleDetail);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [articleId]);
  
  console.log("article5675 : ", article);
  return article;
}
