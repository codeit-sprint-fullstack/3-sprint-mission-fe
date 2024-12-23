import cn from '@/lib/cn';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
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
      <FontAwesomeIcon icon={emptyHeart} />
      <span>{likes.toLocaleString()}</span>
    </div>
  );
}
