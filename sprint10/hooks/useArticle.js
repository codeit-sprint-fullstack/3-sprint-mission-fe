import { useState, useEffect } from "react";
import { getArticles } from "@/lib/pandaMarketApiService";

export default function useArticle(limit = 4, order = 'recent') {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesList = await getArticles(0, limit, order);
        setArticles(articlesList);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return articles;
}