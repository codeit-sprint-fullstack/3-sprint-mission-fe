import Link from "next/link";

export default function Button({ children, handleClick }) {
  return (
    <>
      <button onClick={handleClick}
      className="bg-custom_blue w-[88px] h-[42px] rounded-lg px-[23px] py-3 text-base font-semibold leading-[19.09px] text-white">
        {children}
      </button>
    </>
  );
}
