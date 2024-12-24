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
        "card desktop:card-side container rounded-none",
        classNames
      )}
    >
      <div className="card-body py-0 gap-[18px] px-16 tablet:gap-6">
        <h2 className="text-[32px]/[44px] block font-bold text-center card-title text-balance break-keep tablet:text-[40px]/[56px] tablet:w-1/2 mx-auto">
          {title}
        </h2>
        <div className="justify-center card-actions">{children}</div>
      </div>
      <figure className="pt-[132px] tablet:pt-[211px]">
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
