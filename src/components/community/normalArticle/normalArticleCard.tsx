import Image from 'next/image';
import { ArticleCardProps } from '../types';
import mockImage from '@/public/images/mockImage/mock_image.png';
import profileIcon from '@/public/icons/profile_icon.png';
import LikeCounter from '../../common/likeCounter/likeCounter';
import Profile from '../../common/profile/profile';
import Link from 'next/link';

export default function NormalArticleCard({
  title,
  nickname,
  likeCount,
  createdAt,
  articleId,
}: ArticleCardProps) {
  return (
    <Link href={`/community/${articleId}`}>
      <div className='w-full h-[138px] flex flex-col items-start bg-bg-article-normal border-b border-b-border-normalArticle'>
        <div className='w-full flex justify-between'>
          <div className='font-semibold text-[18px] md:text-[18px] xl:text-[20px] line-clamp-2'>
            {title}
          </div>
          <Image
            src={mockImage}
            alt='게시글 이미지'
            width={72}
            height={72}
            className='border border-border-image rounded-[6px]'
          />
        </div>
        <div className='flex justify-between w-full mt-4'>
          <Profile
            nickname={nickname}
            createdAt={createdAt}
            profileIcon={profileIcon}
            iconSize={24}
            layout='horizontal'
            variant='date'
          />
          <LikeCounter likes={likeCount} />
        </div>
      </div>
    </Link>
  );
}
