import Image from 'next/image';
import { BestBadge } from '../bestBadge';
import { ArticleCardProps } from '../types';
import mockImage from '@/public/images/mockImage/mock_image.png';
import LikeCounter from '../../common/likeCounter/likeCounter';
import Link from 'next/link';
import { formatDate } from '@/lib/formatDate';

export default function BestArticleCard({
  title,
  nickname,
  likeCount,
  createdAt,
  articleId,
}: ArticleCardProps) {
  return (
    <Link href={`/community/${articleId}`}>
      <div className='px-6 pb-4 bg-bg-article-best w-fit rounded-lg'>
        <div className='w-[295px] md:w-[292px] xl:w-[336px] h-[182px] md:h-[182px] xl:h-[153px] flex flex-col items-start justify-between'>
          <BestBadge />
          <div className='h-[72px] w-full flex justify-between items-start'>
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
          <div className='flex justify-between w-full text-[14px] font-normal'>
            <div className='flex gap-2'>
              <span className='text-text-black-secondary'>{nickname}</span>
              <LikeCounter likes={likeCount} />
            </div>
            <span className='text-text-gray-primary'>
              {formatDate(createdAt)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
