import AllArticles from "@/components/articles/AllArticles";
import BestArticles from "@/components/articles/BestArticles";

const ArticlePage = () => {
  return (
    <article className="p-4 md:p-6">
      <div className="max-w-container mx-auto min-w-[325px]">
        <BestArticles />
        <AllArticles />
      </div>
    </article>
  );
};

export default ArticlePage;
