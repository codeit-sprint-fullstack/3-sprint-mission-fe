import cn from '@/lib/cn';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LikeCounter({
  likes,
  className,
  liked,
}: {
  likes: number;
  className?: string;
  liked: boolean;
}) {
  return (
    <div
      className={cn(
        'text-text-charcoal-primary flex gap-[5px] items-center',
        className,
      )}
    >
      <FontAwesomeIcon
        icon={liked ? fullHeart : emptyHeart}
        className='text-text-red'
      />
      <span>{likes.toLocaleString()}</span>
    </div>
  );
}
