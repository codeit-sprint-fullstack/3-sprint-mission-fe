import { useRouter } from "next/navigation";

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

type PostAndCommentActionsDropdownProps = {
  id?: string | number; // 수정 시 필요한 id 값
  basePath?: "/items" | "/articles"; // 경로 변경을 위한 추가 prop
  onDelete: () => void;
  onEdit?: () => void; // 댓글 수정 시 필요한 함수
  type: "post" | "comment";
};

const PostAndCommentActionsDropdown = ({
  id,
  basePath,
  onDelete,
  onEdit,
  type,
}: PostAndCommentActionsDropdownProps) => {
  const router = useRouter();

  const onClick = (action: string): void => {
    switch (action) {
      case "edit":
        if (type === "post" && basePath && id) {
          router.push(`${basePath}/${id}/edit`); // 수정 페이지로 이동
        } else if (type === "comment" && onEdit) {
          onEdit();
        }

        break;
      case "delete":
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

export default PostAndCommentActionsDropdown;
