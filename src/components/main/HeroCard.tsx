import { cn } from "@/lib/utils";
import Image from "next/image";
interface NextImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
}
interface HeroCardProps {
  title: string;
  imgInfo: NextImageProps;
  children?: React.ReactNode;
  classNames?: string;
}

export default function HeroCard({
  title,
  imgInfo,
  children,
  classNames,
}: HeroCardProps) {
  return (
    <div
      className={cn(
        "card laptop:card-side container rounded-none laptop:max-w-[1110px]",
        classNames
      )}
    >
      <div className="card-body py-0 gap-[18px] px-16 tablet:gap-6 laptop:px-0 laptop:gap-8 laptop:flex-1">
        <h2 className="text-[32px]/[44px] block font-bold text-center card-title text-balance break-keep tablet:text-[40px]/[56px] tablet:w-1/2 mx-auto laptop:text-left laptop:w-full">
          {title}
        </h2>
        <div className="card-actions justify-center">{children}</div>
      </div>

      <figure className="pt-[132px] tablet:pt-[211px] laptop:pt-0">
        <Image
          src={imgInfo.src}
          width={imgInfo.width}
          height={imgInfo.height}
          alt={imgInfo.alt ?? ""}
        />
      </figure>
    </div>
  );
}
