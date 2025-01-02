import axiosInstance from '@/lib/axios/axiosInstance';

export const uploadImage = async (file: File): Promise<string[]> => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const { data } = await axiosInstance.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.imageUrls;
  } catch (e) {
    console.error('이미지 업로드 실패', e);
    throw e;
  }
};
