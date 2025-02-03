import React from "react";

type CheckIconProps = {
  fillColor: "red" | "blue";
};

const CheckIcon = ({ fillColor }: CheckIconProps) => {
  const circleFillColor = "red" === fillColor ? "#F74747" : "#3692FF";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={circleFillColor} />
      <path
        d="M7.60693 12.3491L10.6873 15.5L16.2498 8.35718"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
