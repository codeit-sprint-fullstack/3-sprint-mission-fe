import { getUploadUrl, uploadImageOnS3 } from '@/services/api/image';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useUploadUrl = (filename: string | undefined) => {
  const { data: urls } = useQuery({
    queryKey: ['uploadUrl', filename],
    queryFn: async () => {
      if (filename) return await getUploadUrl(filename);
    },
    enabled: !!filename,
  });
  return {
    mutate: useMutation({
      mutationFn: async (file: File) => {
        if (file && urls)
          return await uploadImageOnS3({ file, url: urls?.uploadUrl });
        throw new Error('파일 또는 업로드 url이 없습니다.');
      },
    }),
    imageUrl: urls?.imageUrl,
  };
};
