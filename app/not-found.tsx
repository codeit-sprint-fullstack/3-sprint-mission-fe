import BackButton from "@/components/common/button/BackButton";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="mt-40 flex h-full flex-col items-center justify-center gap-10">
      <div className="h-full text-center text-3xl font-bold">
        404-Page not found
      </div>
      <Link href={"/"}>
        <BackButton>홈으로 돌아가기</BackButton>
      </Link>
    </div>
  );
};

export default NotFound;
