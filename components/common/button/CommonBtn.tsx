type CommonBtnProps = {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const CommonBtn = ({
  disabled = false,
  onClick,
  children,
  variant = "primary",
}: CommonBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={` ${
        disabled
          ? "bg-gray text-gray-light"
          : variant === "primary"
            ? "bg-blue text-blue-text"
            : "border border-gray bg-white text-gray-heart_number"
      } box-border h-[42px] text-nowrap rounded-lg px-6 text-base font-semibold`}
    >
      {children}
    </button>
  );
};

export default CommonBtn;
