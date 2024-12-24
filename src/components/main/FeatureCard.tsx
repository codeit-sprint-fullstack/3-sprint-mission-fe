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
        "container gap-6 rounded-none card desktop:card-side",
        classNames
      )}
    >
      <figure className="">
        <Image
          src={imgInfo.src}
          alt={imgInfo.alt}
          width={imgInfo.width}
          height={imgInfo.height}
        />
      </figure>
      <div className="card-body p-0 bg-[#FCFCFC] leading-[26px] *:text-balance *:break-keep tablet:text-lg">
        <div className="font-bold text-primary">{keyword}</div>
        <h2 className="font-bold block pb-2 text-2xl tablet:text-[32px]/[42px] card-title">
          {title}
        </h2>
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
}
