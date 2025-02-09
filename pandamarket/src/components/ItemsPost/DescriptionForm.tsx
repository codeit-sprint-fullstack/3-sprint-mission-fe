import styles from "@/components/ItemsPost/DescriptionForm.module.css";
import { useState, ChangeEvent } from "react";

interface DescriptionFormProps {
  updateFormData: (key: string, value: string) => void;
}

export default function DescriptionForm({ updateFormData }: DescriptionFormProps) {
  const [descriptionMessage, setDescriptionMessage] = useState("");
  const [isDescription, setIsDescription] = useState(true);

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData("description", e.target.value);
    const currentDescription = e.target.value;
    if (currentDescription === "" || currentDescription.length <= 10) {
      setDescriptionMessage("10자 이상 입력해주세요");
      setIsDescription(false);
    } else {
      setDescriptionMessage("");
      setIsDescription(true);
    }
  };

  return (
    <div className={styles.descriptionWrapper}>
      <label className={styles.descriptionText}>상품 소개</label>
      <textarea
        style={{ border: isDescription === false ? "1px solid #F74747" : "none" }}
        placeholder="상품 설명 입력해주세요"
        onChange={handleDescriptionChange}
        className={styles.descriptionInput}
      />
      <p className={styles.errorMsg}>{descriptionMessage}</p>
    </div>
  );
}
