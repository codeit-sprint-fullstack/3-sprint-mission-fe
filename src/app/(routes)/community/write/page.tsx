'use client';

import WriteForm from '@/components/writeArticle/writeForm';
import { useCreateArticleMutation } from '@/hooks/articles/useCreateArticleMutation';

export default function Page() {
  const mutation = useCreateArticleMutation();

  return (
    <WriteForm
      variant='write'
      mutation={mutation}
    />
  );
}
