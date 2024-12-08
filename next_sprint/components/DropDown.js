import { useState } from "react";
import Image from "next/image";

export default function DropDown({handleOptionClick,selectedOption, isOpen, setIsOpen}) {
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative w-40">
      <button
        onClick={toggleOpen}
        className="w-full text-left px-4 py-2 border rounded-lg bg-white focus:outline-none"
      >
        {selectedOption} 
      </button>
      <Image src="/img/drop_arrow.png" alt="drop-arrow" width={15.7} height={14.2} className="absolute right-5 top-4"/>

      {isOpen && (
        <ul className="absolute left-0 mt-1 w-full border rounded-lg bg-white shadow-md z-10">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("최신순")}
          >
            최신순
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleOptionClick("좋아요순")}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}