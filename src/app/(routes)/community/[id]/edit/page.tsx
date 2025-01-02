'use client';

import WriteForm from '@/components/writeArticle/writeForm';
import { useArticleQuery } from '@/hooks/articles/useArticleQuery';
import { useEditArticleMutation } from '@/hooks/articles/useEditArticleMutation';
import { ParamsProps } from '@/lib/types/props.types';

export default function Page({ params }: ParamsProps) {
  const { data: article } = useArticleQuery(params.id);
  const mutation = useEditArticleMutation(params.id);

  return (
    <WriteForm
      initialData={article}
      variant='edit'
      mutation={mutation}
    />
  );
}
