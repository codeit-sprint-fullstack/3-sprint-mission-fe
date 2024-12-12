import Image from "next/image";
import backIcon from "@/public/icons/ic_back@2x.png";

type BackButtonProps = {
  children: React.ReactNode;
};

const BackButton = ({ children }: BackButtonProps) => {
  return (
    <button className="mx-auto mb-[190px] flex items-center rounded-[40px] bg-blue px-8 py-3 text-blue-text">
      {children}
      <Image src={backIcon} alt="뒤로가기" width={24} height={24} />
    </button>
  );
};

export default BackButton;
