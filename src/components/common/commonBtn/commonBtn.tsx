import { ButtonHTMLAttributes } from 'react';

export default function CommonBtn({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className='w-[88px] h-[42px] bg-bg-button-active disabled:bg-bg-button-disabled text-white rounded-lg font-semibold'
    >
      {children}
    </button>
  );
}
