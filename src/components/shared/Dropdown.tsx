"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface DropdownProps {
  options: string[];
  selectedValue: string;
  placeholder: string;
  onValueChange: (value: string) => void;
  className?: string;
  buttonClassName?: string;
  listClassName?: string;
  itemClassName?: string;
}

export default function Dropdown({
  options,
  selectedValue,
  placeholder,
  onValueChange,
  className = "",
  buttonClassName = "",
  listClassName = "",
  itemClassName = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    onValueChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      onClick={toggleDropdown}
      className={`relative cursor-pointer text-left ${className} `}
    >
      <button
        className={`w-[180px] h-[50px] pl-5 pb-2 text-left rounded-[2px] font-500 ${buttonClassName}`}
      >
        {selectedValue || placeholder}
        <Image
          src="/dropdown.svg"
          alt="dropdown Icon"
          className="absolute right-[10px] top-1/2 transform -translate-y-1/2 z-10"
          width={16}
          height={16}
        />
      </button>
      {isOpen && (
        <ul
          className={`absolute w-full bg-black mt-1 z-50 ${listClassName}`}
        >
          {options.map((option) => (
            <li
              key={option}
              className={`p-2 cursor-pointer ${itemClassName} text-[16px] font-[600] leading-[23.17px]`}
              style={{ fontFamily: "var(--font-noto-sans-kr)" }}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
