import { ProductRegistrationFormData } from '@/components/items/registration/types';
import { useState } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface UseTagInputProps {
  setValue: UseFormSetValue<ProductRegistrationFormData>;
  watch: UseFormWatch<ProductRegistrationFormData>;
}

export default function useTagInput({ setValue, watch }: UseTagInputProps) {
  const [tagInput, setTagInput] = useState('');
  const [tagError, setTagError] = useState<string>('');
  const tags = watch('tags');

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setTagError('');
      if (e.nativeEvent.isComposing) return;
      const newTag = tagInput.trim();

      if (newTag.length > 5 || newTag.length < 1) {
        return setTagError('5글자 이내로 입력해주세요');
      }

      if (newTag !== '' && !tags.includes(newTag)) {
        setValue('tags', [...tags, newTag]);
        return setTagInput('');
      }

      setTagError('이미 등록된 태그입니다.');
    }
  };

  const handleRemoveTag = (indexToRemove: number) => {
    setValue(
      'tags',
      tags.filter((_, index) => indexToRemove !== index),
    );
  };

  return {
    tagInput,
    setTagInput,
    tagError,
    tags,
    handleAddTag,
    handleRemoveTag,
  };
}
