import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Market() {
  const router = useRouter();

  // 페이지 접근 시 로컬 스토리지에서 토큰 확인
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <div className="coming_soon">Market</div>
    </>
  );
}

export default Market;
