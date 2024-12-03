import Image from 'next/image';
import { ArticleProps } from './types';
import mockImage from '@/public/images/mockImage/mock_image.png';
import profileIcon from '@/public/icons/profile_icon.png';
import LikeCounter from './likeCounter';

export default function NormalArticleCard({
  content,
  nickname,
  likes,
  createdAt,
}: ArticleProps) {
  return (
    <div className='w-full h-[138px] flex flex-col items-start bg-bg-article-normal border-b border-b-border-normalArticle'>
      <div className='w-full flex justify-between'>
        <div className='font-semibold text-[18px] md:text-[18px] xl:text-[20px]'>
          {content}
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
        <div className='flex gap-2 text-[14px] font-normal'>
          <Image
            src={profileIcon}
            alt='회원 프로필 사진'
            width={24}
            height={24}
          />
          <span className='text-text-black-secondary'>{nickname}</span>
          <span className='text-text-gray-primary'>{createdAt}</span>
        </div>
        <LikeCounter likes={likes} />
      </div>
    </div>
  );
}
