import cn from '@/lib/cn';
import { ButtonHTMLAttributes } from 'react';

export default function CommonBtn({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        'bg-bg-button-active disabled:bg-bg-button-disabled text-white rounded-lg font-semibold px-[23px] py-2',
        className,
      )}
    >
      {children}
    </button>
  );
}
