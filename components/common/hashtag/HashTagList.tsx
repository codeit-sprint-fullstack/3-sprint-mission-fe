import ic_X from "@/public/icons/ic-X.svg";
import Image from "next/image";

type HashTagListProps = {
  tags: string[];
  hasRemoveButton?: boolean;
  onRemove?: (tag: string) => void;
};

const HashTagList = ({
  tags,
  hasRemoveButton = false,
  onRemove,
}: HashTagListProps) => {
  return (
    <ul className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="flex items-center rounded-full bg-gray-light px-4 py-2 text-base"
        >
          #{tag}
          {hasRemoveButton && onRemove && (
            <button
              onClick={() => onRemove(tag)}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <Image src={ic_X} alt="삭제" width={22} height={24} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HashTagList;
