import WriteForm from '@/components/community/writeForm/writeForm';
import { ParamsProps } from '@/lib/types/paramsProps.types';
import { getArticle } from '@/services/api/article';

export default async function Page({ params }: ParamsProps) {
  const article = await getArticle(params.id);

  return (
    <WriteForm
      initialData={article}
      articleId={params.id}
    />
  );
}
