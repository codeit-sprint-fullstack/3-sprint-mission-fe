interface DropdownItem {
  title: string;
  action: "edit" | "delete";
}

const dropdownList: DropdownItem[] = [
  {
    title: "수정하기",
    action: "edit",
  },
  {
    title: "삭제하기",
    action: "delete",
  },
];

type ActionsDropdownProps = {
  onDelete: () => void;
  onEdit?: () => void; // 수정 액션 콜백
};

const ActionsDropdown = ({ onDelete, onEdit }: ActionsDropdownProps) => {
  const onClick = (action: string): void => {
    switch (action) {
      case "edit":
        console.log("수정하기");
        if (onEdit) {
          onEdit();
        }
        break;
      case "delete":
        console.log("삭제하기");
        onDelete();
        break;
      default:
        break;
    }
  };

  return (
    <ul className="w-[139px] rounded-lg border border-[#D1D5DB] bg-white">
      {dropdownList.map((item, index) => (
        <li
          key={item.title}
          className={index !== 0 ? "border-t-[1px] border-[#D1D5DB]" : ""}
        >
          <div
            className="flex h-[46px] w-full cursor-pointer items-center justify-center text-gray-heart_number"
            onClick={() => onClick(item.action)}
          >
            {item.title}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActionsDropdown;
