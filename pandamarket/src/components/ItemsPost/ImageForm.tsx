import React, { useState, ChangeEvent } from 'react';
import styles from '@/components/ItemsPost/ImageForm.module.css';
import Image from 'next/image';

interface PreviewImage {
  file: File;
  previewUrl: string;
}

interface ImageFormProps {
  updateFormData: (field: string, value: File[]) => void;
}

const ImageForm: React.FC<ImageFormProps> = ({ updateFormData }) => {
  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([]);
  const [imgMessage, setImgMessage] = useState<string>('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];

    // 최대 3개 이미지만 허용
    if (previewImages.length + files.length > 3) {
      setImgMessage('*이미지는 최대 3개까지 가능합니다.');
      return;
    }

    const newPreviews = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setPreviewImages((prev) => [...prev, ...newPreviews]);
    updateFormData('image', [...previewImages.map((p) => p.file), ...files]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedPreviews = [...previewImages];
    updatedPreviews.splice(index, 1);
    setPreviewImages(updatedPreviews);
    updateFormData('image', updatedPreviews.map((p) => p.file));
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <p className={styles.imageText}>상품 이미지</p>
        <label className={styles.customFileInput}>
          <div className={styles.fileInputContent}>
            <Image
              src="/images/ic_plus.png"
              width={48} height={48}
              alt="regist Image"
            />
            <span className={styles.registText}>이미지 등록</span>
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className={styles.imageInput}
          />
        </label>
        {/* 이미지 등록 인풋 박스 아래에 메시지 표시 */}
        <p className={styles.errorMsg}>{imgMessage}</p>
      </div>
      {/* 미리보기 섹션 */}
      <div className={styles.previewContainer}>
        {previewImages.map((preview, index) => (
          <div key={index} className={styles.previewItem}>
            <img
              src={preview.previewUrl}
              alt={`preview-${index}`}
              className={styles.previewImage}
            />
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => handleRemoveImage(index)}
            >
              <Image
                src="/images/ic_X.png"
                width={22}
                height={24}
                alt="remove image"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageForm;
