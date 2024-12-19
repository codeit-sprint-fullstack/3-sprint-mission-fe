import { getArticle } from '@/services/api/article';
import { ParamsProps } from '@/lib/types/paramsProps.types';
import ReturnButton from '@/components/articlePage/returnButton/returnButton';
import ArticleClient from '@/components/articlePage/articleClient';
import CommentContainer from '@/components/articlePage/comment/commentContainer';

export default async function Page({ params }: ParamsProps) {
  const article = await getArticle(params.id);

  return (
    <article className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <ArticleClient initialData={article} />
      <CommentContainer
        id={article.id}
        variant='article'
      />
      <ReturnButton variant='article' />
    </article>
  );
}
