import React from "react";

type SortByDropdownProps = {
  setOrderBy: (orderBy: "recent" | "favorite") => void;
  children: React.ReactNode;
};

const SortByDropdown = ({ setOrderBy, children }: SortByDropdownProps) => {
  const handleOrderByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value as "recent" | "favorite");
  };

  return (
    <select
      onChange={handleOrderByChange}
      className="font-pretendard rounded-lg border border-[#e5e7eb] px-5 py-3 text-lg font-semibold"
    >
      {children}
    </select>
  );
};

export default SortByDropdown;
