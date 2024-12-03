import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LikeCounter({ likes }: { likes: number }) {
  return (
    <div className='text-text-charcoal-primary flex gap-[5px] items-center'>
      <FontAwesomeIcon icon={faHeart} />
      <span>{likes}</span>
    </div>
  );
}
