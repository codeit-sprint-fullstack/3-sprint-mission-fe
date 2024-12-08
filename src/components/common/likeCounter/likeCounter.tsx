import cn from '@/lib/cn';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LikeCounter({
  likes,
  className,
}: {
  likes: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'text-text-charcoal-primary flex gap-[5px] items-center',
        className,
      )}
    >
      <FontAwesomeIcon icon={faHeart} />
      <span>{likes.toLocaleString()}</span>
    </div>
  );
}
