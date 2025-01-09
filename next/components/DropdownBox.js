import styles from "@/components/DropdownBox.module.css";
// import axios from "@/lib/axios";
// import PostListCard from "./postListCard";
import { useState} from "react";

export default function Dropdown() {
  const [currentValue, setCurrentValue] = useState("최신순");
  const [order, setOrder] = useState("createAt");
  
  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.value);
    if (e.target.value === "최신순") {
      setOrder("createAt");
    } else if (e.target.value === "좋아요 순") {
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
