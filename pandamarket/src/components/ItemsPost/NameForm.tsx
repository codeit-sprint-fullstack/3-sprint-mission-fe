import styles from "@/components/ItemsPost/NameForm.module.css";
import { useState, ChangeEvent } from "react";

interface NameFormProps {
  updateFormData: (field: string, value: string) => void;
}

export default function NameForm({ updateFormData }: NameFormProps) {
  const [nameMessage, setNameMessage] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(true);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentName = e.target.value;
    updateFormData("name", currentName);

    if (currentName === "" || currentName.length >= 10) {
      setNameMessage("10자 이내로 입력해주세요");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  return (
    <div className={styles.nameWrapper}>
      <label className={styles.nameText}>상품명</label>
      <input
        type="text"
        style={{ border: isName ? "none" : "1px solid #F74747" }}
        placeholder="상품명을 입력해주세요"
        onChange={handleNameChange}
        className={styles.nameInput}
      />
      <p className={styles.errorMsg}>{nameMessage}</p>
    </div>
  );
}