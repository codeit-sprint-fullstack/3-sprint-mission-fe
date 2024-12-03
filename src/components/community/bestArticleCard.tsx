import Image from 'next/image';
import { BestBadge } from './bestBadge';
import { ArticleProps } from './types';
import mockImage from '@/public/images/mockImage/mock_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';

export default function BestArticleCard({
  content,
  nickname,
  likes,
  createdAt,
}: ArticleProps) {
  return (
    <div className='px-6 pb-4 bg-bg-article-best w-fit rounded-lg'>
      <div className='w-[295px] md:w-[292px] xl:w-[336px] h-[182px] md:h-[182px] xl:h-[153px] flex flex-col items-start justify-between'>
        <BestBadge />
        <div className='h-[72px] w-full flex justify-between items-start'>
          <div className='font-semibold text-[18px] md:text-[18px] xl:text-[20px]'>
            {content}
          </div>
          <Image
            src={mockImage}
            alt='베스트 상품 이미지'
            width={72}
            height={72}
            className='border border-border-image rounded-[6px]'
          />
        </div>
        <div className='flex justify-between w-full text-[14px] font-normal'>
          <div className='flex gap-2'>
            <span className='text-text-black-secondary'>{nickname}</span>
            <div className='text-text-charcoal-primary flex gap-[5px] items-center'>
              <FontAwesomeIcon icon={faHeart} />
              <span>{likes}</span>
            </div>
          </div>
          <span className='text-text-gray-primary'>{createdAt}</span>
        </div>
      </div>
    </div>
  );
}
