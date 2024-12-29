import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function ImageCard({
  imgSrc,
  onClick,
}: {
  imgSrc: string;
  onClick: () => void;
}) {
  return (
    <div className='relative w-[168px] md:w-[168px] xl:w-[282px] aspect-square'>
      <Image
        src={imgSrc}
        alt='업로드 할 이미지'
        fill
        className='rounded-[12px]'
      />
      <div
        onClick={onClick}
        className='w-5 h-5 rounded-full bg-bg-close-button absolute right-[14px] top-[14px] flex justify-center items-center cursor-pointer'
      >
        <FontAwesomeIcon
          icon={faX}
          className='text-text-white text-[11px]'
        />
      </div>
    </div>
  );
}
