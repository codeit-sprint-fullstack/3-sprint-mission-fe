import { useState, ChangeEvent, JSX } from "react";
import styles from "@/components/DropdownBox.module.css";

export default function Dropdown(): JSX.Element {
  const [currentValue, setCurrentValue] = useState<string>("최신순");
  const [order, setOrder] = useState<string>("createAt");

  const handleOnChangeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCurrentValue(value);

    if (value === "최신순") {
      setOrder("createAt");
    } else if (value === "좋아요 순") {
      setOrder("favoriteCount");
    }
  };

  return (
    <div className={styles.sort}>
      <select
        className={styles.sortBtn}
        onChange={handleOnChangeSelectValue}
        value={currentValue}
      >
        <option className={styles.option}>최신순</option>
        <option className={styles.option}>좋아요순</option>
      </select>
    </div>
  );
}
