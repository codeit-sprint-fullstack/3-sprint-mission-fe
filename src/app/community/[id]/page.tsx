import ArticleHeader from '@/components/community/articlePage/articleHeader';
import CommentForm from '@/components/community/articlePage/commentForm';
import { getArticle, getArticleComments } from '@/services/api/article';
import CommentContainer from '@/components/community/comment/commentContainer';
import NoComment from '@/components/community/comment/noComment';
import { ParamsProps } from '@/lib/types/paramsProps.types';
import ReturnButton from '@/components/community/articlePage/returnButton';

export default async function Page({ params }: ParamsProps) {
  const article = await getArticle(params.id);
  const { data } = await getArticleComments(params.id);

  return (
    <article className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <ArticleHeader
        id={article.id}
        nickname='판다'
        title={article.title}
        createdAt={article.createdAt}
      />
      <div className='mb-8'>{article.content}</div>
      <CommentForm articleId={params.id} />
      {data.length > 0 ? <CommentContainer data={data} /> : <NoComment />}

      <ReturnButton />
    </article>
  );
}
