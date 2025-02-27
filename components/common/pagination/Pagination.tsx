import React from "react";
import ARROW_LEFT_INACTIVE from "@/public/icons/arrow/arrow-left-inactive.svg";
import ARROW_LEFT_ACTIVE from "@/public/icons/arrow/arrow-left-active.svg";
import ARROW_RIGHT_INACTIVE from "@/public/icons/arrow/arrow-right-inactive.svg";
import ARROW_RIGHT_ACTIVE from "@/public/icons/arrow/arrow-right-active.svg";
import Image from "next/image";

// 페이지네이션 색상 상수
const BORDER_COLOR = "#E5E7EB";
const ACTIVE_BG_COLOR = "#2F80ED";
const ACTIVE_TEXT_COLOR = "#F9FAFB";
const INACTIVE_TEXT_COLOR = "#6B7280";

type PaginationProps = {
  pageNo: number;
  setPageNo: (pageNo: number) => void;
  totalPage: number;
};

const Pagination = ({ pageNo, setPageNo, totalPage }: PaginationProps) => {
  const startPage = Math.max(1, Math.min(pageNo - 2, totalPage - 4));
  const endPage = Math.min(totalPage, startPage + 4);
  const paginationArr = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  const handlePrevPage = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  const handleNextPage = () => {
    if (pageNo < totalPage) setPageNo(pageNo + 1);
  };

  return (
    <div className="mx-auto mb-[140px] mt-10 flex w-[300px] justify-evenly">
      <div
        className="flex h-10 w-10 cursor-pointer items-center justify-center"
        onClick={handlePrevPage}
      >
        <Image
          src={pageNo === 1 ? ARROW_LEFT_INACTIVE : ARROW_LEFT_ACTIVE}
          alt="이전 페이지"
          className="h-4 w-4"
        />
      </div>
      {paginationArr.map((value) => (
        <div
          key={value}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border"
          onClick={() => setPageNo(value)}
          style={{
            borderColor: BORDER_COLOR,
            backgroundColor: value === pageNo ? ACTIVE_BG_COLOR : "transparent",
            color: value === pageNo ? ACTIVE_TEXT_COLOR : INACTIVE_TEXT_COLOR,
          }}
        >
          {value}
        </div>
      ))}
      <div
        className="flex h-10 w-10 cursor-pointer items-center justify-center"
        onClick={handleNextPage}
      >
        <Image
          src={pageNo === totalPage ? ARROW_RIGHT_INACTIVE : ARROW_RIGHT_ACTIVE}
          alt="다음 페이지"
          className="h-4 w-4"
        />
      </div>
    </div>
  );
};

export default Pagination;
