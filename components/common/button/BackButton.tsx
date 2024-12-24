import Image from "next/image";
import backIcon from "@/public/icons/ic_back@2x.png";
import Link from "next/link";

type BackButtonProps = {
  backPath: string;
  children: React.ReactNode;
};

const BackButton = ({ backPath, children }: BackButtonProps) => {
  return (
    <Link href={backPath}>
      <button className="mx-auto mb-[190px] flex items-center rounded-[40px] bg-blue px-8 py-3 text-blue-text">
        {children}
        <Image src={backIcon} alt="뒤로가기" width={24} height={24} />
      </button>
    </Link>
  );
};

export default BackButton;
