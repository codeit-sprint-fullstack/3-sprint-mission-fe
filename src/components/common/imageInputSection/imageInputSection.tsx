import { useState } from 'react';
import { ImageUploadInputProps } from './types';
import ImageInputBox from './imageInputBox';
import ImageCard from './imageCard';

export function ImageUploadInput({
  label,
  onFileChange,
}: ImageUploadInputProps) {
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onFileChange(file);
  };

  const removePreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl('');
    onFileChange(null);
  };

  return (
    <div className='input-section'>
      <h2 className='input-label'>{label}</h2>
      <div className='flex gap-[10px] md:gap-[10px] xl:gap-6'>
        <ImageInputBox onChange={handleFileChange} />
        {previewUrl.length > 0 && (
          <ImageCard
            imgSrc={previewUrl}
            onClick={removePreview}
          />
        )}
      </div>
    </div>
  );
}
