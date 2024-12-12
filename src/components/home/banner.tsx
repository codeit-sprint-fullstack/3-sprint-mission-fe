import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function Banner({
  image,
  children,
}: {
  image: StaticImport;
  children: React.ReactNode;
}) {
  return (
    <section className='w-full bg-bg-banner flex items-end justify-center h-[540px] md:h-[771px] xl:h-[550px]'>
      <div className='w-full md:w-full xl:w-[1110px] h-[492px] md:h-[687px] xl:h-[340px] flex justify-between items-center flex-col md:flex-col xl:flex-row'>
        <div className='flex flex-col  w-[240px] md:w-[512px] xl:w-[357px] items-center'>
          {children}
        </div>
        <Image
          src={image}
          alt='배너 이미지'
          width={746}
        />
      </div>
    </section>
  );
}
