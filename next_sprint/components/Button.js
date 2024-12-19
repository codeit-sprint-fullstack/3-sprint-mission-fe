
export default function Button({ children, handleClick, disabled = false}) {
  return (
    <>
      <button onClick={handleClick} disabled={disabled}
      className={`${ disabled ? "bg-gray-400" : "bg-custom_blue"} w-[88px] h-[42px] rounded-lg px-[23px] py-3 text-base font-semibold leading-[19.09px] text-white`}>
        {children}
      </button>
    </>
  );
}
