import Image from "next/image";
import facebookIcon from "@/public/icons/sns/ic_facebook.png";
import twitterIcon from "@/public/icons/sns/ic_twitter.png";
import youtubeIcon from "@/public/icons/sns/ic_youtube.png";
import instagramIcon from "@/public/icons/sns/ic_instagram.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="box-border h-[160px] bg-[#111827] px-4 pt-8 sm:px-6">
      <div className="mx-auto flex min-w-[325px] max-w-[1120px] flex-wrap items-center justify-between text-nowrap sm:flex-nowrap">
        <div className="order-1 mt-6 text-gray sm:order-none sm:mt-0">
          ©codeit - {currentYear}
        </div>
        <div className="order-none flex gap-7 text-custom-white">
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className="order-none flex gap-3">
          <a href="https://www.facebook.com" target="_blank">
            <Image src={facebookIcon} alt="facebook" width={20} height={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <Image src={twitterIcon} alt="twitter" width={20} height={20} />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <Image src={youtubeIcon} alt="youtube" width={20} height={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <Image src={instagramIcon} alt="instagram" width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
