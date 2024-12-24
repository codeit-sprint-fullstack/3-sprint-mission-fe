import { cn } from "@/lib/utils";
import Image from "next/image";
interface NextImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
}
interface FeatureCardProps {
  keyword: string;
  title: string;
  description: string;
  imgInfo: NextImageProps;
  classNames?: string;
}

export default function FeatureCard({
  keyword,
  title,
  description,
  imgInfo,
  classNames,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "container gap-6 rounded-none card laptop:card-side laptop:max-w-[988px] laptop:gap-0",
        classNames
      )}
    >
      <figure className="laptop:flex-1">
        <Image
          src={imgInfo.src}
          alt={imgInfo.alt}
          width={imgInfo.width}
          height={imgInfo.height}
        />
      </figure>

      <div className="card-body p-0 bg-[#FCFCFC] laptop:p-2 leading-[26px] *:text-balance *:break-keep tablet:text-lg tablet:gap-4 laptop:flex-none laptop:basis-[369px] laptop:py-[103px]">
        <div className="font-bold text-primary">{keyword}</div>
        <h2 className="font-bold block pb-2 text-2xl tablet:text-[32px]/[42px] card-title laptop:text-[40px]/[56px]">
          {title}
        </h2>
        <p className="font-medium w-[86%] tablet:w-[47%] laptop:w-full laptop:text-[24px]/[32px]">
          {description}
        </p>
      </div>
    </div>
  );
}
