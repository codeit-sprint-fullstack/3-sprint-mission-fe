import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArticleHeaderProps } from './types';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Profile from '../profile/profile';
import profileIcon from '@/public/icons/profile_icon.png';
import LikeButton from '@/components/common/likeButton/likeButton';

export default function ArticleHeader({
  nickname,
  title,
  createdAt,
}: ArticleHeaderProps) {
  return (
    <div className='flex flex-col mb-4 md:mb-4 xl:mb-6'>
      <div className='flex w-full mb-4 items-center justify-between'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
      <div className='flex items-center gap-8 pb-4 border-b border-b-border-normalArticle'>
        <Profile
          nickname={nickname}
          createdAt={createdAt}
          profileIcon={profileIcon}
          iconSize={40}
        />
        <span className='text-text-gray-secondary text-[30px] font-thin'>
          |
        </span>
        <LikeButton
          count={50}
          liked={false}
        />
      </div>
    </div>
  );
}
