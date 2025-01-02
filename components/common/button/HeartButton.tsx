import HeartIcon from "@/components/SVG/HeartIcon";

type HeartButtonProps = {
  id: number; // 상품 ID
  likeCount: number; // 좋아요 수
  isFavorite: boolean; // 좋아요 여부
  size: number; // 사이즈
  isBorder?: boolean; // 테두리 여부
  onToggleFavorite: (id: number, isFavorite: boolean) => void; // 좋아요 이벤트 핸들러
};

const HeartButton = ({
  id,
  likeCount,
  isFavorite,
  isBorder = false,
  size,
  onToggleFavorite,
}: HeartButtonProps) => {
  const className = isBorder
    ? "flex cursor-pointer items-center gap-1 rounded-[35px] border px-3 py-1"
    : "flex cursor-pointer items-center gap-1";
  return (
    <div className={className} onClick={() => onToggleFavorite(id, isFavorite)}>
      <HeartIcon
        size={size}
        fillColor={isFavorite ? "#EC4899" : "none"}
        strokeColor={isFavorite ? "#EC4899" : "#6B7280"}
      />
      <span className="text-base">{likeCount}</span>
    </div>
  );
};

export default HeartButton;
