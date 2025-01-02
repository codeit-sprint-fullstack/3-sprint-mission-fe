import { ParamsProps } from '@/lib/types/props.types';
import ReturnButton from '@/components/common/returnButton/returnButton';
import ArticleClient from '@/components/articlePage/articleClient';
import CommentContainer from '@/components/common/comment/commentContainer';
import AuthRedirect from '@/components/auth/authRedirect';

export default function Page({ params }: ParamsProps) {
  return (
    <article className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <AuthRedirect variant='signedOut' />
      <ArticleClient id={params.id} />
      <CommentContainer
        id={params.id}
        variant='article'
      />
      <ReturnButton variant='article' />
    </article>
  );
}
