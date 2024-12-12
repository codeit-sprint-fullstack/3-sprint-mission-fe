import cn from '@/lib/cn';
import { ProductInputProps } from './types';

export default function ProductNameInput({
  register,
  errors,
}: ProductInputProps) {
  return (
    <div className='input-section'>
      <label className='input-label'>상품명</label>
      <input
        className={cn('input-base', errors.name && 'error-input')}
        placeholder='상품명을 입력해주세요'
        {...register('name', {
          required: '상품명을 입력해주세요',
          maxLength: {
            value: 10,
            message: '10자 이내로 입력해주세요',
          },
        })}
      />
      {errors.name && (
        <span className='error-message'>{errors.name.message}</span>
      )}
    </div>
  );
}
