import cn from '@/lib/cn';
import { ProductInputProps } from './types';

export default function ProductDescriptionInput({
  register,
  errors,
}: ProductInputProps) {
  return (
    <div className='input-section'>
      <label className='input-label'>상품 소개</label>
      <textarea
        className={cn('input-base', errors.description && 'error-input')}
        placeholder='상품 소개를 입력해주세요'
        {...register('description', {
          required: '상품 소개를 입력해주세요',
          minLength: {
            value: 10,
            message: '10자 이상 입력해주세요',
          },
          maxLength: {
            value: 100,
            message: '100자 이하로 입력해주세요',
          },
        })}
      />
      {errors.description && (
        <span className='error-message'>{errors.description.message}</span>
      )}
    </div>
  );
}
