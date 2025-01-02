type PillButtonProps = {
  isDisabled: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
};

const PillButton = ({ text, isDisabled, type }: PillButtonProps) => {
  return (
    <button
      className={`h-14 w-full rounded-full ${
        isDisabled
          ? "cursor-not-allowed bg-gray-400"
          : "bg-blue hover:bg-blue-500"
      } text-white`}
      disabled={isDisabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default PillButton;
