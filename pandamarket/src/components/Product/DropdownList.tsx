import styles from "@/components/Product/DropdownList.module.css";

// Props 타입 정의
type DropdownListProps = {
  onSortSelection: (sortOption: string) => void;
};

export default function DropdownList({ onSortSelection }: DropdownListProps) {
  return (
    <div className={styles.dropdownList}>
      <div className={styles.dropdownItem} onClick={() => onSortSelection("recent")}>
        최신순
      </div>
      <div className={styles.dropdownItem} onClick={() => onSortSelection("favorite")}>
        인기순
      </div>
    </div>
  );
}
