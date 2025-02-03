import Link from "next/link";
import CommonBtn from "@/components/common/button/CommonBtn";

const AddProductButton = () => {
  return (
    <Link href={"/items/create"}>
      <CommonBtn>상품 등록하기</CommonBtn>
    </Link>
  );
};

export default AddProductButton;
