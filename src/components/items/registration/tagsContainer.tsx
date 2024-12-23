import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TagsContainerProps } from './types';

export default function TagsContainer({
  variant,
  tags,
  handleRemoveTag,
}: TagsContainerProps) {
  return (
    <div className='flex gap-3'>
      {tags.map((tag, index) => (
        <span
          className='bg-bg-tag flex items-center justify-between px-3 py-[6px] rounded-[26px] gap-2'
          key={tag}
        >
          #{tag}
          {variant === 'registration' && handleRemoveTag && (
            <button
              type='button'
              className='w-5 h-5 bg-bg-close-button rounded-full flex items-center justify-center text-text-white-secondary'
              onClick={() => handleRemoveTag(index)}
            >
              <FontAwesomeIcon
                icon={faX}
                className='w-2'
              />
            </button>
          )}
        </span>
      ))}
    </div>
  );
}
