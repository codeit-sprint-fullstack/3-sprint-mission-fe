import IcPlus from '@/public/icons/ic_plus.svg';

export default function ImageInputBox({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className='relative w-[168px] md:w-[168px] xl:w-[282px] aspect-square bg-bg-input flex items-center justify-center rounded-[12px] cursor-pointer'>
      <div className='flex flex-col justify-between items-center'>
        <IcPlus className='w-12 h-12' />
        <span>이미지 등록</span>
      </div>
      <input
        type='file'
        accept='image/*'
        onChange={onChange}
        className='hidden'
      />
    </label>
  );
}
