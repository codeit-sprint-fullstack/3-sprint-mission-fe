import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type HomeBannerProps = {
  title: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string | StaticImageData;
  isFooter?: boolean;
};

const HomeBanner = ({
  title,
  buttonText,
  buttonLink = "/login",
  imageSrc,
  isFooter,
}: HomeBannerProps) => {
  return (
    <section className="box-border h-[540px] w-full bg-[#cfe5ff] sm:h-[540px]">
      <figure className="mx-auto flex h-full items-end justify-center">
        <div className="mb-[90px] max-w-[400px]">
          <h1
            className="mb-[4rem] max-w-[35rem] whitespace-normal break-keep text-center text-[4rem] font-bold leading-[5.6rem] sm:max-w-[24rem] sm:text-center sm:text-[3.2rem] sm:leading-[4rem] md:max-w-full"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {!isFooter && (
            <Link href={buttonLink}>
              <button className="h-[5.6rem] w-full max-w-[36rem] cursor-pointer rounded-[4rem] border-none bg-blue px-[11rem] py-[1.6rem] text-[2rem] font-semibold text-white sm:px-[7rem] sm:py-[1rem] sm:text-[1.8rem]">
                {buttonText}
              </button>
            </Link>
          )}
        </div>
        <div className="w-full max-w-[746px]">
          <Image
            className="h-auto w-auto align-top"
            src={imageSrc || ""}
            alt={title}
          />
        </div>
      </figure>
    </section>
  );
};

export default HomeBanner;
