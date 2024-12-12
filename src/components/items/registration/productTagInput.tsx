import cn from '@/lib/cn';
import { ProductTagInputProps } from './types';

export default function ProductTagInput({
  tagInput,
  handleAddTag,
  setTagInput,
  tagError,
}: ProductTagInputProps) {
  return (
    <div className='input-section'>
      <label className='input-label'>태그</label>
      <input
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleAddTag}
        placeholder='태그를 입력해주세요.'
        className={cn('input-base', tagError.length && 'error-input')}
      />
      {tagError && <span className='error-message'>{tagError}</span>}
    </div>
  );
}
