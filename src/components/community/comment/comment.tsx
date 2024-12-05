import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { CommentProps } from './comment.types';
import Profile from '../profile/profile';

export default function Comment({
  nickname,
  createdAt,
  profileIcon,
  content,
}: CommentProps) {
  return (
    <div className='w-full flex flex-col justify-start pb-3 bg-bg-article-normal mb-6'>
      <div className='mb-6 flex justify-between w-full'>
        <span>{content}</span>
        <FontAwesomeIcon
          icon={faEllipsisV}
          className='p-[10px] text-text-gray-primary'
        />
      </div>
      <Profile
        variant='time'
        layout='vertical'
        nickname={nickname}
        createdAt={createdAt}
        profileIcon={profileIcon}
        iconSize={32}
      />
    </div>
  );
}
