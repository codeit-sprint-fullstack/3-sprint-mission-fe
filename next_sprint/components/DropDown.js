import { useState } from "react";
import Image from "next/image";

export default function DropDown({
  handleOptionClick,
  sortOption,
  selectedOption,
  isOpen,
  setIsOpen,
  isKebab,
}) {
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative w-40">
      {isKebab ? (
        <button onClick={toggleOpen} className="pl-[155px]">
          <Image src="/img/btn_dropDown.png" width={3} height={13} alt="드롭다운 케밥 아이콘" />
        </button>
      ) : (
        <button
          onClick={toggleOpen}
          className="w-full text-left px-4 py-2 border rounded-lg bg-white focus:outline-none"
        >
          {selectedOption}
        </button>
      )}
      
      {!isKebab && (
        <Image
        src="/img/drop_arrow.png"
        alt="drop-arrow"
        width={15.7}
        height={14.2}
        className="absolute right-5 top-4"
      />
      )}

      {isOpen && (
        <ul className="absolute left-0 mt-1 w-full border rounded-lg bg-white shadow-md z-10">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick(sortOption[0])}
          >
            {sortOption[0]}
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick(sortOption[1])}
          >
            {sortOption[1]}
          </li>
        </ul>
      )}
    </div>
  );
}
