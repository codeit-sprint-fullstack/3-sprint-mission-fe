import cn from '@/lib/cn';
import { ProductInputProps } from './types';

export default function ProductPriceInput({
  register,
  errors,
}: ProductInputProps) {
  return (
    <div className='input-section'>
      <label className='input-label'>판매가격</label>
      <input
        type='number'
        className={cn('input-base', errors.price && 'error-input')}
        placeholder='판매 가격을 입력해주세요'
        {...register('price', {
          valueAsNumber: true,
          validate: {
            isNumber: (value) => !Number.isNaN(value) || '숫자로 입력해주세요',
            isInteger: (value) =>
              (Number.isInteger(value) && value >= 0) ||
              '양의 정수를 입력해주세요',
          },
          required: '판매 가격을 입력해주세요',
        })}
      />
      {errors.price && (
        <span className='error-message'>{errors.price.message}</span>
      )}
    </div>
  );
}
