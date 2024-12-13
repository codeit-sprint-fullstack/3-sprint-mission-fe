import { getArticle, getArticleComments } from '@/services/api/article';
import { ParamsProps } from '@/lib/types/paramsProps.types';
import ReturnButton from '@/components/articlePage/returnButton/returnButton';
import ArticleClient from '@/components/articlePage/articleClient';
import CommentListClient from '@/components/articlePage/comment/commentListClient';

export default async function Page({ params }: ParamsProps) {
  const article = await getArticle(params.id);
  const comments = await getArticleComments(params.id);

  return (
    <article className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <ArticleClient initialData={article} />
      <CommentListClient
        articleId={article.id}
        initialData={comments}
      />
      <ReturnButton />
    </article>
  );
}
