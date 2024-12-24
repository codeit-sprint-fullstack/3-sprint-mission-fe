import React from "react";
import SearchIcon from "@/public/icons/ic_search.svg";
import Image from "next/image";

type SearchBarProps = {
  setSearchKeyword: (searchKeyword: string) => void;
};

const SearchBar = ({ setSearchKeyword }: SearchBarProps) => {
  const handleSearchKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchKeyword((e.target as HTMLInputElement).value);
    }
  };

  return (
    <div className="relative h-[42px] w-80 rounded-lg bg-gray-light sm:w-full sm:min-w-72 md:w-60 xl:w-80">
      <Image
        src={SearchIcon}
        alt="검색 아이콘"
        className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer"
      />
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        className="font-pretendard h-full w-full rounded-lg border-none bg-transparent pl-10 text-lg font-normal text-black outline-none"
        onKeyDown={handleSearchKeyword}
      />
    </div>
  );
};

export default SearchBar;
