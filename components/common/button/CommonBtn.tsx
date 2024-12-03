type CommonBtnProps = {
  disabled?: boolean;
  children: React.ReactNode;
};

const CommonBtn = ({ disabled = false, children }: CommonBtnProps) => {
  return (
    <button
      className={`${
        disabled ? "bg-gray text-gray" : "bg-blue text-blue-text"
      } box-border h-[42px] text-nowrap rounded-lg px-6 text-base font-semibold`}
    >
      {children}
    </button>
  );
};

export default CommonBtn;
