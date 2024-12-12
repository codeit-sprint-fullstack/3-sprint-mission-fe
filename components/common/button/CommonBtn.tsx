type CommonBtnProps = {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const CommonBtn = ({ disabled = false, onClick, children }: CommonBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        disabled ? "bg-gray text-gray-light" : "bg-blue text-blue-text"
      } box-border h-[42px] text-nowrap rounded-lg px-6 text-base font-semibold`}
    >
      {children}
    </button>
  );
};

export default CommonBtn;
