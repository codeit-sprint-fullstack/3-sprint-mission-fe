import styles from "@/components/Product/DropdownList.module.css"

export default function DropdownList({ onSortSelection }) {
  return (
    <div className={styles.dropdownList}>
      <div className={styles.dropdownItem} onClick={() => onSortSelection("recent")}>
        최신순
      </div>
      <div className={styles.dropdownItem} onClick={() => onSortSelection("favorite")}>
        인기순
      </div>
    </div>
  )
}